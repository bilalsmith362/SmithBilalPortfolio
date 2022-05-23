import * as React from "react"
import { Link } from 'gatsby'
import { navigate } from 'gatsby'
import { header, heroContent, siteTitle, siteDescription, navContainer, heroBody } from './header.module.css' 

const Header = () => {
    const triggerNavigation =() => {
        navigate('/about')
    }
    return (
        <header>
        <div className={heroContent}>
            <h1 className="{siteTitle}"><Link to ="/">Bilal Smith</Link></h1>
            <h3 className="heroBody">Information Science</h3>
            <button onClick={() => triggerNavigation()}>Learn More</button>
        </div>
        <nav className={navContainer}>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/about">About</Link></li>
                <li><Link to ="/contact">Conctact Me</Link></li>
                <li><Link to ="/blog">Blog</Link></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header