import React from "react";
import "./Footer.scss";

export const Footer = () => {
   return (
      <div className="footer">
         <div className="top">
            <div className="item">
               <h1>Categories</h1>
               <span>Women</span>
               <span>Men</span>
               <span>Shoes</span>
               <span>Accessories</span>
               <span>New Arrivals</span>
            </div>
            <div className="item">
               <h1>Categories</h1>
               <span>FAQ</span>
               <span>Pages</span>
               <span>Stores</span>
               <span>Compare</span>
               <span>Cookies</span>
            </div>
            <div className="item">
               <h1>About</h1>
               <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas at fugiat, dicta fuga
                  aspernatur iste, eaque nulla rerum earum, enim temporibus recusandae eius ad nostrum quis
                  qui? Et, libero ipsa.
               </span>
            </div>
            <div className="item">
               <h1>Contact</h1>
               <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, harum. Corrupti
                  molestias fugiat illum ab rem animi labore sunt dicta quidem odio accusantium possimus
                  beatae, ea quam, praesentium cum adipisci?
               </span>
            </div>
         </div>
         <div className="bottom">
            <div className="left">
               <span className="logo">Lamastore</span>
               <span className="copyright">@ Copyright 2023. All Rights Reserved</span>
            </div>
            <div className="right">
               <img src="/img/payment.png" alt="" />
            </div>
         </div>
      </div>
   );
};
