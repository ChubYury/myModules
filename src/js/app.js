import * as flsFunctions from "./modules/webpTest.js"

import { setBodyClass } from "./modules/isMobile.js";
// import { scrollHandler } from "./modules/scrollHandler.js";
import { initHeadMenu } from "./modules/headMenu.js";
import { initTabs } from "./modules/tabs.js";

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  
  //--- My modules ------
  setBodyClass();                 // 1
  // scrollHandler();                // 2

  initHeadMenu();                 // 3  
  initTabs();                     // 4
})
