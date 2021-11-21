import * as React from 'react'
import Layout from '../components/layout'
import { Link as Scroll } from 'react-scroll';
import { StaticImage } from 'gatsby-plugin-image'
import {scroll} from '../components/layout.module.css'

const SamplePage = () => {
    return (
      <Layout pageTitle="サンプル集">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
  　<div className={scroll}>
    <nav>
        <Scroll to="concept">スクロール</Scroll>
      </nav>
    </div>

        <h2>リストやってみるよー</h2>
        <ul>
            <li>リスト1</li>
            <li>リスト2</li>
            <li>リスト3</li>
      </ul>

      <section id="concept">
          <h1>ここまで</h1>
       </section>

       <StaticImage
         alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
         src="../images/clifford.jpg"
      /> 　　　
　　
        
      </Layout>
    )
  }
  export default SamplePage