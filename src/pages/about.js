// Step 1: Import React
import * as React from "react"
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <title>Bilal Smith</title>
            <h1>About Me</h1>
            <p>Born in 2000, Bilal Smith was raised in multiple places all over the country but always says that Anderson, South Carolina is where he's from. 
            Bilal grew up around computers, and would help his father build them at home ever since he was a child. 
            It only made sense for him to persue a degree in information science at the University of South Carolina.</p>
            <Link to= "/">Home</Link>

        </main>
    )
}
//Step 3: Export component
export default AboutPage