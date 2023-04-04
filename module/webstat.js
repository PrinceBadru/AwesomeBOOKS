export default class webstat {
  constructor(config) {
    webstat.webSections = config.webSections;
    webstat.defaultSection = webstat.webSections[config.defaultSection];
    webstat.getDomSections();
    webstat.getLinkElements();
    webstat.bindLinksToSections();

    webstat.changeSection(webstat.defaultSection);
  }

    static webSections = []

    static defaultSection = null

    static domElements = []

    static linkElements = []

    static getDomSections = () => {
      webstat.webSections.forEach((section) => {
        const myDomSection = document.getElementById(section);
        webstat.domElements.push(myDomSection);
      });
    }

    static getLinkElements = () => {
      webstat.webSections.forEach((section) => {
        const myLinkElement = document.getElementById(`${section}-link`);
        webstat.linkElements.push(myLinkElement);
      });
    }

    static hideAllSections = () => {
      webstat.domElements.forEach((section) => {
        section.classList.add('hidden');
      });
    }

    static bindLinksToSections = () => {
      webstat.linkElements.forEach((link, index) => {
        link.addEventListener('click', () => {
          webstat.hideAllSections();
          webstat.domElements[index].classList.remove('hidden');
        });
      });
    }

    static changeSection = (newSection) => {
      webstat.domElements.forEach((section) => {
        if (section.id === newSection) {
          webstat.hideAllSections();
          section.classList.remove('hidden');
        }
      });
    }
}
