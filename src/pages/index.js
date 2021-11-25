import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import { BiMap } from "react-icons/bi";
import StyledButton from "../components/StyledButton";
import Head from '../components/head';

import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  // const { t } = useTranslation();

  return (
    <Layout>

      <Head title="Home" />

      <StaticImage
                src="../images/coding.png"
                width={920}
                height={450}
                alt="image"
                placeholder="tracedSVG"
                style={{ backgroundPositionY: 'center' }} />

      <br />
      <br />

      {/* ENGLISH */}
      <h1>
        <Trans><p>Hey there 👋 my name is Armando</p></Trans>
      </h1>
      <h2>
        <Trans>I am a web dev 👨‍💻</Trans>
      </h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <BiMap className="icon" />
        <p style={{ marginTop: '-1px' }}> 
          <Trans>Worldwide</Trans>
        </p> 
      </div>
  
      <p>
        <Trans>I really love to build webiste and web apps, contact me</Trans> <Link to="/contact"><Trans>here</Trans></Link>
      </p>

      <StyledButton className="button">
        <Link to="/projects" style={{color: "#fff", textDecoration: 'none'}}>
          <Trans>Projects</Trans>
        </Link>
      </StyledButton>

      {/* SPANISH */}
      {/* <h1 className="title">
        <Trans>Hola 👋 me llamo Armando</Trans>
      </h1>
      <h2 className="sub">
        <Trans>Soy un desarrollador web 👨‍💻</Trans>
      </h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <BiMap className="icon" />
        <p style={{ marginTop: '-1px' }}> 
          <Trans>Worldwide</Trans>
        </p> 
      </div>

      <p>
        <Trans>Me apasiona construir sitios web y aplicaciones web, contactame en</Trans> <Link to="/contact"><Trans>aquí</Trans></Link>
      </p>

      <StyledButton className="button">
        <Link to="/projects" style={{color: "#fff", textDecoration: 'none'}}>
          <Trans>Proyectos</Trans>
        </Link>
      </StyledButton> */}

    </Layout>
  )
}

export default IndexPage

// export const query = graphql`
// query ($language: String!) {
//   locales: allLocale(filter: {language: {eq: $language}}) {
//     edges {
//       node {
//         ns
//         data
//         language
//       }
//     }
//   }
// }
// `;