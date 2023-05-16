import React from 'react'
import "./homePage.css"

export default function HomePage() {
    return (
        <section className="home">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 main-area">
                        <div className="categs">
                            <div className="categ">
                                <h5>
                                    Balance Outstanding
                                </h5>
                                <p>
                                    93.7 <span>k</span>
                                </p>
                            </div>
                            <div className="categ">
                                <h5>
                                    Balance Overdue
                                </h5>
                                <p>
                                    14.4 <span>k</span>
                                </p>
                            </div>
                            <div className="categ">
                                <h5>
                                    Invoice Due Next 30 Days
                                </h5>
                                <p>
                                    107 <span>k</span>
                                </p>
                            </div>
                            <div className="categ">
                                <h5>
                                    Collections Last 30 Days
                                </h5>
                                <p>
                                    87.7 <span>k</span>
                                </p>
                            </div>
                        </div>
                        <div className="categs">
                            <div className="categ">
                                <h5>
                                    Invoices Awaiting Purchase Orders
                                </h5>
                                <p>
                                    0
                                </p>
                            </div>
                            <div className="categ">
                                <h5>
                                    Invoices To Be Sent
                                </h5>
                                <p>
                                    0
                                </p>
                            </div>
                            <div className="categ">
                                <h5>
                                    Tasks
                                </h5>
                                <p>
                                    20
                                </p>
                            </div>
                            <div className="categ">
                                <h5>
                                    Unallocated Cash
                                </h5>
                                <p>
                                    50.1 <span>k</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
