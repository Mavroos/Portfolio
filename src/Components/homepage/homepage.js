import './homepage.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Homepage() {

    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6y9xet8', 'template_5yq37jc', form.current, 'TZ3Po06ychCD0wj90')
      .then((result) => {
            console.log(result.text);
            document.getElementById("confirmation").textContent= "Message sent succesfully";
            document.getElementById("confirmation").style.color = "green";
            document.getElementById("name").value= "";
            document.getElementById("email").value= "";
            document.getElementById("message").value= "";
            
      }, (error) => {
            document.getElementById("confirmation").textContent= "Message not sent";
            document.getElementById("confirmation").style.color = "red";
      });
      setTimeout(() => {
        document.getElementById("confirmation").textContent= "";
        
      }, 5000);
  };

  
    return (
        <div className="All">
            <section id="Home">
                <div className="overlay"></div>
                <video autoPlay loop muted playsInline className="bgVideo"> <source src="img/video.mp4" type = 'video/mp4'/></video>
                <div className="textContainer">
                    <h1 className="mainTitle">Creative <br/> Developer</h1>
                    <a className="button" href="#contact"> Contact me </a>
                </div>
                <h1 className="scrollDown">scroll down</h1>
            </section>
            <section id="Skills">
                <div className="SkillsContainer">
                    <div className="Hardware">
                        <img src="img/Hardware.webp" className='hardwareImg'/>
                        <div className='hardwareContainer'>
                            <h1 className="hardwareTitle">Hardware Skills:</h1>
                            <p className="hardwareDescription"> Durante il mio percorso con il corso CNNA ITN (Cisco Networking Academy Introduction to Networks), ho acquisito una solida conoscenza e competenza pratica nel campo delle reti informatiche. Questo corso mi ha fornito una base solida nei fondamenti delle reti, permettendomi di comprendere e configurare reti di dimensioni medio-piccole. Inoltre, ho sviluppato abilità nell'assemblaggio e nella manutenzione di computer.</p>
                        </div>
                        
                    </div>
                    
                    <div className="Software">

                        <img src="img/Software.png" className="softwareImg"/>
                        <div className='softwareContainer'>
                            <h1 className="softwareTitle">Software Skills:</h1>
                            <p className="softwareDescription">Durante i miei anni scolastici, ho imparato linguaggi come HTML, CSS, Java, C++ e Python.Successivamente, ho approfondito la conoscenza di React, una potente libreria JavaScript per lo sviluppo di interfacce utente. Sono un appassionato di apprendimento continuo e sempre alla ricerca di nuove sfide nel campo dello sviluppo software. Sono entusiasta di mettermi a disposizione per contribuire al successo dei progetti futuri.</p>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section id="Projects">
                <div className="projectContainer"> 
                    <h1 className='projectTitle'> My Projects </h1>
                    <div className="cardContainer">
                        
                        <div className="card">
                            <h1 className="cardTitle"> Progetto prova</h1>
                            <img src="img/imgProva.gif" className="cardImg"/>
                            <h3>Coming soon</h3>
                                <div className="cardLinks">
                                    <a href="/" className="viewCode"> view code</a>    
                                    <a href="/" className="liveDemo"> live demo</a> 
                                </div> 
                        </div>
                        
                        <div className="card">
                            <h1 className="cardTitle"> Progetto prova</h1>
                            <img src="img/imgProva.gif" className="cardImg"/>
                            <h3>Coming soon</h3>
                                <div className="cardLinks">
                                    <a href="/" className="viewCode"> view code</a>    
                                    <a href="/" className="liveDemo"> live demo</a> 
                                </div> 
                        </div>
                        
                        <div className="card">
                            <h1 className="cardTitle"> Progetto prova</h1>
                            <img src="img/imgProva.gif" className="cardImg"/>
                            <h3>Coming soon</h3>
                                <div className="cardLinks">
                                    <a href="/" className="viewCode"> view code</a>    
                                    <a href="/" className="liveDemo"> live demo</a> 
                                </div> 
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="contactContainer">
                    <img src='img/contactImg.png' className='contactImg'/>
                    <div className="formContainer">
                        <form  className="form" ref={form} onSubmit={sendEmail}>
                            <h1> Contact Me!</h1>                       
                                    <input id="name" className='name' type="text" name="user_name" placeholder='Inserisci il tuo nome'/>                          
                                    <input id="email" className='email' type="email" name="user_email" placeholder='Inserisci la tua email'/>                           
                                    <textarea id="message" className='message' name="message" placeholder='il tuo messaggio'/>
                                    <input className='submit-btn' type="submit" value="Send" />
                                    <p id='confirmation'></p>
                            </form>   
                    </div>    
                </div>
            </section>
        </div>
      
    );
  }
  
  export default Homepage; 