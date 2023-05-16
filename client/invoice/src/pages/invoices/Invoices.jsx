import React from 'react'
import "./invoices.css"
import { Helmet } from 'react-helmet'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Invoices() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Invoice | Invoices</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="/invoices" />
            </Helmet>
            <Header />
            <Sidebar />
        </>
    )
}
