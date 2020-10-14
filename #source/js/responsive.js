$(window).resize(function (event) {
   adaptiveFunction();
});

function adaptiveHeader(w, h) {
   let headerMenu = $('.header-menu');
   let headerLang = $('.header-top-lang');
   if (w < 767) {
      if (!headerLang.hasClass('done')) {
         headerLang.addClass('done').appendTo(headerMenu);
      }
   }
}

function adaptiveFunction() {
   let w = $(window).outerWidth();
   let h = $(window).outerHeight();
   adaptiveHeader(w, h);
}

adaptiveFunction();