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
                <button id="aInicio" >Inicio</button>
                <button id="aNosotros">Nosotros</button>
                <button id="aDiferenciadores" >Diferenciadores</button>
                <button id="aIndustrias" >Industrias</button>
                <button id="aSoluciones" >Soluciones</button>
                <button id="aContacto" >Contacto</button>
            </div>

            <div>
                {whatsApps.map(whatsApp => (
                    <a key={whatsApp.childMarkdownRemark.id} className='cotizaBtn' href={`https://wa.me/521${whatsApp.childMarkdownRemark.frontmatter.whatsapp}`} target="_blank" rel="noreferrer">
                        Mensaje
                    </a>
                ))}
            </div>
        </nav>   
  )
}

