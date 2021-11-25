import * as React from "react"
import Layout from "../components/layout"
import Head from '../components/head'

import { StaticImage } from "gatsby-plugin-image";
import * as projectStyles from './projects.module.scss'
import { GoLinkExternal } from 'react-icons/go';

const ProjectsPage = () => {

    return(
        <Layout>
            <Head title="Projects" />
            <h1>Projects</h1>
            {/* <StaticImage
                src="../images/projects.jpg"
                width={620}
                height={250}
                alt="image"
                placeholder="tracedSVG"
            style={{ backgroundPositionY: 'bottom' }} /> */}

        {/* React memo */}
        <div className={projectStyles.list}>
            <h3>React Memo</h3>
            <p>Memory game created in React JS using hooks</p>
            <p>Features: Hooks</p>
            <div className={projectStyles.github}>
                <a href="https://github.com/armandonery/memo">
                    <img src="https://cdn.svgporn.com/logos/github-icon.svg"alt="github" className={projectStyles.img}></img>
                </a>
                <a href="https://memo-drab.vercel.app/" target="_blank" rel="noopener noreferrer" className={projectStyles.demo}>
                    <p>Demo</p>
                    <GoLinkExternal className={projectStyles.external} />
                </a>
            </div>
        </div>

        {/* React Rick and Morty */}
        <div className={projectStyles.list2}>
            <h3>Rick and Morty</h3>
            <p>Fetching Rick and Morty API data</p>
            <p>Features: API</p>
            <div className={projectStyles.github}>
                <a href="https://github.com/armandonery/rick_and_morty">
                    <img src="https://cdn.svgporn.com/logos/github-icon.svg"alt="github" className={projectStyles.img}></img>
                </a>
                <a href="https://rick-and-morty-vert-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className={projectStyles.demo}>
                    <p>Demo</p>
                    <GoLinkExternal className={projectStyles.external} />
                </a>
            </div>
        </div>

        {/* React CRM */}
        {/* <div className={projectStyles.list3}>
            <h3>React CRM</h3>
            <p>Admin panel in React JS</p>
            <p>Features: API</p>
            <div className={projectStyles.github}>
                <a href="#">
                    <img src="https://cdn.svgporn.com/logos/github-icon.svg"alt="github" className={projectStyles.img}></img>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={projectStyles.demo}>
                    <p>Demo</p>
                    <GoLinkExternal className={projectStyles.external} />
                </a>
            </div>
        </div> */}

        {/* Netflix Clone */}
        {/* <div className={projectStyles.list4}>
            <h3>Netflix clone</h3>
            <p>Clone of Netflix using HTML</p>
            <p>Features: API</p>
            <div className={projectStyles.github}>
                <a href="#">
                    <img src="https://cdn.svgporn.com/logos/github-icon.svg"alt="github" className={projectStyles.img}></img>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={projectStyles.demo}>
                    <p>Demo</p>
                    <GoLinkExternal className={projectStyles.external} />
                </a>
            </div>
        </div> */}

        </Layout>
    )
}

export default ProjectsPage