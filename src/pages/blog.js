// Step 1: Import React
import * as React from "react"
import { Link } from 'gatsby'

// Step 2: Define your component
const BlogPage = () => {
    return (
        <main>
            <title>Bilal Smith</title>
            <h1>This is the Blog Page</h1>
            <p>Here I would write a blog if I felt like it.</p>
            <Link to= "/">Home</Link>

        </main>
    )
}
//Step 3: Export component
export default BlogPage