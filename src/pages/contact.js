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
     reset,
     formState: { errors }
   } = useForm();

   const sendEmail = (formData) => {
    emailjs
      .send("service_mh9e3xl", "template_rgx4qq9", formData, "user_zLpZSkMOI19k1ZAhNLtIo")
      .then(
        (result) => {
          alert('thank you i\'ll respond you soon');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  // const onSubmit = () => {
  //   sendEmail();
  // };

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     'service_mh9e3xl', 
  //     'template_rgx4qq9', 
  //     e.target, 
  //     'user_zLpZSkMOI19k1ZAhNLtIo').then(res=>{
  //       console.log(res);
  //       alert('Thank you, I will contact you soon!!')
  //     }).catch(err=> console.log(err));
  // }

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
              />
        <h1 className={contactStyles.title}>Get in touch!</h1>
        <StaticImage
                  className={contactStyles.blob}
                  src="../images/blob.svg"
                  width={350}
                  height={150}
                  alt="blob"
                   />
      </section>

      <div className={contactStyles.form}>
        <form onSubmit={handleSubmit(sendEmail)} >
          
          <div className={contactStyles.mainInfo}>

            <div>
              <label>Name</label>
              <input className={contactStyles.name} id="name" placeholder="Enter your name" name="name" {...register("Name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i
              })} />
                {errors?.Name?.type === "required" && <p className={contactStyles.warningMsg}>Name is required</p>}
                {errors?.Name?.type === "maxLength" && (
                  <p className={contactStyles.warningMsg}>Cannot exceed 20 characters</p>
                )}
                {errors?.Name?.type === "pattern" && (
                  <p className={contactStyles.warningMsg}>Alphabetical characters only</p>
                )}
            </div>

            <div>
              <label className={contactStyles.emailLabel}>Email</label>
              <input className={contactStyles.email} id="email" placeholder="johndoe@example.com" name="email" {...register("Mail", { 
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })} />
                {errors?.Mail?.type === "required" && <p className={contactStyles.warningMsg} style={{ marginLeft: '15px' }}>Mail is required</p>}
                {errors?.Mail?.type === "pattern" && (
                  <p className={contactStyles.warningMsg}>Invalid email address</p>
                )}
            </div>
          
          </div>
          <textarea className={contactStyles.msg} id="msg" placeholder="write your message here..." name="message" {...register("Message", {
              required: true
              })} />
              {errors?.Message?.type === "required" && <p className={contactStyles.warningMsg}>Please provide a message</p>}

          <input className={contactStyles.submit} type="submit" />

        </form>
      </div>

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
            />
            <p className={contactStyles.LinkText}>LinkedIn</p>
          </div>
        </a> 
      </div>
      
    </Layout>
  )
}

export default ContactPage