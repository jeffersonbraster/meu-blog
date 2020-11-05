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
