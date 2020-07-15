import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from './supporter.module.scss'

const AllSuporters = () => {
  const data = useStaticQuery(graphql`
    query AllSupportersQuery {
        allFile(filter: {relativeDirectory: {regex: "/AllSupporter/\\w+/"}}) {
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
      <img srcSet={data.allFile.edges[0].node.childImageSharp.fluid.srcSet}></img>
      <img srcSet={data.allFile.edges[2].node.childImageSharp.fluid.srcSet}></img>
      <img srcSet={data.allFile.edges[3].node.childImageSharp.fluid.srcSet}></img>
      <img srcSet={data.allFile.edges[4].node.childImageSharp.fluid.srcSet}></img>
    </div>

  )
}

export default AllSuporters
