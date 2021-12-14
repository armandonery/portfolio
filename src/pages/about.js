import * as React from "react"
import Layout from "../components/layout"
import Head from '../components/head'

import * as aboutStyles from './about.module.scss'

import { StaticImage } from "gatsby-plugin-image";
import { DiFirebase, DiReact, DiTerminalBadge } from 'react-icons/di';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1 className={aboutStyles.aboutMe}>
          About me
        <StaticImage 
          className={aboutStyles.icon}
          src="../images/glasses.png"
          width={60}
          height={70}
          alt="image"
        />  
      </h1>
      <p>
        My name is Armando, I am a front end developer passionate about the
        design and creation of web sites and applications familiar with multiple
        parts of todays web technology stack.
      </p> 
      <p>
        Constantly motivated and learning of current web development tools. 
        As well as back end experience using .NET Framework. 
      </p>
      <p>
        I also enjoy learning and practicing cybersecurity topics, solving challenges; 
        as well as other personal hobbies like playing chess, strategy videogames and thriller reading. 
      </p>

      <h1 className={aboutStyles.skills}>
        Skills
        <StaticImage 
          className={aboutStyles.icon}
          src="../images/list.png"
          width={60}
          height={50}
          alt="image"
        />  
      </h1>
        <p>
          <b>Hard skills: </b> 
          HTML, CSS, JS, frontend frameworks, version control, responsive design, programming languages
        </p>
        <p>
          <b>Soft skills: </b>
          Effective time management, adaptability, good listener and communicator, teamwork, sharing knowledge
        </p>    
      
      <h1 className={aboutStyles.code}>
        Tech stack
        <StaticImage 
          className={aboutStyles.icon}
          src="../images/code.png"
          width={60}
          height={50}
          alt="image"
        />  
      </h1>

      
      <header className={aboutStyles.sub}>
        <picture>
          <DiReact size="2rem" />
        </picture>
        <h2>Frontend</h2>
      </header>
      {/* Frontend */}
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/html-5.svg" alt="html5" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/css-3.svg" alt="css3" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/javascript.svg" alt="js" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/bootstrap.svg" alt="bootstrap" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/sass.svg" alt="sass" height={30} width={30} />

      {/* JS Frameworks */}
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/react.svg" alt="react" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/nextjs-icon.svg" alt="next" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/gatsby.svg" alt="gatsby" height={30} width={30} />

      <br />
      <br />
      
      <header className={aboutStyles.sub}>
        <picture>
          <DiFirebase size="2rem" />
        </picture>
        <h2>Backend</h2>
      </header>
      {/* Backend */}
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/dotnet.svg" alt="dotnet" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/python.svg" alt="python" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="node-js" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/c-plusplus.svg" alt="c++" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/c-sharp.svg" alt="c#" height={30} width={30} />

      <br />
      <br />

      <header className={aboutStyles.sub}>
        <picture>
          <DiTerminalBadge size="2rem" />
        </picture>
        <h2>Tools</h2>
      </header>
      {/* Tools */}
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/vercel-icon.svg" alt="vercel" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/visual-studio-code.svg" alt="vs_code" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/visual-studio.svg" alt="vs" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/git-icon.svg" alt="git" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/github-icon.svg" alt="github" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/npm-icon.svg" alt="npm" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/lighthouse.svg" alt="lighthouse" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/slack-icon.svg" alt="slack" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/terminal.svg" alt="terminal" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/bash-icon.svg" alt="bash" height={30} width={30} />
      <img className={aboutStyles.img} src="https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" alt="notion" height={30} width={30} />

      <br />
      <br />

      <p>
        You can also check my blog on <a href="https://nery.hashnode.dev/">hashnode</a>
      </p>
    </Layout>
  )
}

export default AboutPage

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