function isWhole(num) {return num % 1 === 0 ? true : false};

export function scrollHandler() {
  let oldScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (!isWhole(window.scrollY)) return;
    
    if (window.scrollY > oldScrollY) {/*** The code run when scroll down */}
    else if (window.scrollY < oldScrollY) {/*** The code run when scroll up */};
    
    //*** The code run when scroll
    oldScrollY = window.scrollY;
  });
};
