import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styles"

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../images/perfil.png"
        alt="Jefferson Brandão"
        placeholder="tracedSVG"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
