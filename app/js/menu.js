/*
 * Top Menu
 */

 (function (window, document) {

  const menu         = document.getElementById('menu-element-js');
  const menuCont     = document.getElementById('menu-container-js');
  const menuBtn      = document.getElementById('menu-toggle-js');
  let isOpen         = document.getElementById('menu-toggle-checkbox').checked;
  let screenWidth    =    window.innerWidth
                        || document.documentElement.clientWidth
                        || document.body.clientWidth;

  function closeMenu() {
    menuCont.classList.remove('menu-animation');
    isOpen = false;
  };

  function openMenu() {
    menuCont.classList.add('menu-animation');
    isOpen = true;
  };

  function isDesktop() {
   return screenWidth >= 1024;
  };

  function toggleMenuBg() {
    if ($(window).scrollTop() > 50 && isDesktop()) {
        $('.menu-main-container').addClass('highligthed-menu');
    } else {
        $('.menu-main-container').removeClass('highligthed-menu');
    };
  };

  menuBtn.addEventListener('click', function(event){
    if(isOpen) {
      closeMenu();
    } else {
      openMenu();
    };
  });

  //Listeners
  window.addEventListener('resize', function(event){
    closeMenu();
  });

  $(window).bind('scroll', function () {
    toggleMenuBg();
  });

}(window, document));
