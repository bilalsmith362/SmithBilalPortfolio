import * as React from "react"
import { Link } from 'gatsby'
import { navigate } from 'gatsby'

const Header = () => {
    const triggerNavigation = () => {
        navigate('/about')
    }
    return (
        <header>
        <div>
            <h1><Link to ="/">Bilal Smith</Link></h1>
            <h3>Cybersecurity and Information Design</h3>
            <button onclick={() => triggerNavigation()}>Learn More</button>
        </div>
        <nav>
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