import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { BLOCKS } from "@contentful/rich-text-types";

import Layout from "../components/layout"
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
              raw
            }
        }
    }
`

const Blog = props => {
  //Options for the image  
    //  const options = {
    //   renderNode: {
    //     [BLOCKS.EMBEDDED_ASSET]: node => {
    //       const imageID = node.id;
    //       const {
    //         file: { url },
    //         title,
    //       } = props.data.allContentfulAsset.node.title(({ contentful_id: id }) => {
    //         return id === imageID;
    //       });
    //       console.log(url, title);
    //       return (<img src={url} alt={title} />, options);
    //     },
    //   },
    // };

    // const options = {
    //   renderNode: {
    //     "embedded-asset-block": (node) => {
    //       const alt = node.data.node.title['en-US']
    //       const url = node.data.node.file['en-US'].url
    //       console.log(alt, url, options);
    //       return (<img alt={alt} src={url} />, options);
    //     }
    //   }
    // };

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}
    </Layout>
  )
}

export default Blog