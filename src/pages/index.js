import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import { BiMap } from "react-icons/bi";
import StyledButton from "../components/StyledButton";
import Head from '../components/head';

import codderGIF from '../images/codder.gif'
import devSVG from '../images/dev.svg'

const IndexPage = () => {

  return (
    <Layout>

      <Head title="Home" />
      
      

      <div class="parent">

        <div class="box">

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <BiMap className="icon" />
            <p style={{ marginTop: '-1px' }}> 
              <p>Remote 🇲🇽</p>
            </p> 
          </div>

          <h1>
            <p>Hey there <span style={{ fontWeight: 'initial' }}>✌</span> my name is Armando</p>
          </h1>
          <h2>
            <p>I am a web dev <span style={{ fontWeight: 'initial' }}> 👨‍💻</span></p>
          </h2>
    
          {/* <img src={codderGIF} alt="Coder" height={500} width={700} /> */}
          
          <p style={{ width: '740px', textAlign: 'justify' }}>
            Passionate about the web environment, who enjoys delivering efficient and
            quality software, I believe widely in continuous improvement through taking care
            of the small details in challenging projects.
          </p>

          <p>
            I really love to build webistes and web apps, contact me <Link to="/contact">here</Link>
          </p>

          <div style={{ width: '68px', marginTop: '-25px' }}>
            <StyledButton className="button">
              <Link to="/projects" style={{color: "#fff", textDecoration: 'none'}}>
                <p>Projects</p>
              </Link>
            </StyledButton>
          </div>
      
        </div>

        <div class="box">
          <img src={devSVG} alt="dev" height={400} width={700} className="rImage"/>
        </div>

      </div>
      

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