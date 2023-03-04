import './style.css'

const app = document.querySelector('#app');

app.innerHTML += 
`
<div class="layout">
<header class="header-container">
  <div class="header-wrap">
    <div class="header-logo">
      <a href="/home">
        <img src="./public/images/Logo-image.png" alt="Header_Portfolio_Logo">
      </a>
    </div>
    <nav class="header-optionWrapper">
      <ul class="header-optionButtons">
        <li class="nav-item" id="proyectos">
          <a class="nav-item-link" href="/projects">
            <p>01.</p> Proyectos
          </a>
        </li>
        <li class="nav-item" id="experiencia">
          <a class="nav-item-link" href="/experience">
            <p>02.</p> Experiencia
          </a>
        </li>
        <li class="nav-item" id="pag_principal">
          <a class="nav-item-link" href="/home">
            <p>03.</p> Home
          </a>
        </li>
      </ul>
    </nav>
    <div class="hamburger-container">
      <button class="hamburger-button header-button-active">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="50" height="50"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
      <button class="hamburger-button-close header-button-disabled">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="50" height="50"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  </div>

</header>
<div class="side-element-left">
  <ul class="social-media-sidebar">
    <li class="social-media-element">
      <a href="https://github.com/alejandroluzuriaga">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="30"
          height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
      </a>
    </li>
    <li class="social-media-element">
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
    </li>
    <li class="social-media-element">
      <a href="https://twitter.com/ErrorLuzuriaga">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="30"
          height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccd6f6" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
        </svg>
      </a>
    </li>
    <li class="social-media-element">
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
    </li>
  </ul>
</div>
<div class="side-element-right">
  <div class="email">
    <a href="mailto:luzuriagalejandro@gmail.com">luzuriagalejandro@gmail.com</a>
  </div>
</div>
<main>
  <section class="main-content">
    
  </section>
</main>
</div>
`

const listElements = document.querySelectorAll('.header-optionButtons');
listElements.forEach((element)=>{
  element.addEventListener('click', (ev)=>{
    ev.preventDefault();
    const linkHref = ev.target.href;
    const enlace = linkHref.split('/').pop();
  
    switch(enlace){
      case 'projects':
        // renderProjects()
        console.log('Renderizando Projects')
        break;
      case 'experience':
        // renderExperience()
        console.log('Renderizando experiencia')
        break;
      case 'home':
        console.log('Renderizando home')
        renderHome();
        break;
      default:
        console.log('No es posible renderizar el componente seleccionado ❌');
    }
  })
})

const renderHome = () =>{
  const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = ``;
    mainContent.innerHTML += `
      <section class="home">
    <h1>Hola, mi nombre es</h1>
    <h2 class="big-letters">Alejandro González Luzuriaga.</h2>
    <h3 class="big-letters">Soy un Full Stack Developer.</h3>
    <div class="social-media-mobile-and-tablet">
      <p> Desarrollador Full Stack y estudiante de ingeniería informática. </br>Enfocado en construir webs rápidas y sencillas de usar. 
      </br> Las tecnologías con las que he trabajado recientemente son: </p>
      <ul class="technologies">
        <li class="technologies-item">HTML</li>
        <li class="technologies-item">CSS</li>
        <li class="technologies-item">JavaScript</li>
        <li class="technologies-item">React</li>
      </ul>
      <div class="avatar-container">
        <img src="./public/images/Avatar.png" alt="Avatar Image" width="200px" height="200px">
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