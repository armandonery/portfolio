import * as React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from '../components/head'

import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="404" />
      <div style={{ display: 'flex' }}>
        <div style={{ textAlign: 'justify' }}>
          <h1>Page not found</h1>
          <em>
            <p style={{ marginBottom: '10px', color: '#65BF8C' }}>
              <b>"You're sailing in deep water"</b>
            </p>
          </em> 
          <p style={{ width: '50%', textAlign: 'justify' }}>
            The page you were looking for
            wasn't found; instead a sea monster 
            found you, get back home or 
            you'll be eaten.
          </p>
          <p>
            <Link to="/">Go home</Link>
          </p>
        </div>
        <StaticImage
          src="../images/404.svg"
          width={900}
          height={900}
          alt="404 image" />
      </div>
    </Layout>
  )
}

export default NotFoundPage
