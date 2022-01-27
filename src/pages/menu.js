import * as React from "react"
import { Link, graphql } from "gatsby"

const Menu = () => {

    
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
    }
    return(
        <div style={divStyle}>
            <Link to='/about'><h4>About</h4></Link>
            <h4>Developed</h4>
            <Link to='/mechatronics'><h4>Mechatronics</h4></Link>
            <h4>Houdini</h4>
            <h4>React</h4>
            <h4>Others</h4>
        </div>
    )
}

export default Menu;