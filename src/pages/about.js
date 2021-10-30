import * as React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <Link to="/nebuta"><p>ねぶた</p></Link>
      <Link to="/sansya"><p>三社</p></Link>
    </Layout>
  )
}
export default AboutPage