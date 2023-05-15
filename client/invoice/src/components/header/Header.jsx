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
                    <BiPlus className="plus" />
                  </li>
                  <li>
                    Account <BiChevronDown className="arrow" />
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
