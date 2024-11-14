import React from 'react'
import {useRef, useEffect} from 'react'
import gsap from "gsap"

export default function Canvas() {

    const ref=useRef();

    

    useEffect(() => {
        const canvas = ref.current;
        
        const context = canvas.current.getContext('2d')

        const frameCount = 110;

    const currentFrame = (index) => `./prueba-iotam/${(index + 1).toString()}.jpg`;
    const images = [];
    let ball = { frame: 0 };

    for(let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
    }

    


    gsap.to(ball, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            trigger:"#colRightSoluciones",
            scrub: true,
            pin: "canvas",
            start:"top 0%",
            end: "bottom bottom"
        },
        onUpdate: render,
    })

    images[0].onload = render;

    function render() {
        canvas.width = images[ball.frame].width;
        canvas.height = images[ball.frame].height;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[ball.frame],0,0);
    }
    

    /*images[0].onload = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[ball.frame],0,0);
    }*/

       
    },[])

    

  return (
    <canvas ref={ref}></canvas>
  )
}

















/*
export default function Canvas() {

    //const canvas = document.querySelector(".canvas")
    const canvasRef = useRef(null);
    


useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.width;
    canvas.height = window.height;
    
    const context = canvas.getContext("2d");
    const frameCount = 224;

    const currentFrame = (index) => `./prueba-iotam/${(index + 1).toString()}.jpg`;
    const images = [];
    let ball = { frame: 0 };

    for(let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
    }

    console.log(images);

    images[0].onload = function() {
        context.clearRect(0, 0, window.width, window.height);
        context.drawImage(images[ball.frame],0,0);
    }


}, [canvasRef]);


  return (
    <div>
      <canvas className="canvas" ref={canvasRef}></canvas>
    </div>
  )
}
*/