import * as React from "react"
import * as styles from "../styles/aviso.module.css"
import { Link, graphql } from "gatsby"

export default function Aviso({data}) {

  const aviso = data.aviso.nodes

  return (
    <div className={styles.wrapper}>
      <section className={styles.avisoLogo}>
        <div className={styles.column1}>
          <Link to="/" className={styles.aLogo}><img src='/iotam_logo.svg' alt="IOTAM" /></Link>
          <Link to="/" className={styles.aLink}>Regresar al inicio</Link>
        </div>
      </section>
      {aviso.map(elaviso => (
      <section key={elaviso.id} className={styles.section__aviso}>
        <div className={styles.column1}>
          <h1>{elaviso.frontmatter.titulo}</h1>
        </div>
        <div className={styles.column1}>
          <div dangerouslySetInnerHTML={{ __html: elaviso.html }} />
        </div>
      </section>
      ))}
      <section className={styles.cierre}>
        <div className={styles.column1}>
          <Link to="/" className={styles.aLink}>Regresar al inicio</Link>
        </div>
      </section>
  </div>
  )
}


export const query = graphql`
  query ElAviso {
  
  aviso: allMarkdownRemark(
    filter: {frontmatter: {apartado: {eq: "aviso"}}}
    sort: {frontmatter: {orden_industria: ASC}}
  ) {
    nodes {
      frontmatter {
        titulo
      }
      id
      html
    }
  }
  
}
`