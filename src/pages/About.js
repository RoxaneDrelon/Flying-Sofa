import React from "react";
import "./About.css"

const About = () => {
    return (

        <div className="About">
            <ul>
                <li>
                    <h2>Windy</h2>
                    <p>
                        est un outil de visualisation et de prévision météorologique en temps réel. Le site a été créé par Ivo en 2014. Le mot d’ordre sur Windy.com est la simplicité d’utilisation et l’accessibilité aux données météorologiques et climatiques. Une application est même disponible pour tablettes et smartphones.
                    </p>
                </li>
                <li>
                    <h2>Son fonctionnement</h2>
                    <p>
                        Afin de réaliser une cartographie en temps réel, plusieurs données satellitaires sont utilisées. Le premier modèle est le Centre européen pour les prévisions météorologiques à moyen terme (ECMWF). Comme indiqué dans sa dénomination, il s’agit d’un modèle européen. Le deuxième est le Global Forecast System (GFS). Il s’agit ici du modèle de prévision américain. Pour finir, pour nous, européen, un système à la résolution plus précise existe : le NEM (modèle suisse de Meteoblue.com). Ce modèle est centré uniquement sur l’Europe.
                        Le changement de modèle s’effectue en bas à droite du site.
                </p>
                </li>
                <li>
                    <h2>Données en temps réel</h2>
                    <p>offre un large panel de données météorologiques atmosphériques et marines (disponible à la droite du site) en temps réel. La donnée de base quand l’utilisateur arrive sur la page web est la vitesse du vent. Cependant, l’utilisateur peut aussi naviguer dans une pléthore de données telles que la pression atmosphérique, la température de l’atmosphère ou des océans, les nuages, les précipitations, les vagues etc…
Le site est intuitif, fourni en données et la navigation sur celui-ci est aisée pour un utilisateur lambda. Par exemple, la vitesse du vent est disponible à la surface du globe (intéressant pour voir les phénomènes cycloniques et dépressionnaires) mais aussi en haute altitude (jusqu’à 13km).</p>
                    <p>Une dernière option et non des moindres de Windy.com est le système de prévision à long terme. En effet, l’utilisateur peut manuellement ou automatiquement faire défiler les jours de la semaine afin de visualiser les prochaines prévisions météorologiques.
Amateur de météorologie (ou lecteur curieux), vous êtes servis. Si vous vous ennuyez au travail ou en cours jetez un coup d’œil à Windy.com pour traquer les prochains cyclones.</p>

                </li>
            </ul>
        </div>



    );
}

export default About;