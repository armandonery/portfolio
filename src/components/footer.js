import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <p>
          © {data.site.siteMetadata.author} 2022 |
          <img style={{ paddingTop: '5px' }} src="https://cdn.svgporn.com/logos/gatsby.svg" alt="gatsby" height={18} width={18} />
        </p>

        <div>
          
          {/* Github */}
          <a href="https://github.com/armandonery" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.svgporn.com/logos/github-icon.svg" alt="github" className={footerStyles.img} />
          </a>

          {/* Codepen */}
          <a href="https://codepen.io/nery65/pens/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.svgporn.com/logos/codepen-icon.svg" alt="codepen" className={footerStyles.img} />
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer