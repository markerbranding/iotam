import React from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div>
        <h1>Error 404</h1>
        <p>Lo sentimos, esta página no existe</p>
        <div id="videoHolder">
          <div id="innerVideoHolder">
            <video id="miVideo" className="miVideo" src="" playsinline="true" webkit-playsinline="true" preload="metadata" muted="muted"><track></track></video>
          </div>
        </div>
      </div>
    </Layout>
  )
}