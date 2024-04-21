const tabService = document.querySelector("#header-top-tab-service");
const tabContact = document.querySelector("#header-top-tab-contact");
const tabLocate = document.querySelector("#header-top-tab-locate");
const tabAbout = document.querySelector("#header-top-tab-about");
const headerTab = document.querySelector("#header-top-tabs");
const sectionService = document.querySelector("#section-service");
const sectionContact = document.querySelector("#section-contact");
const sectionLocate = document.querySelector("#section-locate");
const sectionAbout = document.querySelector("#section-about");

headerTab.addEventListener("click", (e) => {
  const sectionPosition = document.querySelector(
    `#${e.target.dataset.scrollto}`
  );
  const position = sectionPosition.offsetTop;
  window.scrollTo(0, position);
});
