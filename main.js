import { companies, getCompanyTemplate } from './companies';
import './style.css'


const mainContent = document.querySelector('.main-content');
let renderedComponent = '.home';

const logo = document.querySelector('.header-logo');
logo.addEventListener('click', () =>{
  const homeButton = document.querySelector('#home');
  homeButton.click();

})

const listElements = document.querySelectorAll('.header-optionButtons');
listElements.forEach((element)=>{
  element.addEventListener('click', (ev)=>{
    ev.preventDefault();
    const closeButton = document.querySelector('.hamburger-button-close')
    closeButton.click();
    const linkHref = ev.target.href;
    console.log('El link apunta a ', linkHref)
    const enlace = linkHref.split('/').pop();
  
    switch(enlace){
      case 'projects':
        renderedComponent = '.projects';
        renderProjects()
        break;
      case 'experience':
        renderedComponent = '.experience';
        renderExperience()
        break;
      case 'home':
        renderedComponent = '.home';
        renderHome();
        break;
      default:
        console.log('No es posible renderizar el componente seleccionado ❌');
    }
  })
})

const renderHome = () =>{
    renderedComponent = '.home';
    mainContent.innerHTML = ``;
    mainContent.innerHTML += `
      <section class="home">
    <h1>Hola, mi nombre es</h1>
    <h2 class="big-letters">Alejandro González Luzuriaga.</h2>
    <h3 class="big-letters">Soy un Full Stack Developer.</h3>
    <div class="social-media-mobile-and-tablet">
      <p> Desarrollador Full Stack y estudiante de ingeniería informática. </br>Enfocado en construir webs rápidas y fáciles de usar. 
      </br> Las tecnologías con las que he trabajado recientemente son: </p>
      <ul class="technologies">
        <li class="technologies-item">HTML</li>
        <li class="technologies-item">CSS</li>
        <li class="technologies-item">JavaScript</li>
        <li class="technologies-item">React</li>
      </ul>
      <div class="avatar-container">
        <img src="https://res.cloudinary.com/djgkryxou/image/upload/v1678234976/Portfolio/Avatar_hhndhk.png" alt="Avatar Image" width="200px" height="200px">
      </div>
    </div>
  </section>
  <footer>
    <div class="social-media-links-mobile-and-tablet">
      <a href="https://github.com/alejandroluzuriaga">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="30"
          height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
      </a>
      <a href="https://www.instagram.com/alejandroluzuriaga/">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="30"
          height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
      </a>
      <a href="https://twitter.com/ErrorLuzuriaga">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="30"
          height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
        </svg>
      </a>
      <a href="https://twitter.com/ErrorLuzuriaga">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="30"
          height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="11" x2="8" y2="16" />
          <line x1="8" y1="8" x2="8" y2="8.01" />
          <line x1="12" y1="16" x2="12" y2="11" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
      </a>
      <a href="mailto:luzuriagalejandro@gmail.com">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-gmail" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" />
          <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
          <path d="M16 4l-4 4l-4 -4" />
          <path d="M4 6.5l8 7.5l8 -7.5" />
        </svg>
      </a>

    </div>
  </footer>`
}
renderHome();



const renderExperience = () =>{
  mainContent.innerHTML = ``;
  mainContent.innerHTML += `
  <section class="experience">
            <h2 class="experience-section-title"> <p>02. </p> <span>Puestos importantes</span></h2>
            <ul class="experience-companies">
              <li class="experience-companies-element" id="Apple">
                <button class="experience-companies-element-text">Apple</button>
              </li>
              <li class="experience-companies-element" id="Google">
                <button class="experience-companies-element-text">Google</button>
              </li>
              <li class="experience-companies-element" id="Amazon" >
                <button class="experience-companies-element-text">Amazon</button>
              </li>
              <li class="experience-companies-element" id="Meta">
                <button class="experience-companies-element-text">Meta</button>
              </li>
              <li class="experience-companies-element" id="IBM">
                <button class="experience-companies-element-text">IBM</button>
              </li>
            </ul>
            <ul class="experience-container">
              
            </ul>
          </section>
  `
  const companiesElements = document.querySelectorAll('.experience-companies-element');
  companiesElements.forEach((company)=>{
    const experienceElementContainer = document.querySelector('.experience-container');
    const currentJobButton = document.querySelector('#Google');
    currentJobButton.click();
    company.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const companieToRender = ev.target.innerText;
      const experienceElement = getCompanyTemplate(companieToRender)
      companiesElements.forEach((otherCompany) => {
        if (otherCompany !== company && otherCompany.classList.contains("experience-companies-element-clicked")) {
          otherCompany.classList.remove("experience-companies-element-clicked");
        }
      });
      company.classList.add("experience-companies-element-clicked");
      experienceElementContainer.innerHTML = experienceElement;
    })
})

}

