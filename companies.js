export const companies = [
    {
        company: 'Apple',
        title: 'JavaScript Developer',
        date: 'Enero - Diciembre 2015',
        description: 'Desarrollador Junior',
        responsability1: 'Programar y probar código según las especificaciones del proyecto.',
        responsability2: 'Colaborar en el desarrollo y mantenimiento de aplicaciones y sistemas.',
        responsability3: 'Aprender y aplicar nuevas tecnologías y metodologías de desarrollo de software.',
        img: 'https://res.cloudinary.com/djgkryxou/image/upload/v1678283814/Portfolio/appleLogo_mzd4bo.png',
    },
    {
        company: 'Google',
        title: 'UI Designer',
        date: 'Febrero 2016 - Abril 2018',
        description: 'Diseñador Gráfico',
        responsability1: 'Crear diseños atractivos y funcionales para interfaces web y móviles.',
        responsability2: 'Colaborar con equipos de desarrolladores para implementar diseños.',
        responsability3: 'Probar y optimizar la usabilidad y accesibilidad de los diseños.',
        img:'https://res.cloudinary.com/djgkryxou/image/upload/v1678283277/Portfolio/googleLogo_hckhy8.png',
    },
    {
        company: 'Amazon',
        title: 'Web Developer',
        date: 'Septiembre 2018 - Agosto 2020',
        description: 'Desarrollador Full-stack',
        responsability1: 'Desarrollar y mantener la funcionalidad de aplicaciones web.',
        responsability2: 'Colaborar con equipos de diseño para implementar diseños y funcionalidades.',
        responsability3: 'Optimizar la escalabilidad y seguridad de las aplicaciones web.',
        img: 'https://res.cloudinary.com/djgkryxou/image/upload/v1678283002/Portfolio/amazonLogo_iwj9po.png',
      
    },
    {
        company: 'Meta',
        title: 'Front-end Engineer',
        date: 'Septiembre 2020 - Junio 2022',
        description: 'Desarrollador de Interfaces',
        responsability1: 'Implementar diseños de alta calidad para interfaces web y móviles.',
        responsability2: 'Colaborar con equipos de diseño y producto para definir requerimientos y funcionalidades.',
        responsability3: 'Optimizar la accesibilidad y rendimiento de las aplicaciones web.',
        img: 'https://res.cloudinary.com/djgkryxou/image/upload/v1678283313/Portfolio/metaLogo_uphqlc.png',
    },
    {
        company: 'IBM',
        title: 'Front-end Engineer',
        date: 'Septiembre 2022 - presente',
        description: 'Desarrollador Full-stack',
        responsability1: 'Desarrollar y mantener aplicaciones web y móviles utilizando tecnologías FullStack.',
        responsability2: 'Realizar pruebas y depuración de código para garantizar la calidad y el rendimiento.',
        responsability3: 'Colaborar con el equipo para planificar y diseñar nuevas funcionalidades y mejoras del sistema.',
        img: 'https://res.cloudinary.com/djgkryxou/image/upload/v1678283420/Portfolio/ibmLogo_sxo5yf.png',
    },
]

export const getCompanyTemplate = (compañia) =>{
    const compañiaObject = companies.filter(element => element.company == compañia);
    const compañiaData = compañiaObject[0];
    return `
     <li class="experience-element">
      <div class="experience-element-content">
        <h3 class="experience-title">
          <a href="#">${compañiaData.title}</a>
          <div class="experience-element-image">
            <div class="project-element-image-container">
              <img src="${compañiaData.img}" alt="${compañiaData.company}">
            </div>
          </div>
        </h3>
        <p class="experience-status">${compañiaData.date}</p>
        <div class="experience-description">
          <p>
          ${compañiaData.description}
          </p>
        </div>
        <ul class="experience-responsabilities">
          <li class="experience-responsabilities-element">${compañiaData.responsability1}</li>
          <li class="experience-responsabilities-element">${compañiaData.responsability2}</li>
          <li class="experience-responsabilities-element">${compañiaData.responsability3}</li>
        </ul>
      </div>
    </li>
    `
}