$(window).resize(function (event) {
   adaptiveFunction();
});

function adaptiveHeader(w, h) {
   let headerMenu = $('.header-menu');
   let headerLang = $('.header-top-lang');
   if (w <= 750) {
      if (!headerLang.hasClass('done')) {
         headerLang.addClass('done').appendTo(headerMenu);
      }
   } else if (headerLang.hasClass('done')) {
      headerLang.removeClass('done').prependTo($('.header-top'));
   }

   if (w <= 750) {
      if (!$('.header-bottom-menu').hasClass('done')) {
         $('.header-bottom-menu').addClass('done').appendTo(headerMenu);
      }
   } else {
      $.each($('.header-bottom-menu'), function (index, val) {
         if ($(this).hasClass('header-bottom-menu--right')) {
            if ($(this).hasClass('done')) {
               $(this).removeClass('done').prependTo($('.header-bottom-column').eq(2));
            }
         } else {
            if ($(this).hasClass('done')) {
               $(this).removeClass('done').prependTo($('.header-bottom-column').eq(0));
            }
         }
      });
   }
}

function adaptiveFunction() {
   let w = $(window).outerWidth();
   let h = $(window).outerHeight();
   adaptiveHeader(w, h);
}

adaptiveFunction();

// Вызов меню бургер
$('.header-menu__icon').click(function (event) {
   $(this).toggleClass('active');
   $('.header-menu').toggleClass('active');
   if ($(this).hasClass('active')) {
      $('body').data('scroll', $(window).scrollTop());
   }
   $('body').toggleClass('lock');
   if (!$(this).hasClass('active')) {
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
   }
});