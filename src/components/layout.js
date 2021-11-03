import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  siteTitle,
} from './layout.module.css'
import { Container, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className="bg-dark">
      <Container>
    <Navbar expand="md" variant="dark">
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive">
        <Nav as="ul" className="ml-auto">
        <Nav.Item as="li">
            <Link to="/" className="nav-link" activeClassName="active">Home</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/about" className="nav-link" activeClassName="active">About</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/blog" className="nav-link" activeClassName="active">Blog</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container> 
  </header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout