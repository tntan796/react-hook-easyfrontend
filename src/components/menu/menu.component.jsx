import React from 'react';
import './menu.component.css';

function MenuComponent() {
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

    return (
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">Trang chủ</a>
        <a href="#news">Số hình</a>
        <a href="#contact">Contact</a>
        <a href="#" className="icon" onClick={() => myFunction()}>
            <i className="fas fa-bars"></i>
        </a>
    </div>
    )
}
export default MenuComponent;