import * as React from "react"
import Layout from "../components/layout"
import Head from '../components/head'

import * as projectStyles from './projects.module.scss'
import { GoLinkExternal } from 'react-icons/go';

import Rick from '../images/rick.png'
import Memo from '../images/memo.png'

const ProjectsPage = () => {

    return(
        <>
            <Layout>
                <Head title="Projects" />
                <h1>Personal projects</h1>
                
                <div style={{ display: 'flex', margin: '20px' }}>
                    <img src={Rick} alt="Coder" height={300} width={800} />
                    <div className={projectStyles.des2}>
                        <div style={{ display: 'flex' }}>
                            <h2>Rick and Morty API</h2>
                            <p style={{ marginTop: '9px', marginLeft: '20px', textTransform: 'uppercase', fontSize: '12px' }}>Relevant</p>
                        </div>
                        
                        <p>Web application that fetch data from Rick and Morty's API, getting characters and episodes.</p>
                        <ul className={projectStyles.ul}>
                            <li>React</li>
                            <li>Hooks</li> 
                            <li>Api</li>
                            <li>Axios</li>
                            <li>Booststrap</li>
                        </ul>
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
                </div>

                <br />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="des">
                        <div style={{ display: 'flex' }}>
                            <h2>Memory game</h2>
                            <p style={{ marginTop: '9px', marginLeft: '20px', textTransform: 'uppercase', fontSize: '12px' }}>Relevant</p>
                        </div>
                        <p>Web application of a classic memory game created in React JS using hooks.</p>
                        <ul className={projectStyles.ul}>
                            <li>React</li>
                            <li>Hooks</li> 
                            <li>Css</li>
                        </ul>
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
                    <img src={Memo} alt="Coder" height={300} width={800} />
                </div>

                {/* <h2>Other Projects</h2>
                <div className={projectStyles.projects}>
                    <div className={projectStyles.box}>1</div>
                    <div className={projectStyles.box}>2</div>
                    <div className={projectStyles.box}>3</div>
                </div> */}

            </Layout>
        </>
    )
}

export default ProjectsPage