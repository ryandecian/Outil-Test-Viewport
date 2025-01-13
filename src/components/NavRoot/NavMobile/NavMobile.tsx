import mail from "../../../assets/data-img/mail-icon.webp"
import github from "../../../assets/data-img/github-icon.png"
import linkedin from "../../../assets/data-img/linkedin-icon.png"


function NavMobile() {

    return (
         <section className="NavMobile">
             <div className="ContainerIconNavMobile">
                 <a href="https://github.com/ryandecian">
                     <img src={github} alt="GitHub"/>
                 </a>
             </div>

             <div className="ContainerIconNavMobile">
                 <a href="https://www.linkedin.com/in/ryan-decian-864696302">
                     <img src={linkedin} alt="Linkedin"/>
                 </a>
             </div>

             <div className="ContainerIconNavMobile">
                 <a href="mailto:ryan.decian.dev+outil-test-viewport@gmail.com">
                     <img src={mail} alt="Mail"/>
                 </a>
             </div>
         </section>
    )
}

export default NavMobile;