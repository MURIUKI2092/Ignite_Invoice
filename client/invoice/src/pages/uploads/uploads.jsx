import React from 'react'
import "./uploads.css"
import { Helmet } from 'react-helmet'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Upload from '../../components/uploads_data/Uploads'

export default function Uploads() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Invoice | Uploads</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/uploads" />
      </Helmet>
      <Header />
      <div className="uploads-page">
        <Sidebar />
        <Upload />
      </div>
    </>
  )
}
