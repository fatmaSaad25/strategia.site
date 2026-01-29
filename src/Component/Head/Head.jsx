import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../Head/Head.module.css'
import logo from '../img/logo strategia.png'
const Head = () => {
    return (
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#"><img src={logo} alt="logo" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end mr-4" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class={`nav-link ${Style.textList}`} aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link ${Style.textList}`} to="packages">Packages</Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link ${Style.textList}`} to="FAQ">FAQ</Link>
        </li>
      </ul>
      <div className={Style.btn}>
        <Link className={Style.btnBook} to='/FromContact'>Book Now</Link>
      </div>
    </div>
  </div>
</nav>

    );
}

export default Head;