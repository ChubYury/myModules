//*** Modal module ***
import { Fancybox } from "@fancyapps/ui";

//*** Carousel module
import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
// import '@fancyapps/ui/dist/carousel/carousel.css';

//*** Initial carousel ***
const container = document.getElementById("firstCarousel");
const options = {
  // Navigation: {
  //   prevTpl:
  //     '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5l-7 7 7 7"/><path d="M4 12h16"/></svg>',
  //   nextTpl:
  //     '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12h16"/><path d="M13 5l7 7-7 7"/></svg>',
  // },
  Navigation: {
    prevTpl: '<div class="red">Prev</div>',
    nextTpl: '<div class="red">Next</div>',
  },
  infinite: true,
  // Dots: false,
  center: false,
  slidesPerPage: 'auto',
  transition: false,
};
// new Carousel(container, options);
const firstCarousel = new Carousel(container, options);

export function initFancybox() {
  // Initial modal
  Fancybox.bind('[data-fancybox]', {});
  // initModal();

  // Initial carousel
  // firstCarousel;
}


/* This example for change form elements in fancybox ********************************* 

function isChecked(fancybox, slide) {
  const clickElement = slide.srcElement;
  const attrElement = clickElement.getAttribute('for') ? clickElement.getAttribute('for') : clickElement.parentElement.getAttribute('for');
  console.log(attrElement);
  if (!attrElement) return;
  const modalForm = fancybox.container.querySelector('form');
  const inpList = [...modalForm.querySelectorAll('[name="hand"]')];
  const activeInp = modalForm.querySelector(`#${attrElement}`);
  const inpType = activeInp.getAttribute("type");

  switch (inpType) {
    case 'radio':
      inpList.forEach(inp => inp.removeAttribute("checked"));
      activeInp.setAttribute("checked",'');
      console.log(inpType);
      break;
    case 'checkbox':
      // console.log(activeInp);
      break;
    default:
      break;
  }
}

function initModal() {
  // Fancybox.show([{ src: "#modal-form", type: "inline" }]);
  Fancybox.bind('[data-fancybox]', {
    on: {
      click: (fancybox, slide) => {
        isChecked(fancybox, slide)
      },
    },
  });
}

**********************************************************************************/

