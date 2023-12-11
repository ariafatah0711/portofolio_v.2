const sectionArticleLanguage = document.querySelector(".article-language div");
const sectionProject = document.getElementById("project");
let articleLanguageHTML = "";
let projectHTML;

const showSection = {
  showProfil: () => {
    skills.forEach((skill) => {
      articleLanguageHTML += `
            <img alt="${skill.alt}" src="${skill.src}">
          `;
    });
  },
  showProject: (nav, tittle, count = 0) => {
    projectHTML = `
      <a href="${nav}">
      <h2>${tittle}</h2> <i class="fa-solid fa-arrow-right"></i>
      </a>
    `;
    if (count == 0) {
      projects.forEach((project) => {
        projectHTML += `
            <a href="${project.src.href}" class="card">
                <div class="card-image">
                    <img alt="image-project" src="${project.src.image}">
                </div>
                <div class="card-text">
                    <h1>${project.date}</h1>
                    <h2>${project.tittle}</h2>
                    <p>
                        ${project.description}
                    </p>
                </div>
            </a>
        `;
      });
    } else {
      for (let i = 0; i < count; i++) {
        projectHTML += `
        <a href="${projects[i].src.href}" class="card">
            <div class="card-image">
                <img alt="image-project" src="${projects[i].src.image}">
            </div>
            <div class="card-text">
                <h1>${projects[i].date}</h1>
                <h2>${projects[i].tittle}</h2>
                <p>
                    ${projects[i].description}
                </p>
            </div>
        </a>
    `;
      }
    }
  },
};
