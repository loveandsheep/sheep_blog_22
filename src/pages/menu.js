import * as React from "react"
import { Link, graphql } from "gatsby"

const Menu = () => {

    
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
    }
    return(
        <div style={divStyle}>
            <h4>about</h4>
            <h4>blog</h4>
            <h4>make</h4>
            <h4>contact</h4>
        </div>
    )
}

export default Menu;