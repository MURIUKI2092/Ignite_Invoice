import React from 'react'
import "./reports.css"
import { Helmet } from 'react-helmet'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Report from '../../components/reports_data/Reports'

export default function Reports() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Invoice | Reports</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="/reports" />
            </Helmet>
            <Header />
            <div className="reports-page">
                <Sidebar />
                <Report />
            </div>
        </>
    )
}
