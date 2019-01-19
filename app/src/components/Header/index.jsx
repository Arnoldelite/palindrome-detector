import React from 'react'
import logo from '../../assets/batman-new.png'
import './style.scss'

const Header = () => (
  <div className="header">
    <div className="header__left">
      <img className="logo" src={logo} alt="" />
      <sup>wayne ent.</sup>
    </div>
    <div className="header__right">
      <h3>Palindrome Detector</h3>
    </div>
  </div>
)

export default Header
