import React from 'react'
import "./reports.css"
import { Helmet } from 'react-helmet'
import Header from '../../components/header/Header'

export default function Reports() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Invoice | Clients</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="/reports" />
            </Helmet>
            <Header />
        </>
    )
}
