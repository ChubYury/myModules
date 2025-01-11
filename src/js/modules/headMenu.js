/*** The menu buttons in header *********************************
 *** Handlers a menu mobile button  
 */
function openMobailMenu(mobileMenuBtn) {
  const mainBody = document.body;
  const menuBody = mobileMenuBtn.nextSibling.nextSibling;
  
  if (!mobileMenuBtn) return
  mobileMenuBtn.addEventListener('click', e => {
    e.preventDefault()
    mainBody.classList.toggle('not-scroll');
    mobileMenuBtn.classList.toggle('is-active');
    menuBody.classList.toggle('is-open');
  })
};

//*** Handling menu arrows **********************************************/

function tabArrowsHandler(menuBody) {
  const arrowsList = [...menuBody.getElementsByClassName('js-head-menu-arrow')];
  
  if (arrowsList.length === 0) return;
  
  arrowsList.forEach(arrowItem => {
    arrowItem.addEventListener('click', e => {
      e.preventDefault();
      arrowItem.parentElement.classList.toggle('is-open');
    });
  });
};

//*** Handling menu links ********************************************/

function onMenuLinkClick (link, headerMenuBody) {
  const mainBody = document.body;
  const [headerBody] = document.getElementsByClassName('header-wrap');
  const menuBtn = headerMenuBody.firstChild.nextSibling;
  const isActiveMenuBtn = menuBtn.classList.contains('is-active');
  const menuBody = menuBtn.nextSibling.nextSibling;
  const linkURL = link.dataset.goto
  const gotoBlock = linkURL ? document.getElementById(linkURL) : false;
  
  if (!gotoBlock) return;
  const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - headerBody.offsetHeight;
  
  window.scrollTo({
    top: gotoBlockValue,
    behavior: "smooth"
  })

  if (!isActiveMenuBtn) return;
  mainBody.classList.remove('not-scroll');
  menuBtn.classList.remove('is-active');
  menuBody.classList.remove('is-open');
}

function menuLinksHandler(headerMenuBody) {
  const linksList = [...headerMenuBody.querySelectorAll('[data-goto]')];
  
  if (linksList.length === 0) return;
  linksList.forEach(link => link.addEventListener('click', e => {
    e.preventDefault();
    onMenuLinkClick(link, headerMenuBody)
  }));
};

//*** Start menu ****************************************************/

export function initHeadMenu() {
  const isMobile = document.body.classList.contains('_touch') ? true : false;
  const [headerMenuBody] = document.getElementsByClassName('js-head-menu');
  const [mobileMenuBtn] = headerMenuBody.getElementsByClassName('js-heade-menu-btn');
  
  if (isMobile) tabArrowsHandler(headerMenuBody);
  // else console.log('this pc');
  
  openMobailMenu(mobileMenuBtn);
  menuLinksHandler(headerMenuBody);
};