import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"

const Menu = () => {

    
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
    }

    const imageStyle = {
        width: '100%',
    }
    return(
        <>
            <StaticImage
                style={imageStyle}
                formats={["auto", "webp", "avif"]}
                src="../images/header.jpg"
            />
            <div style={divStyle}>
                <Link to='/'><h4>Home</h4></Link>
                <Link to='/about'><h4>About</h4></Link>
                <Link to='/developed'><h4>Developed</h4></Link>
                <Link to='/mechatronics'><h4>Mechatronics</h4></Link>
                {/* <Link to='/myreact'><h4>React</h4></Link> */}
                {/* <h4>Houdini</h4>
                
                <h4>Others</h4> */}
            </div>
        </>
        
    )
}

export default Menu;