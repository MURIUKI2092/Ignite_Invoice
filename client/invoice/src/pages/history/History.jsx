import React from 'react'
import "./history.css"
import { Helmet } from 'react-helmet'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

export default function History() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Invoice | History</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="/history" />
            </Helmet>
            <Header />
            <Sidebar />
        </>
    )
}
