import * as React from "react"
import { siteFooter, container} from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={siteFooter}>
            <div className={container}>
                <div><p>Site Developed by Bilal Smith &copy; 2022</p></div>
            </div>
        </footer>
    )
}

export default Footer