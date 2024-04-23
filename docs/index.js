const tabService = document.querySelector("#header-top-tab-service");
const tabContact = document.querySelector("#header-top-tab-contact");
const tabLocate = document.querySelector("#header-top-tab-locate");
const tabAbout = document.querySelector("#header-top-tab-about");
const headerTab = document.querySelector("#header-top-tabs");
const headerCon2 = document.querySelector("#header-con-2");
const sectionService = document.querySelector("#section-service");
const sectionContact = document.querySelector("#section-contact");
const sectionLocate = document.querySelector("#section-locate");
const sectionAbout = document.querySelector("#section-about");
const bodyCon = document.querySelector("#body-con");
const locateMap = document.querySelector("#locate-map");
const locateBtnMap = document.querySelector("#locate-btn-open-map");

let dataPositionTabsCon = headerTab.dataset.position;

const removeClasses = function (which) {
  const tabWhich = document.querySelector(`#${which}`);

  tabService.classList.remove("header-top-tabs-tabs-active");
  tabContact.classList.remove("header-top-tabs-tabs-active");
  tabLocate.classList.remove("header-top-tabs-tabs-active");
  tabAbout.classList.remove("header-top-tabs-tabs-active");
  tabService.classList.add("header-top-tabs-tabs");
  tabContact.classList.add("header-top-tabs-tabs");
  tabLocate.classList.add("header-top-tabs-tabs");
  tabAbout.classList.add("header-top-tabs-tabs");

  tabWhich.classList.remove("header-top-tabs-tabs");
  tabWhich.classList.add("header-top-tabs-tabs-active");
};

headerTab.addEventListener("click", (e) => {
  const tabsHeight = headerTab.offsetHeight;
  if (e.target.dataset.btn === "btn") {
    const sectionPosition = document.querySelector(
      `#${e.target.dataset.scrollto}`
    );
    const position = sectionPosition.offsetTop;
    window.scrollTo(0, position - tabsHeight);

    removeClasses(e.target.id);
  }
});

window.addEventListener("scroll", () => {
  const widthPort = document.documentElement.clientWidth;
  const finalWidthPort = document.documentElement.clientWidth - 286;
  // headerTab.style.width = `${finalWidthPort}px`;
  const headerHeight = headerCon2.offsetHeight;
  const tabsHeight = headerTab.offsetHeight;
  const position = headerTab.getBoundingClientRect();
  const positionHeader = headerCon2.getBoundingClientRect();
  dataPositionTabsCon = headerTab.dataset.position;
  if (dataPositionTabsCon === "norm") {
    if (position.top < 1) {
      headerTab.classList.add("header-top-tabs-fixed");
      headerTab.classList.remove("header-top-tabs");
      headerTab.dataset.position = "fixed";
      // headerTab.style.width = `${finalWidthPort}px`;
      bodyCon.style.paddingTop = tabsHeight + 32 + "px";
    }
  }
  if (dataPositionTabsCon === "fixed") {
    if (positionHeader.top > -headerHeight) {
      headerTab.classList.add("header-top-tabs");
      headerTab.classList.remove("header-top-tabs-fixed");
      headerTab.dataset.position = "norm";
      bodyCon.style.paddingTop = `32px`;
    }
  }

  const positionS = sectionService.getBoundingClientRect().top;
  const positionC = sectionContact.getBoundingClientRect().top;
  const positionL = sectionLocate.getBoundingClientRect().top;
  const positionA = sectionAbout.getBoundingClientRect().top;

  if (positionS - tabsHeight < 1) {
    removeClasses("header-top-tab-service");
  }
  if (positionC - tabsHeight < 1) {
    removeClasses("header-top-tab-contact");
  }
  if (positionL - tabsHeight < 1) {
    removeClasses("header-top-tab-locate");
  }
  if (positionA - tabsHeight < 1) {
    removeClasses("header-top-tab-about");
  }
});

bodyCon.addEventListener("click", (e) => {
  if (e.target.dataset.gowhere === "openMap") {
    window.open("https://maps.app.goo.gl/VXzFGFzNGnaCib7c7?g_st=ic");
  }
  if (e.target.dataset.gowhere === "openWhatsApp") {
    window.open("https://w.app/EscaneosAutoMundo");
  }
});
