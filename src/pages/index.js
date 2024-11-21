import * as React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/inicio.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import chipVideo from "../images/iotam_hero.mp4"
import bgVideo from "../images/chip_bg2_1200.mp4"
import solucionVideo from "../images/chip_big_1200.mp4"
import { graphql } from "gatsby"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
/* eslint-disable jsx-a11y/media-has-caption */
//import CustomAcordeon from "../components/Acordeon"
import AcordeonGroup from '../components/AcordeonGroup';


gsap.registerPlugin(ScrollTrigger)

//

export default function Inicio({data}){

  const heros = data.hero.nodes
  const btnHeros = data.btnHeroBg.nodes
  const btn2Heros = data.btnHeroFg.nodes
  const diferenciadores = data.losDiferenciadores.nodes
  const divisores = data.losDivisores.nodes
  const mercados = data.losMercados.nodes
  const industrias = data.lasIndustrias.nodes
  const soluciones = data.lasSoluciones.nodes
  const solucionHardwares = data.solucionHardware.nodes
  const solucionSoftwares = data.solucionSoftware.nodes
  const solucionPersonalizadas = data.solucionPersonalizada.nodes
  const hardwares = data.elHardware.nodes
  const softwares = data.elSoftware.nodes
  const personalizadas = data.laPersonalizada.nodes
  const imagenSoluciones = data.imagenSoluciones.nodes
  const imagenNosotros = data.imagenNosotros.nodes
  const imagenFloatNosotros = data.imagenFloatNosotros.nodes
  const imagenFloatNosotros2 = data.imagenFloatNosotros2.nodes
  const lasFaqs = data.lasFaqs.nodes
  const imagenQA = data.imagenQA.nodes
  const nosotros = data.losNosotros.nodes
  const contactos = data.losContactos.nodes
  const linkedin = data.elLinkedin.nodes
  const facebook = data.elFacebook.nodes
  const instagram = data.elInstagram.nodes
  
  

  return(
    <Layout>
      <div>
      <section className={styles.hero} id="sectionHero">
        <div className={styles.column2}>
          <div className={styles.colLeft}>
          {heros.map(hero => (
            <div key={hero.id} className="max1400">
              <h1>{hero.frontmatter.titulo}</h1>
              <div dangerouslySetInnerHTML={{ __html: hero.html }} />
              <p>{hero.frontmatter.subtitulo}</p>
            </div>
          ))}
          </div>
          <div className={styles.colRight}>
            <button id="btn__hero" className={styles.btnHero}>
              {btnHeros.map(btnHero => (
                <img key={btnHero.id} className={styles.btnHeroBg} src={btnHero.publicURL} alt="iotam"/>
              ))}
              {btn2Heros.map(btn2Hero => (
                <img key={btn2Hero.id} className={styles.btnHeroFg} src={btn2Hero.publicURL} alt="iotam"/>
              ))}
            </button>
          </div>
        </div>
        <div className={`${styles.column1} ${styles.videoHero}`}>
            {<video autoPlay loop muted>
              <source src={chipVideo} type="video/mp4" />
            </video>}
        </div>
      </section>


      <section className={styles.sectionNosotros} id="sectionNosotros">
        <div className={styles.column2}>
          <div className={styles.colLeft}>
            {nosotros.map(nuestro => (
              <div key={nuestro.id}>
                <div dangerouslySetInnerHTML={{ __html: nuestro.html }} />
              </div>
            ))}
          </div>
          <div className={styles.colRight}>
            {imagenFloatNosotros.map(imgFloatNosotros => (
              <GatsbyImage key={imgFloatNosotros.id} className={`${styles.imagenFloatNosotros} floatimg`} image={getImage(imgFloatNosotros.gatsbyImageData)} alt="Somos un equipo de profesionales en la IOT" />
            ))}
            {imagenFloatNosotros2.map(imgFloatNosotros2 => (
              <GatsbyImage key={imgFloatNosotros2.id} className={`${styles.imagenFloatNosotros2} floatimg2`} image={getImage(imgFloatNosotros2.gatsbyImageData)} alt="Somos un equipo de profesionales en la IOT" />
            ))}
            {imagenNosotros.map(imgNosotros => (
              <GatsbyImage key={imgNosotros.id} className={`${styles.imagenNosotros} imgNosotros`} image={getImage(imgNosotros.gatsbyImageData)} alt="Somos un equipo de profesionales en la IOT" />
            ))}
          </div>
        </div>
      </section>
      
      
      <section className={styles.diferenciadores} id="sectionDiferenciadores">
        {diferenciadores.map(diferenciador => (
          <div key={diferenciador.id} className={styles.column2}>

            <div className={styles.colLeft}>
              <div className={styles.diferenciador__wrapper}>
                <div className={styles.diferenciador}>
                  <p>{diferenciador.frontmatter.diferenciador1}</p>
                </div>
                <div className={styles.diferenciador}>
                  <p>{diferenciador.frontmatter.diferenciador2}</p>
                </div>
                <div className={styles.diferenciador}>
                  <p>{diferenciador.frontmatter.diferenciador3}</p>
                </div>
                <div className={styles.diferenciador}>
                  <p>{diferenciador.frontmatter.diferenciador4}</p>
                </div>
              </div>
            </div>

            <div className={styles.colRight}>
              <div dangerouslySetInnerHTML={{ __html: diferenciador.html }} />
              <a className="btn" href="/brochure.pdf" target="_blank" >Descargar brochure</a>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.divisor} id="sectionDivisor">
        {divisores.map(divisor => (
              <div key={divisor.id}>
                <GatsbyImage className={`${styles.imagenDivisor} imgDivisor`} image={getImage(divisor.gatsbyImageData)} alt="Creamos hardware y software a la medida" />
              </div>
        ))}
      </section>


      <section className={styles.industrias} id="sectionIndustrias">
        {mercados.map(mercado => (
          <div className={`${styles.column1} ${styles.titulos__industrias}`} key={mercado.id} dangerouslySetInnerHTML={{ __html: mercado.html }} />
        ))}
        <div className={styles.column1}>
          <div className={styles.listadoIndustrias}>
            {industrias.map(industria => (
            <div key={industria.id} className={styles.industria}>
              <img src={`/${industria.frontmatter.icono_industria}`} alt={industria.frontmatter.nombre_industria}/>
              <div>
                <h3>{industria.frontmatter.nombre_industria}</h3>
                <p>{industria.frontmatter.descripcion_industria}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      

      <section className={styles.sectionSolucionesTop} id="sectionSolucionesTop">
        <div className={styles.column2}>
          <div className={styles.colLeft}>
            {soluciones.map(solucion => (
              <div key={solucion.id} className={styles.solucionTopBloque}>
                <img src={`/${solucion.frontmatter.icono_soluciones}`} alt="Soluciones software y hardware para la industria IOT"/>
                <div dangerouslySetInnerHTML={{ __html: solucion.html }} />
              </div>
            ))}
          </div>
          <div className={styles.colRight}>
            {imagenSoluciones.map(imagenSolucion => (
              <GatsbyImage key={imagenSolucion.id} className={`${styles.imagenSolucion} imgSolucion`} image={getImage(imagenSolucion.gatsbyImageData)} alt="Soluciones en tecnología IOT de confianza" />
            ))}
          </div>
          
        </div>
        </section>
        <section className={styles.sectionSoluciones} id="sectionSoluciones">
        <div className={styles.column2}>
          {<video className="bgVideo" autoPlay loop muted playsInline={true} webkit-playsinline="true">
            <source src={bgVideo} type="video/mp4" />
          </video>}
          <div className={styles.colLeft}>
          
          
          <div id="videoHolder">
            <div id="innerVideoHolder">
              <video id="miVideo" className="miVideo" src={solucionVideo} playsInline={true} webkit-playsinline="true" preload="metadata" muted="muted"><track></track></video>
            </div>
          </div>
          


          </div>
          <div className={styles.colRight} id="colRightSoluciones">
            <div className={`${styles.solucion1}`}>
              {solucionHardwares.map(solucionHardware => (
                <div key={solucionHardware.id}>
                  <div className={styles.solucionesNumero}><span>{solucionHardware.frontmatter.numero_de_solucion}</span>
                  <h3>{solucionHardware.frontmatter.titulo_de_la_solucion}</h3></div>
                  <p dangerouslySetInnerHTML={{ __html: solucionHardware.html }} />
                </div>
              ))}
              <div className={styles.acordeon}>

              <AcordeonGroup
                acordeones={hardwares.map((hardware) => ({
                  title: hardware.frontmatter.titulo_de_la_solucion,
                  content: hardware.html,
                }))}
              />

                {/*
                {hardwares.map(hardware => (
                  <CustomAcordeon
                    key={hardware.id}
                    title={hardware.frontmatter.titulo_de_la_solucion}
                    content= {hardware.html }
                  />
                ))}
                  */}
              </div>
              
            </div>

            <div className={`${styles.solucion2}`}>
              {solucionSoftwares.map(solucionSoftware => (
                  <div key={solucionSoftware.id}>
                    <div className={styles.solucionesNumero}><span>{solucionSoftware.frontmatter.numero_de_solucion}</span>
                    <h3>{solucionSoftware.frontmatter.titulo_de_la_solucion}</h3></div>
                    <p dangerouslySetInnerHTML={{ __html: solucionSoftware.html }} />
                  </div>
              ))}
              <div className={styles.acordeon}>
                <AcordeonGroup
                  acordeones={softwares.map((software) => ({
                    title: software.frontmatter.titulo_de_la_solucion,
                    content: software.html,
                  }))}
                />
                {/*
                {softwares.map(software => (
                  <CustomAcordeon
                    key={software.id}
                    title={software.frontmatter.titulo_de_la_solucion}
                    content= {software.html }
                  />
                ))}
                */}
              </div>
            </div>

            <div className={`${styles.solucion3}`}>
              {solucionPersonalizadas.map(solucionPersonalizada => (
                  <div key={solucionPersonalizada.id}>
                    <div className={styles.solucionesNumero}><span>{solucionPersonalizada.frontmatter.numero_de_solucion}</span>
                    <h3>{solucionPersonalizada.frontmatter.titulo_de_la_solucion}</h3></div>
                    <p dangerouslySetInnerHTML={{ __html: solucionPersonalizada.html }} />
                  </div>
              ))}
              <div className={styles.acordeon}>
                <AcordeonGroup
                  acordeones={personalizadas.map((personalizada) => ({
                    title: personalizada.frontmatter.titulo_de_la_solucion,
                    content: personalizada.html,
                  }))}
                />
                {/*}
                {personalizadas.map(personalizada => (
                  <CustomAcordeon
                    key={personalizada.id}
                    title={personalizada.frontmatter.titulo_de_la_solucion}
                    content= {personalizada.html }
                  />
                ))}
                */}
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className={styles.sectionQA} id="sectionQA">
        <div className={styles.column2}>
          <div className={`${styles.colLeft}`}>
            <h2>Preguntas frecuentes</h2>
            <AcordeonGroup
                  acordeones={lasFaqs.map((elFaq) => ({
                    title: elFaq.frontmatter.pregunta,
                    content: elFaq.html,
                  }))}
            />
            {/*}
            {lasFaqs.map(elFaq => (
              <CustomAcordeon
                key={elFaq.id}
                title={elFaq.frontmatter.pregunta}
                content= {elFaq.html}
              />
            ))}
              */}
          </div>
          <div className={styles.colRight}>
            {imagenQA.map(imgQA => (
              <GatsbyImage key={imgQA.id} className={`${styles.imagen__qa} imgQA`} image={getImage(imgQA.gatsbyImageData)} alt="Somos un equipo de profesionales en la IOT" />
            ))}
          </div>
        </div>
      </section>


      <section className={styles.sectionContacto} id="sectionContacto">
        <div className={styles.column2}>
          <div className={styles.colLeft}>
            {contactos.map(contacto => (
              <div key={contacto.id} className={styles.contactoLeft}>
                <div className={styles.contactoLeftA}>
                  <div dangerouslySetInnerHTML={{ __html: contacto.html }} />
                  <ul>
                    <li>Teléfono: <a href={`tel:${contacto.frontmatter.telefono}`}>{contacto.frontmatter.telefono}</a></li>
                    <li>Correo electrónico: <a href={`mailto:${contacto.frontmatter.correo}`}>{contacto.frontmatter.correo}</a></li>
                    <li>Oficinas: <a href={`${contacto.frontmatter.url_maps}`} target="_blank" rel="noreferrer">{contacto.frontmatter.direccion}</a></li>
                  </ul>
                </div>
                <div className={styles.contactoLeftB}>
                  <a href={`${contacto.frontmatter.linkedin}`} target="_blank" rel="noreferrer">
                    {linkedin.map(linked => (
                      <img key={linked.id} className={styles.socialIcon} src={linked.publicURL} alt="LinkedIn de IOTAM"/>
                    ))}
                  </a>
                  <a href={`${contacto.frontmatter.facebook}`} target="_blank" rel="noreferrer">
                    {facebook.map(face => (
                      <img key={face.id} className={styles.socialIcon} src={face.publicURL} alt="Facebook de IOTAM"/>
                    ))}
                  </a>
                  <a href={`${contacto.frontmatter.instagram}`} target="_blank" rel="noreferrer">
                    {instagram.map(insta => (
                      <img key={insta.id} className={styles.socialIcon} src={insta.publicURL} alt="Instagram de IOTAM"/>
                    ))}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.colRight}>
            <form method="post" action="/gracias/">
              <label>Nombre:
                <input type="text" name="nombre" id="nombre" placeholder="-" />
              </label>
              <label>Empresa:
                <input type="text" name="empresa" id="empresa" placeholder="-" />
              </label>
              <label>Correo electrónico:
                <input type="email" name="email" id="email" placeholder="correo@empresa.com" />
              </label>
              <label>Teléfono:
                <input type="tel" name="telefono" id="telefono" placeholder="000-000-0000" />
              </label>
              <label>Ciudad:
                <input type="text" name="ciudad" id="ciudad" placeholder="Ciudad, Estado" />
              </label>
              <label>Asunto:
                <input type="text" name="asunto" id="asunto" placeholder="Cómo podemos ayudarte..." />
              </label>
              <label>Mensaje (opcional):
                <textarea name="mensaje" id="mensaje" rows="5" placeholder="Estamos para leerte..." />
              </label>
              <button name="submit" id="submit" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      </div>
    </Layout>
  )
}

export const query = graphql`
  query ElHero {
    hero: allMarkdownRemark(filter: {frontmatter: {apartado: {eq: "hero"}}}) {
      nodes {
        html
        frontmatter {
          titulo
          subtitulo
          boton
        }
        id
        excerpt(truncate: true)
      }
    }
    btnHeroBg: allFile(filter: {relativePath: {eq: "mas_info.svg"}}) {
      nodes {
        publicURL
        id
      }
    }
    btnHeroFg: allFile(filter: {relativePath: {eq: "mas_info_arrow.svg"}}) {
      nodes {
        publicURL
        id
      }
    }
    losDiferenciadores: allMarkdownRemark(filter: {frontmatter: {apartado: {eq: "diferenciadores"}}}) {
      nodes {
        html
        id
        frontmatter {
          diferenciador1
          diferenciador2
          diferenciador3
          diferenciador4
        }
      }
    }
    losDivisores: allImageSharp(filter: {id: {}, fluid: {originalName: {eq: "chip_manufacturing.jpg"}}}) {
      nodes {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: AUTO)
        id
      }
    }
    losMercados: allMarkdownRemark(filter: {frontmatter: {dataid: {eq: "industriasIntro"}}}) {
      nodes {
        id
        html
      }
    }
    lasIndustrias: allMarkdownRemark(
      filter: {frontmatter: {apartado: {eq: "industria"}}}
      sort: {frontmatter: {orden_industria: ASC}}
    ) {
      nodes {
        frontmatter {
          descripcion_industria
          apartado
          icono_industria
          orden_industria
          nombre_industria
        }
        id
      }
    }
    lasSoluciones: allMarkdownRemark(
      filter: {frontmatter: {dataid: {eq: "solucionIntro"}}}
    ) {
      nodes {
        frontmatter {
          icono_soluciones
        }
        html
        id
      }
    }
    imagenSoluciones: allImageSharp(filter: {id: {}, fluid: {originalName: {eq: "iotam_soluciones.jpg"}}}) {
      nodes {
        gatsbyImageData
        id
      }
    }
    solucionHardware:allMarkdownRemark(
      filter: {frontmatter: {dataid: {eq: "solucionHardware"}}}
    ) {
      nodes {
        frontmatter {
          titulo_de_la_solucion
          numero_de_solucion
        }
        html
        id
      }
    }
    solucionSoftware:allMarkdownRemark(
      filter: {frontmatter: {dataid: {eq: "solucionSoftware"}}}
    ) {
      nodes {
        frontmatter {
          titulo_de_la_solucion
          numero_de_solucion
        }
        html
        id
      }
    }
    solucionPersonalizada:allMarkdownRemark(
      filter: {frontmatter: {dataid: {eq: "solucionPersonalizada"}}}
    ) {
      nodes {
        frontmatter {
          titulo_de_la_solucion
          numero_de_solucion
        }
        html
        id
      }
    }
    elHardware:allMarkdownRemark(filter: {frontmatter: {apartado: {eq: "hardware"}}}
    sort: {frontmatter: {orden: ASC}}) {
      nodes {
        frontmatter {
          titulo_de_la_solucion
          orden
        }
        html
        id
      }
    }
    elSoftware:allMarkdownRemark(filter: {frontmatter: {apartado: {eq: "software"}}}
    sort: {frontmatter: {orden: ASC}}) {
      nodes {
        frontmatter {
          titulo_de_la_solucion
          orden
        }
        html
        id
      }
    }
    laPersonalizada:allMarkdownRemark(filter: {frontmatter: {apartado: {eq: "personalizada"}}}
    sort: {frontmatter: {orden: ASC}}) {
      nodes {
        frontmatter {
          titulo_de_la_solucion
          orden
        }
        html
        id
      }
    }
    losNosotros: allMarkdownRemark(filter: {frontmatter: {apartado: {eq: "nosotros"}}}) {
      nodes {
        frontmatter {
          apartado
        }
        html
        id
      }
    }
    imagenNosotros: allImageSharp(filter: {fluid: {originalName: {eq: "chip_about.jpg"}}}) {
      nodes {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: AUTO)
        id
      }
    }
    imagenFloatNosotros: allImageSharp(filter: {fluid: {originalName: {eq: "chip_about_float.png"}}}) {
      nodes {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: AUTO)
        id
      }
    }
    imagenFloatNosotros2: allImageSharp(filter: {fluid: {originalName: {eq: "componente.png"}}}) {
      nodes {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: AUTO)
        id
      }
    }
    imagenQA: allImageSharp(filter: {fluid: {originalName: {eq: "iotam_rrhh.jpg"}}}) {
      nodes {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: AUTO)
        id
      }
    }
    lasFaqs: allMarkdownRemark(
      filter: {frontmatter: {apartado: {eq: "faq"}}}
      sort: {frontmatter: {orden_faq: ASC}}
    ) {
      nodes {
        frontmatter {
          pregunta
          apartado
          orden_faq
        }
        id
        html
      }
    }
    losContactos: allMarkdownRemark(filter: {frontmatter: {apartado: {eq: "contacto"}}}) {
      nodes {
        frontmatter {
          apartado
          correo
          direccion
          facebook
          instagram
          linkedin
          telefono
          whatsapp
          url_maps
        }
        html
        id
      }
    }
    elLinkedin: allFile(filter: {relativePath: {eq: "linkedin_icon.svg"}}) {
      nodes {
        publicURL
        relativePath
        id
      }
    }
    elFacebook: allFile(filter: {relativePath: {eq: "facebook_icon.svg"}}) {
      nodes {
        publicURL
        relativePath
        id
      }
    }
    elInstagram: allFile(filter: {relativePath: {eq: "instagram_icon.svg"}}) {
      nodes {
        publicURL
        relativePath
        id
      }
    }
  }
`