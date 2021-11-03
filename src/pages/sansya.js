import * as React from 'react'
import Layout from '../components/layout'
import Button from "react-bootstrap/Button";
import { Link as Scroll } from 'react-scroll';
const Sansya = () => {
  return (
    <Layout pageTitle="八戸三社大祭">
      <section id="concept"><p>八戸三社大祭です</p></section>
      <h2>始まり</h2>
        <p>享保5年（1720）、凶作に悩む八戸の有力者たちが、法霊大明神（現在のおがみ神社）に天候の回復と豊作を祈願したところ、無事に秋の収穫を迎えることができました。その御礼として、八戸藩の許可のもと、武士や町人から寄進を募って神輿を建造し、享保6年（1721）に長者山三社堂（現在の新羅神社）に渡御したことが、八戸三社大祭の始まりと言われています。</p>
        <hr/>
        <nav>
        <Scroll to="concept"><Button>TOP</Button></Scroll>
      </nav>
    </Layout>
  )
}
export default Sansya