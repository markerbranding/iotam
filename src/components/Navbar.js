import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


export default function Navbar() {

    const data = useStaticQuery(graphql`
        query elWhatsapp {
            allFile(
                filter: {childMarkdownRemark: {frontmatter: {apartado: {eq: "contacto"}}}}
            ) {
                nodes {
                    childMarkdownRemark {
                        frontmatter {
                            whatsapp
                        }
                        id
                    }
                }
            }
        }
    `)
    const whatsApps = data.allFile.nodes
    
    
    return (
        <nav className='navbar'>
            <div className='logo'>
                <Link to="/"><img src='/iotam_logo.svg' alt="IOTAM" /></Link>
            </div>

            <div className='linksNav'>
                <Link id="aInicio" >Inicio</Link>
                <Link id="aDiferenciadores" >Diferenciadores</Link>
                <Link id="aIndustrias" >Industrias</Link>
                <Link id="aSoluciones" >Soluciones</Link>
                <Link id="aNosotros">Nosotros</Link>
                <Link id="aContacto" >Contacto</Link>
            </div>

            <div>
                {whatsApps.map(whatsApp => (
                    <Link key={whatsApp.childMarkdownRemark.id} className='cotizaBtn' to={`https://wa.me/521${whatsApp.childMarkdownRemark.frontmatter.whatsapp}`} target="_blank" >
                        Mensaje
                    </Link>
                ))}
            </div>
        </nav>   
  )
}

