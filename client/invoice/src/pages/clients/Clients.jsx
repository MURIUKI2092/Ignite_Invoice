import React from 'react'
import "./clients.css"
import { Helmet } from 'react-helmet'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Client from '../../components/clients_data/Clients'

export default function Clients() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Invoice | Clients</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="/clients" />
            </Helmet>
            <Header />
            <div className="clients-page">
                <Sidebar />
                <Client />
            </div>

        </>
    )
}
