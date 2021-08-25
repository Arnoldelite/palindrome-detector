import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/batman-new.png'
import './style.scss'

const Header = () => (
  <div className="header">
    <div className="header__left">
      <Link to="/popular">
        <img className="logo" src={logo} alt="" />
        <sup className="darken">wayne ent.</sup>
      </Link>
    </div>
    <div className="header__right">
      <Link to="/app">
        <h3 className="darken">Palindrome Detector</h3>
      </Link>
    </div>
  </div>
)

export default Header
