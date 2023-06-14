import React from "react";
import './Banner.css'

function Banner() {
      return (
        <div className="App_Banner">
          
          <nav>
            <img className='logo' src="https://iili.io/H6337SV.md.png" alt='ftfa-logo'/>
            <p className='logo-title'>
              <span className='fed'>Federation</span><br/>
            <span className='tchne'>Tchadienne</span><br/>
            <span className='football'>de Football</span></p>
          </nav>
          <h1 className="banner_title">Portail du Foot <span className='chad'>Tchadien</span></h1>
          <p className='descr_ban'>
          Découvrez l'incroyable univers du football tchadien, où la passion se mêle au talent des joueurs et à la détermination des équipes. Plongez dans une aventure sportive captivante et suivez les exploits de nos héros du ballon rond. Du terrain aux tribunes, vibrez au rythme du football tchadien et laissez-vous emporter par l'émotion du jeu.
          </p>
          <button className="banner_button">Explorez les competitons</button>
        </div>
      );
}

//https://www.shutterstock.com/image-illustration/so…rs-ball-seamless-texture-over-260nw-254259076.jpg

export default Banner