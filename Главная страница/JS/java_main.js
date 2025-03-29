// автоматизация для отступа контейнера сверху (для исправления бага)
window.onload = function() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('.container').style.paddingTop = headerHeight + 14 + 'px' ;
  };
// window.onload -- после загрузки всей страницы