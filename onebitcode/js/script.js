// PreLoader !Util @v1.0
NioApp.Util.preLoader = function () {

    var $preloader = $('.preloader'),
      $spinner = $('.spinner');

    if ($preloader.exists()) {
      $body.addClass("page-loaded");
      $spinner.addClass("load-done");
      if (!$spinner.hasClass('spinner-alt')) {
        $spinner.fadeOut(300);
      }
      $preloader.delay(600).fadeOut(300);
    }
  };
  
  NioApp.components.winLoad.push(NioApp.Util.preLoader);