export const companies = [
    {
        company: 'VML MAP',
        title: 'Developer',
        date: 'September 2023 - Present',
        description: 'Associate Developer',
        responsability1: "Managing and developing software for one of the world's largest companies.",
        responsability2: 'Continuous communication with client',
        responsability3: 'Maximized personalization in campaigns',
        img:'https://res.cloudinary.com/djgkryxou/image/upload/v1729421677/VML_Logo-modified_lrkmup.png',
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