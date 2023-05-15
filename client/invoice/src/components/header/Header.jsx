import React from 'react'
import "./header.css"
import { Link } from "react-router-dom";
import logo from "../../imgs/ignite_nursing_logo.png"
import { BiPlus, BiChevronDown } from 'react-icons/bi';

export default function Header() {
  return (
    <section className="header-menu">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <nav className="main-header">
              <div className="left">
                <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={logo} alt="Ignite Nursing" />
                </Link>
              </div>
              <div className="right">
                <ul className="menu">
                  <li>
                    <div className="plus-dropdown">
                      <h3>
                        <BiPlus className="plus" />
                      </h3>
                      <div className="dropdown">
                        <ul>
                          <h4>
                            Add New
                          </h4>
                          <li>
                            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>Client</Link>
                          </li>
                          <li>
                            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>Import Invoices</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="account-dropdown">
                      <h3>
                        Account <BiChevronDown className="arrow" />
                      </h3>
                      <div className="dropdown">
                        <ul>
                          <h4>
                            Adnan Ahmed
                          </h4>
                          <li>
                            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>Edit Account</Link>
                          </li>
                          <li>
                            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>Log out</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
