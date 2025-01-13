import "./HomeMainMobile.css"
import { useState } from "react";
import { useEffect } from "react";

function HomeMainMobile() {
     /*Logique de calcul et récupération des dimensions écran*/
     // État pour les dimensions de l'écran
     const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        });
  
   // Mettre à jour les dimensions de l'écran lors du redimensionnement
   useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        });
    };

window.addEventListener("resize", handleResize);

// Nettoyage
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
    return (
        <>
             <section className="title">
                 <h1>Dimension du viewport de votre appareil</h1>
                 <p>{`Width = ${dimensions.width}px`}</p>
                 <p>{`Height = ${dimensions.height}px`}</p>
             </section>
        </>
    )
}

export default HomeMainMobile;