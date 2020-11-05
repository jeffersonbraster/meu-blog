import path from "path"
const { createFilePath } = require(`gatsby-source-filesystem`)

//adicionando o campo slug para cada um dos posts
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  //verifica se o arquivo que ele leu é markdown
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
