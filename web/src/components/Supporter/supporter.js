import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from './supporter.module.scss'


const Image = () => {
  const data = useStaticQuery(graphql`
    query SupporterQuery {
        allFile(filter: {relativeDirectory: {eq: "AllSupporter/supporter"}}) {
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
      <img srcSet={data.allFile.edges[0].node.childImageSharp.fluid.srcSet}></img>
      <img srcSet={data.allFile.edges[1].node.childImageSharp.fluid.srcSet}></img>
    </div>

  )
}

export default Image
