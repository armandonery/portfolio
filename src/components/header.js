import * as React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as headerStyles from './header.module.scss'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { StaticImage } from "gatsby-plugin-image";
import { useI18next, Trans, useTranslation } from "gatsby-plugin-react-i18next"

const Header = () => {
const { t } = useTranslation();
const {languages, changeLanguage} = useI18next();

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <h1 className="h1Title">
                <Link className={headerStyles.title} to="/">
                    <StaticImage 
                        className={headerStyles.logo}
                        src="../images/coffee.png"
                        width={55}
                        height={55}
                        alt="logo"
                    /> 
                    <Trans>
                        {data.site.siteMetadata.title}
                    </Trans>
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}> 
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/"><Trans>Home</Trans></Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about"><Trans>About me</Trans></Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects"><Trans>Projects</Trans></Link>
                    </li>
                    {/* <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li> */}
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact"><Trans>Contact</Trans></Link>
                    </li>

                    <ThemeToggler className={headerStyles.toggler}>
                        {({ theme, toggleTheme }) => (
                        <label>
                            <input 
                                id="toggle" 
                                className={headerStyles.toggle} 
                                type="checkbox" 
                                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                                checked={theme === 'dark'} />{' '}
                            {/* <input
                            type="checkbox"
                            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
                            />{' '}
                            Dark mode */}
                        </label>
                        )}
                    </ThemeToggler>

                    {/* <ul className="languages" className={headerStyles.languages}>
                        {languages.map((lng) => (
                        <li key={lng}>
                            <a
                            className={headerStyles.aLang}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                changeLanguage(lng);
                            }}>
                            {lng} &nbsp;
                            </a>
                        </li>
                        ))}
                    </ul> */}
                                
                </ul>
            </nav>
        </header>
    )
}

export default Header

