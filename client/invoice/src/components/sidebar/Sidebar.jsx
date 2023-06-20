import React from 'react'
import "./sidebar.css"
import { Link } from "react-router-dom";
import { MdHomeFilled } from 'react-icons/md';
import { RiHistoryLine } from 'react-icons/ri';
import { ImFolderUpload } from 'react-icons/im';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { AiFillDatabase } from 'react-icons/ai';
import { TbReportAnalytics } from 'react-icons/tb';

export default function Sidebar() {
    return (
        <section className="sidebar">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 side-menu">
                        <ul>
                            <li>
                                <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
                                    <MdHomeFilled className='icon' /> Home
                                </Link>
                            </li>

                            <li>
                                <Link to={"/history"} style={{ textDecoration: "none", color: "inherit" }}>
                                    <RiHistoryLine className='icon' /> History
                                </Link>
                            </li>

                            <li>
                                <Link to={"/uploads"} style={{ textDecoration: "none", color: "inherit" }}>
                                    <ImFolderUpload className='icon' /> Uploads
                                </Link>
                            </li>

                            <li>
                                <Link to={"/reports"} style={{ textDecoration: "none", color: "inherit" }}>
                                    <TbReportAnalytics className='icon' /> Reports
                                </Link>
                            </li>

                            <li>
                                <Link to={"/clients"} style={{ textDecoration: "none", color: "inherit" }}>
                                    <BsFillPersonVcardFill className='icon' /> Clients
                                </Link>
                            </li>

                            <li>
                                <Link to={"/invoices"} style={{ textDecoration: "none", color: "inherit" }}>
                                    <AiFillDatabase className='icon' /> Invoices
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
