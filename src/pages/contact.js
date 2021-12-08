import * as React from "react"
import Layout from "../components/layout"
import * as contactStyles from './contact.module.scss'
import Head from '../components/head'

import { StaticImage } from "gatsby-plugin-image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import '../styles/index.scss'

import emailjs from 'emailjs-com'

const ContactPage = () => {

   const {
     register,
     handleSubmit,
     watch,
     formState: { errors }
   } = useForm();

  // const onSubmit = (data) => {
  //   // alert(JSON.stringify(data));
  //   console.log({ data })
  // };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_mh9e3xl', 
      'template_rgx4qq9', 
      e.target, 
      'user_zLpZSkMOI19k1ZAhNLtIo').then(res=>{
        console.log(res);
        alert('Thank you, I will contact you soon!!')
        // document.getElementById('success').innerHTML = '<p style="color: red;">Thank you, I will contact you soon!!</p>';
        // setTimeout(clearResponse(), 5000);
      }).catch(err=> console.log(err));
  }

  function clearResponse() {
    document.getElementById("succcess").innerHTML = ""; //Clears the innerHTML
  }

  return (
    <Layout>
      <Head title="Contact" />
      <section className={contactStyles.title}>
      <StaticImage
              className={contactStyles.imageMail} 
              src="../images/mail.png"
              width={40}
              height={40}
              alt="Mail"
              placeholder="tracedSVG"
            />
        <h1 className={contactStyles.title}>Get in touch!</h1>
        <StaticImage
                  className={contactStyles.blob}
                  src="../images/blob.svg"
                  width={350}
                  height={150}
                  alt="blob"
                  placeholder="tracedSVG" />
      </section>

      <div className={contactStyles.form}>
        <form onSubmit={sendEmail} >
          <div className={contactStyles.mainInfo}>
            <label className={contactStyles.name}>Name</label>
            <input id="name" placeholder="Enter your name" name="name" {...register("Name" )} />
            <label className={contactStyles.email}>Email</label>
            <input id="email" placeholder="johndoe@example.com" name="email" {...register("Mail" )} />
          </div>
          <label className={contactStyles.description}>Description</label>
          <textarea id="msg" placeholder="write your message here..." name="message" {...register("Message")} />
          <input className={contactStyles.submit} type="submit" />
        </form>
      </div>

      <p id="success"></p>

      <hr />

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