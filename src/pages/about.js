import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Menu from './menu'

const About = ({data, location}) => {

  return (
    <>
    <Menu />
    <Layout location={location} title='むらくも'>
      <Seo title="むらくも" />
      
      {/* <Bio /> */}
        <div>
          <p>日辻が開発したこと、覚えておきたい事などを書くブログです。</p>
          <p><a href="https://twitter.com/loveandsheep145">Twitter</a></p>
        </div>
    </Layout>
    </>
  )
}

export default About