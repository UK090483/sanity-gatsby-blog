import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from './supporter.module.scss'

const Image = () => {
  const data = useStaticQuery(graphql`
    query KooperationQuery {
        allFile(filter: {relativeDirectory: {eq: "AllSupporter/kooperation"}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  srcSet
                }
              }
            }
          }
        }
      }

  `)

  return (

    <div className={style.root}>
      <img srcSet={data.allFile.edges[1].node.childImageSharp.fluid.srcSet}></img>
      <img srcSet={data.allFile.edges[2].node.childImageSharp.fluid.srcSet}></img>
      <img srcSet={data.allFile.edges[0].node.childImageSharp.fluid.srcSet}></img>

    </div>

  )
}

export default Image
