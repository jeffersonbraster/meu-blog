import React from "react"

import * as S from "./styles"

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">News</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          04 de Novembro de 2020 • 4 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>Molezinha é uma lenda do geq</S.PostItemTitle>
        <S.PostItemDescription>
          Um verdadeiro icone do geq agora em uma nova casa a FortBrasil. Relata
          que não existe desafios, tudo na molezinha.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
