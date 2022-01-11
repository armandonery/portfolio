import * as React from "react"
import Layout from "../components/layout"
import Head from '../components/head'

import * as aboutStyles from './about.module.scss'

import { StaticImage } from "gatsby-plugin-image";
import { DiFirebase, DiReact, DiTerminalBadge } from 'react-icons/di';
import { FaChess, FaGamepad, FaBook, FaTools } from "react-icons/fa";
import { FcLandscape} from "react-icons/fc";

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

      <div className={aboutStyles.welcome}>
        <div className={aboutStyles.welcomeBox}>
          <p style={{ textAlign: 'justify', fontSize: '20px' }}>
            I am a front end developer passionate about the
            design and creation of web sites and applications familiar with multiple
            parts of todays web technology stack. <br /><br />

            Constantly motivated and learning of current web development tools. <br /><br />

            You can also check my blog on <a href="https://nery.hashnode.dev/">hashnode</a> ✍
          </p>
        </div>
        <div className={aboutStyles.welcomeBox}>
          <div>
            <StaticImage 
              className={aboutStyles.gift}
              src="../images/gift.webp"
              width={480}
              height={450}
              alt="gift"
              style={{ marginLeft: '105px' }}
            />
          </div>
        </div>
      </div>

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
      
      <div className={aboutStyles.parentHobbies}>
        <div className={aboutStyles.phBox}>
          <div style={{ display: 'flex' }}>
            <DiReact size="2rem" />
            <h3>Frontend</h3>
          </div>
          <div style={{ display: 'flex' }}>
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/html-5.svg" alt="html5" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/css-3.svg" alt="css3" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/javascript.svg" alt="js" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/bootstrap.svg" alt="bootstrap" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/sass.svg" alt="sass" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/react.svg" alt="react" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/nextjs-icon.svg" alt="next" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/gatsby.svg" alt="gatsby" height={30} width={30} />
          </div>
        </div>
        <div className={aboutStyles.phBox}>
          <div style={{ display: 'flex' }}>
            <DiFirebase size="2rem" />
            <h3>Backend</h3>  
          </div>
          <div style={{ display: 'flex' }}>
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/dotnet.svg" alt="dotnet" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/python.svg" alt="python" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="node-js" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/c-plusplus.svg" alt="c++" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/c-sharp.svg" alt="c#" height={30} width={30} />
          </div>
        </div>
        <div className={aboutStyles.phBox}>
          <div>
            <h3><FaTools size="1rem" />Tools</h3>
          </div>
          <div style={{ display: 'flex' }}>
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/vercel-icon.svg" alt="vercel" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/visual-studio-code.svg" alt="vs_code" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/visual-studio.svg" alt="vs" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/git-icon.svg" alt="git" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/github-icon.svg" alt="github" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/lighthouse.svg" alt="lighthouse" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/slack-icon.svg" alt="slack" height={30} width={30} />
            <img className={aboutStyles.img} src="https://cdn.svgporn.com/logos/terminal.svg" alt="terminal" height={30} width={30} />
          </div>
        </div>
        <div className={aboutStyles.phBox}>
          <h3><FcLandscape /> Hobbies</h3>
          <ul style={{ listStyleType: 'none', marginLeft: '0px' }}>
            <li>
              <FaChess /> Chess
            </li>
            <li>
              <FaGamepad /> Videogames
            </li>
            <li>
              <FaBook /> Reading
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />

      <h1 className={aboutStyles.skills}>
        Hard & Soft skills
        <StaticImage 
          className={aboutStyles.icon}
          src="../images/list.png"
          width={60}
          height={50}
          alt="image"
        />  
      </h1>
      
      <div className={aboutStyles.skills2}>
        <div className={aboutStyles.parent}>
            <div className={aboutStyles.box}>HTML5, CSS, JS</div>
            <div className={aboutStyles.box}>Efective time management</div>
            <div className={aboutStyles.box}>Frontend frameworks</div>
            <div className={aboutStyles.box}>Adaptability</div>
            <div className={aboutStyles.box}>Version control, responsive design</div>
            <div className={aboutStyles.box}>Good listener and communicator</div>
            <div className={aboutStyles.box}>Programming languages</div>
            <div className={aboutStyles.box}>Teamwork</div>
        </div>
      </div>

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