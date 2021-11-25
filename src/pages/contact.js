import * as React from "react"
import Layout from "../components/layout"
import * as contactStyles from './contact.module.scss'
import Head from '../components/head'

import { StaticImage } from "gatsby-plugin-image";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <section className={contactStyles.title}>
        <h1>Get in touch!</h1>
        <StaticImage
                  className={contactStyles.blob}
                  src="../images/blob.svg"
                  width={350}
                  height={150}
                  alt="blob"
                  placeholder="tracedSVG" />
      </section>

      <p>Email me:</p>
      <div className={contactStyles.container}>
        <a href="mailto:armandogune25@gmail.com" className={contactStyles.mail2}>
          <div className={contactStyles.Mail}>
            <StaticImage
              className={contactStyles.imageMail} 
              src="../images/mail.png"
              width={40}
              height={40}
              alt="Mail"
              placeholder="tracedSVG"
            />
            <p className={contactStyles.MailText}>armandogune25@gmail.com</p>
          </div>   
        </a>
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" className={contactStyles.svg}>
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg> */}        
      </div>

      <div>
        <a href="https://www.linkedin.com/in/armandonery34/" target="_blank" rel="noopener noreferrer" className={contactStyles.image}>
          <div className={contactStyles.Linkedin}>
            <StaticImage
              className={contactStyles.image} 
              src="../images/Linkedin.png"
              width={40}
              height={40}
              alt="Linkedin"
              placeholder="tracedSVG"
            />
            {/* <img src="https://cdn.svgporn.com/logos/linkedin-icon.svg" alt="linkedin" className={contactStyles.image}></img> */}
            <p className={contactStyles.LinkText}>LinkedIn</p>
          </div>
        </a> 
      </div>
      
    </Layout>
  )
}

export default ContactPage