import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Menu from './menu'

const About = ({data, location}) => {

  return (
    <Layout location={location} title='むらくも'>
      <Seo title="むらくも" />
      
      {/* <Bio /> */}
      <Menu />
        <div>
            Aboutページやで
        </div>
    </Layout>
  )
}

export default About