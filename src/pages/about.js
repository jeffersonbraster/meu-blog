import React from "react"

import Layout from "../components/Layout"
import * as S from "../components/About/styles"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <S.AboutHeader>
      <S.AboutTitle>Sobre min</S.AboutTitle>
    </S.AboutHeader>

    <S.MainContent>
      <p>
        Meu nome é Jefferso Brandão, nasci em Fortaleza/CE, formado em
        Administração de Empresas e Analise e Desenvolvimento de Sistemas.
      </p>

      <p>
        Atualmente estou trabalhando como Analista de Sistemas no Grupo Edson
        Queiroz, onde tive o primeiro contato profissional com TI. Amo estudar
        novas tecnologias e sou apaixonado pelo javascript. Acho que o trabalho
        em equipe e o compartilhamento de aprendizados e novas ideias é
        fundamental em qualquer ambiente profissional. Nas horas livres procuro
        sempre conhecer novas tecnologias e estudar javascript haha.
      </p>
      <p>
        Criei esse blog, para estudar e praticar Gatsby junto com Graphql, e
        também como estou sempre atrás de noticias sobre o mundo da tecnologia,
        irei compartilhar um pouco com vocês por aqui, tá?
      </p>
      <p>
        Por fim, não deixem de me seguir nas redes sociais para compartilharmos
        conhecimentos e qualquer coisa que eu puder ajudar podem contar comigo.
      </p>
    </S.MainContent>
  </Layout>
)

export default AboutPage
