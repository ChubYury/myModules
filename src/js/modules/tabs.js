//*** Single tab mode ******************************************************************************* */

function singleMode(clickItem) {
  const tabBlock = clickItem.parentElement;
  const tabsBlock = tabBlock.parentElement;
  const tabsList = [...tabsBlock.children];
  const isActiveTrue = tabBlock.classList.contains('is-active');
  
  if (isActiveTrue) {
    tabBlock.classList.toggle('is-active');
    return;
  }
  
  tabsList.forEach(tabItem => tabItem.classList.remove('is-active'));
  tabBlock.classList.add('is-active');
}

//*** Multi tab mode ********************************************************************************** */

function startMultiTab(tabsList) {
  tabsList.forEach(tabItem => {
    const nameMode = tabItem.dataset.tab;
    
    if (nameMode === 'single') return
    const triggersBlock = tabItem.parentElement;
    const trigersList = [...triggersBlock.children];
    const contentsList = [...triggersBlock.nextSibling.nextSibling.children];
    const firstTriggerBlock = trigersList[0];
    const firstContentBlock = contentsList[0];
    const activeTrigger = firstTriggerBlock.classList.contains('is-active');
    const activeContent = firstContentBlock.classList.contains('is-active');
    
    if (activeTrigger || activeContent) return
    firstTriggerBlock.classList.add('is-active');
    firstContentBlock.classList.add('is-active');
  });
};

function multiMode(clickItem) {
  const triggersBlock = clickItem.parentElement;
  const trigersList = [...triggersBlock.children];
  const contentsList = [...triggersBlock.nextSibling.nextSibling.children];
  const contentId = clickItem.dataset.id;
  const contentBlock = contentsList[Number(contentId)];

  trigersList.forEach(triggerItem => triggerItem.classList.remove('is-active'));
  contentsList.forEach(contentItem => contentItem.classList.remove('is-active'));

  clickItem.classList.add('is-active');
  contentBlock.classList.add('is-active');
};

//*** Initialization tabs ***************************************************************************** */

export function initTabs() {
  const tabsList = [...document.getElementsByClassName('js-tab')];
  if (tabsList.length === 0) return;
  
  startMultiTab(tabsList)
  tabsList.forEach(activeItem => {
    activeItem.addEventListener('click', e => {
      e.preventDefault();
      const nameMode = activeItem.dataset.tab;
      switch (nameMode) {
        case 'single':
          singleMode(activeItem);
          break;
        case 'combined':
          multiMode(activeItem);
          break;
        default:
          break;
      };
    });
  });
};