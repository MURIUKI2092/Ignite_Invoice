import React from 'react'
import "./home.css"
import { Helmet } from 'react-helmet'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import HomePage from '../../components/home_data/HomePage'

export default function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Invoice | Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="/" />
            </Helmet>
            <Header />
            <div className="home-page">
                <Sidebar />
                <HomePage />
            </div>

        </>
    )
}