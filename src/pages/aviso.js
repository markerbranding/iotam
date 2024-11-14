import React from 'react'
import Layout from '../components/Layout'

export default function Aviso() {
  return (
    <Layout>
        <div>
          <h1>Aviso de privacidad</h1>
        </div>
        <div id="videoHolder">
          <div id="innerVideoHolder">
            <video id="miVideo" className="miVideo" src="" playsinline="true" webkit-playsinline="true" preload="metadata" muted="muted"><track></track></video>
          </div>
        </div>
    </Layout>
  )
}
