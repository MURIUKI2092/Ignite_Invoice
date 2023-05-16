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
                            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
                                <li>
                                    <MdHomeFilled className='icon' /> Home
                                </li>
                            </Link>
                            <Link to={"/history"} style={{ textDecoration: "none", color: "inherit" }}>
                                <li>
                                    <RiHistoryLine className='icon' /> History
                                </li>
                            </Link>
                            <Link to={"/uploads"} style={{ textDecoration: "none", color: "inherit" }}>
                                <li>
                                    <ImFolderUpload className='icon' /> Uploads
                                </li>
                            </Link>
                            <Link to={"/reports"} style={{ textDecoration: "none", color: "inherit" }}>
                                <li>
                                    <TbReportAnalytics className='icon' /> Reports
                                </li>
                            </Link>
                            <Link to={"/clients"} style={{ textDecoration: "none", color: "inherit" }}>
                                <li>
                                    <BsFillPersonVcardFill className='icon' /> Clients
                                </li>
                            </Link>
                            <Link to={"/invoices"} style={{ textDecoration: "none", color: "inherit" }}>
                                <li>
                                    <AiFillDatabase className='icon' /> Invoices
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
