// Step 1: Import React
import * as React from "react"
import { Link } from 'gatsby'

// Step 2: Define your component
const ContactPage = () => {
    return (
        <main>
            <title>Bilal Smith</title>
            <h1>Contact Me</h1>
            <p>email: bilals@email.sc.edu.</p>
            <Link to= "/">Home</Link>

        </main>
    )
}
//Step 3: Export component
export default ContactPage