const renderProjects = () =>{
  mainContent.innerHTML = ``;
  mainContent.innerHTML += `
  <section class="projects">
            <h2 class="projects-section-title"> <p>03. </p> <span>Proyectos que he construido</span></h2>
            <ul class="projects-container">
              <li class="project-element">
                <div class="project-element-content">
                  <p class="project-status">Desplegado ✅</p>
                  <h3 class="project-title">
                    <a href="https://tienda-dinamica-alejandroluzuriaga.netlify.app/">Tienda Dinámica</a>
                  </h3>
                  <div class="project-description">
                    <p>
                      Maquetación web de Wallapop. Disponible <a href="https://tienda-dinamica-alejandroluzuriaga.netlify.app/" class="project-description-link-text">aquí</a>
                    </p>
                  </div>
                  <ul class="project-technologies">
                    <li>VS Code</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                  </ul>
                  <div class="project-links">
                    <a href="https://github.com/alejandroluzuriaga/Proyecto-Tienda-Dinamica">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                        width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                    </a>
                    <a href="https://portfolio-alejandro-luzuriaga.netlify.app/">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                        <line x1="10" y1="14" x2="20" y2="4" />
                        <polyline points="15 4 20 4 20 9" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="project-element-image">
                  <div class="project-element-image-container">
                    <img src="https://res.cloudinary.com/djgkryxou/image/upload/v1678234976/Portfolio/TiendaDinamica_gdajsc.png" alt="TiendaDinamica captura">
                  </div>
                </div>
              </li>
              <li class="project-element">
                <div class="project-element-content">
                  <p class="project-status">Desplegado ✅</p>
                  <h3 class="project-title">
                    <a href="https://github.com/alejandroluzuriaga/Pokemon-Game">Pokemon Game</a>
                  </h3>
                  <div class="project-description">
                    <p>
                      Juego básico de Pokemon hecho como proyecto para la Universidad con 3 amigos.
                    </p>
                  </div>
                  <ul class="project-technologies">
                    <li>VS Code</li>
                    <li>Java</li>
                  </ul>
                  <div class="project-links">
                    <a href="https://github.com/alejandroluzuriaga/Pokemon-Game">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                        width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                    </a>
                    <a href="https://github.com/alejandroluzuriaga/Pokemon-Game">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                        <line x1="10" y1="14" x2="20" y2="4" />
                        <polyline points="15 4 20 4 20 9" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="project-element-image">
                  <div class="project-element-image-container">
                    <img src="https://res.cloudinary.com/djgkryxou/image/upload/v1678234977/Portfolio/Pokemon_jkxrha.png" alt="Pokemon image"">
                  </div>
                </div>
              </li>
              <li class="project-element">
                <div class="project-element-content">
                  <p class="project-status">Desplegado ✅</p>
                  <h3 class="project-title">
                    <a href="https://portfolio-alejandro-luzuriaga.netlify.app/">Portfolio</a>
                  </h3>
                  <div class="project-description">
                    <p>
                      Portfolio personal.
                    </p>
                  </div>
                  <ul class="project-technologies">
                    <li>VS Code</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                  </ul>
                  <div class="project-links">
                    <a href="https://portfolio-alejandro-luzuriaga.netlify.app/">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                        width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                    </a>
                    <a href="https://portfolio-alejandro-luzuriaga.netlify.app/">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                        <line x1="10" y1="14" x2="20" y2="4" />
                        <polyline points="15 4 20 4 20 9" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="project-element-image">
                  <div class="project-element-image-container">
                    <img src="https://res.cloudinary.com/djgkryxou/image/upload/v1678234976/Portfolio/Portfolio_ztiuw2.png" alt="Portfolio">
                  </div>
                </div>
              </li>
              <li class="project-element">
                <div class="project-element-content">
                  <p class="project-status">Desplegado ✅</p>
                  <h3 class="project-title">
                    <a href="https://pic-of-the-day-alejandro-luzuriaga.netlify.app/">App NASA</a>
                  </h3>
                  <div class="project-description">
                    <p>
                      Foto del día usando dos API's de la NASA.
                    </p>
                  </div>
                  <ul class="project-technologies">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                  </ul>
                  <div class="project-links">
                    <a href="https://github.com/alejandroluzuriaga/Pic-Of-The-Day">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                        width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                    </a>
                    <a href="https://pic-of-the-day-alejandro-luzuriaga.netlify.app/">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                        <line x1="10" y1="14" x2="20" y2="4" />
                        <polyline points="15 4 20 4 20 9" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="project-element-image">
                  <div class="project-element-image-container">
                    <img src="https://res.cloudinary.com/djgkryxou/image/upload/v1679842115/Portfolio/Pic-Of-The-Day_xpmrji.png" alt="Pic-Of-The-Day-Project">
                  </div>
                </div>
              </li>
              <li class="project-element">
                <div class="project-element-content">
                  <p class="project-status"> Muy pronto 🚀</p>
                  <h3 class="project-title">
                    <a href="#">API Rest</a>
                  </h3>
                  <div class="project-description">
                    <p>
                      Servidor web completo REST. </br>
                    </p>
                  </div>
                  <ul class="project-technologies">
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                  </ul>
                  <div class="project-links">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                        width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                        <line x1="10" y1="14" x2="20" y2="4" />
                        <polyline points="15 4 20 4 20 9" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="project-element-image">
                  <div class="project-element-image-container">
                    <img src="https://res.cloudinary.com/djgkryxou/image/upload/v1678234976/Portfolio/EnConstruccion_nmlgfv.png" alt="En construccion">
                  </div>
                </div>
              </li>
            </ul>
          </section>
  `
}