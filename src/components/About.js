import React from "react";
import './About.css'

function About() {
    return(
        <div className="about_div">
            <h1 className="about_title">A Propos de Nous</h1>
            <p className="about_description">
            La Fédération Tchadienne de Football (FTFA) est 
            l'organisme directeur du football au Tchad.
             Fondée en 1962, elle est affiliée à la FIFA et 
             à la CAF depuis 1964. Elle organise les championnats
              nationaux de football, y compris la Premier League tchadienne,
               la Coupe du Tchad et l'équipe nationale. Ses bureaux sont situés à N'Djamena.
                La FTFA (Fédération Tchadienne de Football Association) est le nom officiel 
                de la fédération en français, et en arabe, elle est connue sous le nom d'الفيدرالية التشادية لكرة القدم.<br/>
                La Fédération Tchadienne de Football Association (FTFA) a été créée par 
                l'Arrêté n° 27/INT du 28 juillet 1962 et la législation en vigueur dans
                 la République du Tchad. Elle est enregistrée sous le numéro de folio 6,
                  dossier 44 du Ministère de l'Intérieur le 23 mars 1963 à N'Djamena[2].
            </p>
            <button className="about_see_more">Voir plus de details</button>
        </div>
    )
}

export default About