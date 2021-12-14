import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import { BiMap } from "react-icons/bi";
import StyledButton from "../components/StyledButton";
import Head from '../components/head';

import codderGIF from '../images/codder.gif'

const IndexPage = () => {

  return (
    <Layout>

      <Head title="Home" />
      
      <h1>
        <p>Hey there 👋 my name is Armando</p>
      </h1>
      <h2>
        <p>I am a web dev 👨‍💻</p>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <BiMap className="icon" />
        <p style={{ marginTop: '-1px' }}> 
          <p>Worldwide</p>
        </p> 
      </div>
  
      <img src={codderGIF} alt="Coder" height={500} width={700} />

      <p>
        I really love to build webistes and web apps, contact me <Link to="/contact">here</Link>
      </p>

      <StyledButton className="button">
        <Link to="/projects" style={{color: "#fff", textDecoration: 'none'}}>
          <p>Projects</p>
        </Link>
      </StyledButton>

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