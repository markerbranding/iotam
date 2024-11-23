import React, { useRef, useLayoutEffect } from "react";
import Navbar from "./Navbar"
import '../../src/styles/global.css'
import { Link } from "gatsby"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother  from "gsap/ScrollSmoother"
import ScrollToPlugin  from "gsap/ScrollToPlugin"
//import { useGSAP } from "@gsap/react"
//import { useRef } from "react"


if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)
  }

export default function Layout({children}) {

    /*  GSAP  */
    const container = useRef();
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const initializeGSAP = () => {
            requestAnimationFrame(() => {

                let mm = gsap.matchMedia();
                // Animaciones exclusivas para resolución escritorio:
                mm.add("(min-width: 1025px)", () => {

                    if (!ScrollSmoother.get()) {
                        ScrollSmoother.create({
                            wrapper: wrapperRef.current,
                            content: contentRef.current,
                            smooth: 1,
                            effects: true,
                            smoothTouch: 0.1,
                        });
                    }

                    const videoElement = document.querySelector(".miVideo");
                    videoScrub(videoElement, {
                    scrollTrigger: {
                        trigger: "#sectionSoluciones",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                        pin: "#videoHolder",
                    },
                    //onUpdate: () => console.log(videoElement.currentTime)
                    });

                    function videoScrub(video, vars) {
                        video = gsap.utils.toArray(video)[0]; // in case selector text is fed in.
                        let once = (el, event, fn) => {
                            let onceFn = function () {
                                el.removeEventListener(event, onceFn);
                                fn.apply(this, arguments);
                            };
                            el.addEventListener(event, onceFn);
                            return onceFn;
                        },
                        prepFunc = () => { video.play(); video.pause(); },
                        prep = () => once(document.documentElement, "touchstart", prepFunc),
                        //src = video.currentSrc || video.src,
                        tween = gsap.fromTo(video, {currentTime: 0}, {paused: true, immediateRender: false, currentTime: video.duration || 1, ease: "none", ...vars}),
                        resetTime = () => (tween.vars.currentTime = video.duration || 1) && tween.invalidate();
                        prep();
                        video.readyState ? resetTime() : once(video, "loadedmetadata", resetTime);
                        return tween;
                    }

                
                }); // Termina gsap escritorio

                mm.add("(max-width: 1024px)", () => {






                    // Configuración para scroll horizontal
                    const sections2 = gsap.utils.toArray(".info__bloque");
                    const snapBloque = gsap.utils.toArray(".snap__bloque");
                    let maxWidth = 0;

                    // Calcula maxWidth
                    sections2.forEach((section2) => {
                        maxWidth += section2.offsetWidth;
                    });

                    // Selecciona el video
                    const videoElement = document.querySelector(".miVideo");

                    videoScrubHorizontal(videoElement, {
                        trigger: "#sectionSoluciones .column__2",
                        //start: "top top",
                        //end: "bottom bottom",
                        start: `${(document.querySelector(".solucion1").offsetLeft + (window.innerWidth * 0 / 100) )}px center`,
                        end: `${(document.querySelector(".solucion3").offsetLeft + ((window.innerWidth * 100 / 100) )*2)}px top`,
                        scrub: true,
                        pin: false,
                        scroller: null, // Cambia si usas un contenedor de scroll personalizado
                    });

                    

                    // Configuración de scroll horizontal
                    gsap.to(sections2, {
                        x: () => `-${maxWidth - window.innerWidth}`,
                        ease: "none",
                        scrollTrigger: {
                            trigger: "#sectionSoluciones",
                            pin: true,
                            pinSpacing: true,
                            scrub: 1,
                            start: "top 100",
                            end: () => `+=${maxWidth}`,
                            snap: {
                                snapTo: 1 / (snapBloque.length - 1),
                                inertia: true,
                                duration: { min: 0.1, max: 0.2 },
                                
                            },
                        },
                    });

                    function videoScrubHorizontal(video, scrollTrigger) {
                        video = gsap.utils.toArray(video)[0];
                    
                        // Asegúrate de que el video esté cargado
                        if (!video.readyState || isNaN(video.duration)) {
                            video.addEventListener("loadedmetadata", () => {
                                initializeScrollTrigger(video, scrollTrigger);
                            });
                        } else {
                            initializeScrollTrigger(video, scrollTrigger);
                        }
                    }
                    
                    function initializeScrollTrigger(video, scrollTrigger) {
                        gsap.fromTo(
                            video,
                            { currentTime: 0 }, // Empieza desde el inicio del video
                            {
                                currentTime: video.duration || 1, // Hasta el final del video
                                ease: "none",
                                scrollTrigger: {
                                    ...scrollTrigger, // Usa las opciones de ScrollTrigger proporcionadas
                                    onUpdate: (self) => {
                                        const progress = self.progress; // Progreso del ScrollTrigger
                                        const newTime = progress * video.duration; // Calcula el nuevo tiempo del video
                                        if (isFinite(newTime)) {
                                            video.currentTime = newTime;
                                        } else {
                                            console.warn("El tiempo calculado no es válido:", newTime);
                                        }
                                    },
                                },
                            }
                        );
                    }

                }); // Termina gsap movil

                const tl = gsap.timeline();
                tl.to(".navbar", {scrollTrigger: {trigger:"#contenedor", start: 'top top', end: "+=999999999999999", pin:'.navbar', pinSpacing: false},});
                tl.to(".navbar", {scrollTrigger: {trigger:"#contenedor", start: '0 top', end: "+=999999999999999", toggleClass: {targets: ".navbar", className: "navBg"}}});
                

                // Llamar al boton

                /*useEffect(() => {
                    document.addEventListener('scroll', _ => document.getElementById('aNosotros').style.setProperty('--v-adjust', window.scrollY + 'px'))
                })*/
                const aInicio = document.getElementById('aInicio');
                const aDiferenciadores = document.getElementById('aDiferenciadores');
                const aIndustrias = document.getElementById('aIndustrias');
                const aSoluciones = document.getElementById('aSoluciones');
                const aNosotros = document.getElementById('aNosotros');
                const aFaq = document.getElementById('aFaq');
                const aContacto = document.getElementById('aContacto');
                const aHero = document.getElementById('btn__hero');

                aInicio.addEventListener('click', function(){
                    gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionInicio", offsetY: 0} });
                });
                aHero.addEventListener('click', function(){
                    gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionNosotros", offsetY: 60} });
                });
                aNosotros.addEventListener('click', function(){
                    gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionNosotros", offsetY: 60} });
                });
                aDiferenciadores.addEventListener('click', function(){
                    gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionDiferenciadores", offsetY: 60} });
                });
                aIndustrias.addEventListener('click', function(){
                    gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionIndustrias", offsetY: 60} });
                });
                aSoluciones.addEventListener('click', function(){
                    gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionSolucionesTop", offsetY: 60} });
                });
                aFaq.addEventListener('click', function(){
                    gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionQA", offsetY: 60} });
                });
                aContacto.addEventListener('click', function(){
                    gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionContacto", offsetY: 60} });
                });
                
                // Nosotros
                gsap.from(".floatimg", {
                    y: "100%",
                    rotate: "90deg",
                    scrollTrigger: {
                        trigger: "#sectionNosotros",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                });

                gsap.from(".floatimg2", {
                    y: "-100%",
                    rotate: "-180deg",
                    scrollTrigger: {
                        trigger: "#sectionNosotros",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                });

                gsap.from(".imgDivisor", {
                    scale: 0.5,
                    ease: "power4.inOut",
                    scrollTrigger: {
                        trigger:"#sectionDivisor",
                        scrub:1,
                        start: "top bottom",
                        end: "50% 80%",
                    },
                });

                gsap.from(".solucionTopLeft", {
                    x: "-50%",
                    opacity:0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger:".solucionTopLeft",
                        scrub:1,
                        start: "top bottom",
                        end: "70% bottom",
                        endTrigger:"#sectionSolucionesTop",
                    },
                });

                gsap.from(".imgSolucion", {
                    x: "50%",
                    opacity:0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger:".imgSolucion",
                        scrub:1,
                        start: "top bottom",
                        end: "70% bottom",
                        endTrigger:"#sectionSolucionesTop",
                    },
                });


                // Batch fadeInOut:
                const Stagger = 0.1;
                // Selección de elementos dentro de ".fadeInOut"
                const h2Elements = document.querySelectorAll(".fadeInOut h2");
                const h3Elements = document.querySelectorAll(".fadeInOut h3");
                const pElements = document.querySelectorAll(".fadeInOut p");
                const aElements = document.querySelectorAll(".fadeInOut a");
                const ulElements = document.querySelectorAll(".fadeInOut ul");
                const imgElements = document.querySelectorAll(".fadeInOut .gatsby-image-wrapper");
                const acordeonElements = document.querySelectorAll(".fadeInOut .acordeon");
                // Condicional en caso de que existan
                if (h2Elements.length) gsap.set(h2Elements, {opacity: 0, x: -50});
                if (h3Elements.length) gsap.set(h3Elements, {opacity: 0, x: -50});
                if (pElements.length) gsap.set(pElements, {opacity: 0, y: 50});
                if (aElements.length) gsap.set(aElements, {opacity: 0, y: 50});
                if (ulElements.length) gsap.set(pElements, {opacity: 0, y: 50});
                if (imgElements.length) gsap.set(imgElements, {opacity: 0, y: 50});
                if (acordeonElements.length) gsap.set(acordeonElements, {opacity: 0, y: 50});
                gsap.set(".card", {opacity: 0, y: 50});

                ScrollTrigger.batch([".fadeInOut h3", ".fadeInOut h2", ".fadeInOut p", ".fadeInOut a", ".fadeInOut ul", ".fadeInOut .gatsby-image-wrapper", ".fadeInOut .acordeon"], {
                    start: 'top 80%', end: 'top 80%',
                    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, x: 0, stagger: Stagger, overwrite: true }),
                    onLeave: batch => gsap.to(batch, { opacity: 1, y: 0, x: 0, stagger: Stagger, overwrite: true }),
                    onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, x: 0, stagger: Stagger, overwrite: true }),
                    onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 50, stagger: Stagger, overwrite: true })
                });

                // Batch Cards
                ScrollTrigger.batch(".card", {
                    trigger: ".listado",
                    start: "top, 70%",
                    end: "top, 60%",
                    onEnter: (batch) =>	gsap.to(batch, { y: 0, opacity: 1, stagger: 0.2 }),
                    onEnterBack: (batch) =>	gsap.to(batch, { y: 0, opacity: 1, stagger: 0.2 }),
                    onLeave: (batch) =>	gsap.to(batch, { y: 0, opacity: 1, stagger: 0.2 }),
                    onLeaveBack: (batch) =>	gsap.to(batch, { y: 50, opacity: 0, stagger: 0.2 }),
                });


                // Video Drag
                //console.clear();
                /*const videoElement = document.querySelector(".miVideo");
                videoScrub(videoElement, {
                scrollTrigger: {
                    trigger: "#sectionSoluciones",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    pin: "#videoHolder",
                },
                //onUpdate: () => console.log(videoElement.currentTime)
                });
            
                function videoScrub(video, vars) {
                    video = gsap.utils.toArray(video)[0]; // in case selector text is fed in.
                    let once = (el, event, fn) => {
                        let onceFn = function () {
                            el.removeEventListener(event, onceFn);
                            fn.apply(this, arguments);
                        };
                        el.addEventListener(event, onceFn);
                        return onceFn;
                    },
                    prepFunc = () => { video.play(); video.pause(); },
                    prep = () => once(document.documentElement, "touchstart", prepFunc),
                    //src = video.currentSrc || video.src,
                    tween = gsap.fromTo(video, {currentTime: 0}, {paused: true, immediateRender: false, currentTime: video.duration || 1, ease: "none", ...vars}),
                    resetTime = () => (tween.vars.currentTime = video.duration || 1) && tween.invalidate();
                    prep();
                    video.readyState ? resetTime() : once(video, "loadedmetadata", resetTime);
                    return tween;
                }

                */


            });
    
        };

        if (document.readyState === "complete") {
            initializeGSAP();
        } else {
            window.addEventListener("load", initializeGSAP);
            return () => window.removeEventListener("load", initializeGSAP);
        }

    }, []);
    
    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div ref={container}>
                    <div className='layout' id="contenedor">
                        <Navbar />
                        <div className='content'>
                            {children}
                        </div>
                        <footer>
                            <div className="column1">
                                <div className="line"></div>
                                <span>IOTAM © | </span>
                                <Link to="/aviso/">Aviso de privacidad</Link>
                                <span> | Sitio creado por </span>
                                <a href="https://marker.com.mx" target="_blank" rel="noreferrer">MARKER Branding</a>
                            </div>
                        </footer> 
                    </div>
                </div>
            </div>
        </div>
    )
}