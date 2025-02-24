import * as flsFunctions from "./modules/webpTest.js"

import { setBodyClass } from "./modules/isMobile.js";
// import { scrollHandler } from "./modules/scrollHandler.js";
import { initHeadMenu } from "./modules/headMenu.js";
import { initTabs } from "./modules/tabs.js";
import { initFancybox } from "./modules/initFancybox.js";
import { initFormsHandler } from "./modules/formHandler.js";
import { initMap } from "./modules/mapConfig.js";

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  
  //--- Modal and gallery -----
  initFancybox();
  
  //--- My modules ------
  setBodyClass();                 // 1
  // scrollHandler();                // 2
  initHeadMenu();                 // 3  
  initTabs();                     // 4
  initFormsHandler();             // 5
  initMap(); 
})
