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
        if (!ScrollSmoother.get()) {
            ScrollSmoother.create({
                wrapper: wrapperRef.current,
                content: contentRef.current,
                smooth: 1,
                effects: true,
                smoothTouch: 0.1,
            });
        }
    
        const tl = gsap.timeline();
        tl.to(".navbar", {scrollTrigger: {trigger:"#contenedor", start: 'top top', end: "+=999999999999999", pin:'.navbar', pinSpacing: false},});
        tl.to(".navbar", {scrollTrigger: {trigger:"#contenedor", start: '30 top', end: "+=999999999999999", toggleClass: {targets: ".navbar", className: "navBg"}}});
        tl.to(".imgSolucion", {scale:1 , opacity:1, scrollTrigger: {trigger:".imgSolucion", scrub:1, start: "top 80%", endTrigger:"#sectionSolucionesTop", end: "bottom 90%"},});

        // Llamar al boton

        /*useEffect(() => {
            document.addEventListener('scroll', _ => document.getElementById('aNosotros').style.setProperty('--v-adjust', window.scrollY + 'px'))
        })*/
        const aInicio = document.getElementById('aInicio');
        const aDiferenciadores = document.getElementById('aDiferenciadores');
        const aIndustrias = document.getElementById('aIndustrias');
        const aSoluciones = document.getElementById('aSoluciones');
        const aNosotros = document.getElementById('aNosotros');
        const aContacto = document.getElementById('aContacto');
        const aHero = document.getElementById('btn__hero');

        aInicio.addEventListener('click', function(){
            gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionInicio", offsetY: 100} });
        });
        aHero.addEventListener('click', function(){
            gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionNosotros", offsetY: 0} });
        });
        aDiferenciadores.addEventListener('click', function(){
            gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionDiferenciadores", offsetY: 100} });
        });
        aIndustrias.addEventListener('click', function(){
            gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionIndustrias", offsetY: 100} });
        });
        aSoluciones.addEventListener('click', function(){
            gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionSolucionesTop", offsetY: 100} });
        });
        aNosotros.addEventListener('click', function(){
            gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionNosotros", offsetY: 100} });
        });
        aContacto.addEventListener('click', function(){
            gsap.to(window, { duration: 0.5, scrollTo: {y: "#sectionContacto", offsetY: 100} });
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

        // Video Drag
        //console.clear();
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
                                <Link to="../aviso.js">Aviso de privacidad</Link>
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