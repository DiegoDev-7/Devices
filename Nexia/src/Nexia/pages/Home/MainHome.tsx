/* Hooks */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

/* Images */
import nexia from "../../../assets/Nexia/NexiaWhite.svg"
import camera from "../../../assets/Icons/rearCamera.svg"
import frontCamera from "../../../assets/Icons/Camera.svg"
import flash from "../../../assets/Icons/flashCamera.svg"
import music from "../../../assets/Apps/music.svg"
import calendar from "../../../assets/Apps/calendar.svg"
import calculator from "../../../assets/Apps/calculator.svg"
import settings from "../../../assets/Apps/settings_dark.svg"
import phone from "../../../assets/Apps/phone_blue.svg"
import heart from "../../../assets/Icons/heart.svg"
import screw from "../../../assets/Icons/screw.svg"



/* Render */
const Home = () => {
  /* Access the devices by clicking on the model view */
  const goTo: any = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  // Nexia tree cards, white, positions
  type Card = {
    id: number;
    className: string;
  }
  const cards: Card[] = [
    { id: 1, className: "position-card-1" },
    { id: 2, className: "position-card-2" },
    { id: 3, className: "position-card-3" }
  ]

  // Nexia devices
  type CardDevice = {
    id: string;
    title: string;
    boxClass: string;
    screenClass: string;
    camera: boolean;
    audio: any;
    screw: boolean;
    available: boolean | string;
  }
  const devices: CardDevice[] = [
    {
      id: "mobile",
      title: "Mobile",
      boxClass: "box-device-mobile-main-1D",
      screenClass: "content-screen-mobile-main-1D",
      camera: true,
      audio: false,
      screw: false,
      available: false,
    },
    {
      id: "tablet",
      title: "Tablet",
      boxClass: "box-device-tablet-main-1D",
      screenClass: "content-screen-tablet-main-1D",
      camera: true,
      audio: "front-audio-tablet-main-1D",
      screw: false,
      available: "box-available-device-main-1D",
    },
    {
      id: "computer",
      title: "Computer",
      boxClass: "box-device-computer-main-1D",
      screenClass: "content-screen-computer-main-1D",
      camera: true,
      audio: "front-audio-computer-main-1D",
      screw: false,
      available: "box-available-device-main-1D",
    },
    {
      id: "atm",
      title: "ATM",
      boxClass: "box-device-atm-main-1D",
      screenClass: "content-screen-atm-main-1D",
      camera: false,
      audio: false,
      screw: true,
      available: "box-available-device-main-1D",
    },
  ]

  return (
    <>
      <div className="container-main-home">

        {/* Scroll indicator window */}
        <ScrollIndicator />


        {/* Firts frame */}
        <section id="start" className="box-main-a">
          <div className="content-main-1A">
            <div className="content-main-center-1A">
              <h1 className="letter-main-nexia-1A">NEXIA</h1>
              <hr className="hr-divider-text-1A" />
              <p className="letter-main-basic-1A">Nexia es una plataforma que permite acceder a dispositivos moviles y computadores virtuales desde el navegador totalmente gratis.</p>
            </div>
          </div>

          <div className="content-main-2A">
            {cards.map(card => ((
              <div key={card.id} className={`card-main-A2 ${card.className}`}>
                <img className="card-image-main-A2" src={nexia} alt="Image Nexia color white" />
              </div>
            )))}

            <button className="button-main-A2" onClick={() => goTo("devices")}>Explorar modelos</button>
          </div>
        </section>


        {/* Second frame */}
        <section id="description" className="box-main-b">
          {/* Phone rear */}
          <div className="content-main-1B">
            <div className="rear-mobile-main-1B">

              <div className="rear-box-mobile-main-1B">
                <div className="rear-box-camera-main-1B">
                  <img className="rear-box-image-main-1B" src={camera} alt="Rear camera" />
                </div>
                <div className="rear-box-flash-main-1B">
                  <img className="flash-box-image-main-1B" src={flash} alt="Flash camera" />
                </div>

                <button className="button-more-main-1B" />
                <button className="button-less-main-1B" />
                <button className="button-power-main-1B" />
              </div>

              <div className="rear-box-nexia-main-1B">
                <img className="rear-box-image-nexia-1B" src={nexia} alt="Nexia logo" />
              </div>

            </div>
          </div>

          {/* description of functionalities */}
          <div className="content-main-2B">
            <div className="box-content-main-2B">
              <p className="font-main-1B">
                El sistema ofrece un entorno completamente interactivo donde es posible acceder a la configuracion del dispositivo, 
                abrir y usar aplicaciones, y realizar tareas cotidianas. Incluye herramientas como calculadora, lista ToDo, juegos como sudoku, 
                reproduccion de musica y otras funcionalidades comunes de un dispositivo real.
              </p>

              <br />

              <p className="font-main-2B">
                El entorno incluye aplicaciones y herramientas integradas para el dia a dia, como gestion de tareas, calculadora, 
                entretenimiento y utilidades del sistema, todo funcionando de manera coherente dentro del dispositivo virtual. 
                Nexia busca facilitar el aprendizaje, la practica y la exploracion de entornos digitales sin depender de hardware real ni instalaciones locales.
              </p>
            </div>
          </div>
        </section>


        {/* Third frame */}
        <section id="apps" className="box-main-c">
          {/* Description + icons: music, calendar and calculator */}
          <div className="box-content-main-1C">

            <p className="font-main-1C">
              Nexia es un software de virtualizacion accesible desde el navegador que permite a los usuarios utilizar dispositivos virtuales como un movil, 
              una tablet o un computador con un comportamiento similar a uno real.
            </p>

            <div className="card-apps-main-1C">  
              <div className="box-image-music-1C">
                <img className="card-image-music-1C" src={music} alt="Music app" />
                <div className="line-music-1C">
                  <div className="point-music-1C" />
                  <div className="point-music-1C bubble" />
                </div>
              </div>
              
              <div className="box-image-calendar-1C">
                <img className="card-image-calendar-1C" src={calendar} alt="Calendar app" />
                <div className="line-calendar-1C">
                  <div className="point-calendar-1C" />
                  <div className="point-calendar-1C bubble" />
                </div>
              </div>
              
              <div className="box-image-calculator-1C">
                <img className="card-image-calculator-1C" src={calculator} alt="Calculator app" />
                <div className="line-calculator-1C">
                  <div className="point-calculator-1C" />
                  <div className="point-calculator-1C bubble" />
                </div>
              </div>
              
            </div>
          </div>
            
          {/* Description + icons: settings and phone */}
          <div className="box-content-main-2C">
            <div className="card-apps-main-2C">

              <div className="box-image-settings-2C">
                <img className="card-image-settings-2C" src={settings} alt="Settings app" />
                <div className="line-settings-2C">
                  <div className="point-settings-2C" />
                  <div className="point-settings-2C bubble-2C" />
                </div>
              </div>

              <div className="box-image-phone-2C">
                <img className="card-image-phone-2C" src={phone} alt="Phone app" />
                <div className="line-phone-2C">
                  <div className="point-phone-2C" />
                  <div className="point-phone-2C bubble-2C" />
                </div>
              </div>
            </div>

            <p className="font-main-1C">
              El sistema ofrece un entorno completamente interactivo donde es posible acceder a la configuracion del dispositivo, 
              abrir y usar aplicaciones, y realizar tareas cotidianas. Incluye herramientas como calculadora, lista ToDo, juegos como sudoku, 
              reproduccion de musica y otras funcionalidades comunes de un dispositivo real.
            </p>

          </div>
        </section>


        {/* Fourd frame */}
        <section id="devices" className="box-main-d">
          {/* Devices */}
          <div className="content-main-1D">

            {devices.map(device => (
              
              <div key={device.id} className="card-device-main-1D">

                <div className={device.boxClass}>
                  <div className={device.screenClass}>

                    <p className="title-device-main-1D">{device.title}</p>

                    {device.camera && (
                      <img
                        className="front-camera-main-1D"
                        src={frontCamera}
                        alt="Front camera"
                      />
                    )}

                    {device.audio && (
                      <div className={device.audio} />
                    )}

                    {device.screw && (
                      <img
                        className="screw-device-main-1D"
                        src={screw}
                        alt="Screw decoration"
                      />
                    )}

                  </div>
                </div>

                {device.available && (
                  <div className="box-noavailable-device-main-1D">
                    <p>Proximamente</p>
                  </div>
                )}

                {!device.available && (
                  <Link to="/Phone" className="box-avaliable-device-main-1D" />
                )}

              </div>

            ))}

          </div>
        </section>


        {/* Fifth frame */}
        <section id="gratitude" className="content-main-2D">
          <div className="box-main-2D">

            <div className="box-image-main-2D">
              <img className="heart-image-2D" src={heart} alt="Heart image" />
            </div>

            <div className="box-main-text-2D">
              <p className="font-main-2D">
                Nexia es un proyecto de uso completamente gratuito. Todas sus funcionalidades estan disponibles sin costos ocultos, 
                suscripciones ni pagos obligatorios.
              </p>

              <p className="font-main-2D">
                El objetivo del proyecto es ofrecer una herramienta accesible para cualquier persona, permitiendo el uso libre de los dispositivos 
                virtuales directamente desde el navegador. Nexia siempre sera gratuito y estara enfocado en brindar una experiencia abierta, 
                simple y sin barreras para los usuarios.
              </p>
            </div>
            
          </div>
        </section>
      </div>
    </>
  )
}



/* Scroll indicator in the part left window */
const ScrollIndicator = () => {
  type Section = {
    id: string;
    label: string;
  }
  const sections: Section[] = [
    { id: "start", label: "Inicio" },
    { id: "description", label: "Descripción" },
    { id: "apps", label: "Aplicaciones" },
    { id: "devices", label: "Dispositivos" },
    { id: "gratitude", label: "Nexia" },
  ]

  const [active, setActive] = useState<string>(sections[0].id)

  useEffect(() => {
    const observer: any = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(s => {
      const el: any = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const goTo: any = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <>
      <div className="scroll-progress">
        <div className="dots">
          {sections.map(section => (
            <div
              key={section.id}
              className={`dot-item ${active === section.id ? "active" : ""}`}
            >
              <span className="font-dot-label">
                {section.label}
              </span>

              <button
                className="dot"
                onClick={() => goTo(section.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home