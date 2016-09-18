//CSS Global Compulsory
require("../assets/plugins/bootstrap/css/bootstrap.min.css");
require("../assets/css/app.css");
require("../assets/css/blocks.css");
require("../assets/css/one.style.css");

//CSS Implementing Plugins
require("../assets/plugins/animate.css");
require("../assets/plugins/line-icons/line-icons.css");
require("../assets/plugins/font-awesome/css/font-awesome.min.css");
require("../assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css");
require("../assets/plugins/owl-carousel2/assets/owl.carousel.css");
require("../assets/plugins/master-slider/masterslider/style/masterslider.css");
require("../assets/plugins/master-slider/u-styles/testimonials-1.css");

// REVOLUTION STYLE SHEETS -->
require("../assets/plugins/revolution-slider/revolution/css/settings.css");
// REVOLUTION LAYERS STYLES -->
require("../assets/plugins/revolution-slider/revolution/css/layers.css");
// REVOLUTION NAVIGATION STYLES -->
require("../assets/plugins/revolution-slider/revolution/css/navigation.css");

// CSS Theme -->
require("../assets/css/index/lawyer.style.css");

// CSS Customization -->
require("../assets/css/index/custom.css");

// JS Global Compulsory -->
require("../assets/plugins/jquery/jquery.min.js");
require("../assets/plugins/jquery/jquery-migrate.min.js");
require("../assets/plugins/bootstrap/js/bootstrap.min.js");

// JS Implementing Plugins -->
require("../assets/plugins/smoothScroll.js");
require("../assets/plugins/jquery.easing.min.js");
require("../assets/plugins/owl-carousel2/owl.carousel.min.js");
//require("https://maps.googleapis.com/maps/api/js?signed_in=true&amp;callback=initMap" async defer);
//require("../assets/js/page//plugins/gmaps-ini.js");

require("../assets/plugins/master-slider/masterslider/masterslider.min.js");

require("../assets/plugins/revolution-slider/revolution/js/jquery.themepunch.tools.min.js");
require("../assets/plugins/revolution-slider/revolution/js/jquery.themepunch.revolution.min.js");

// SLIDER REVOLUTION 5.0 EXTENSIONS (Load Extensions only on Local File Systems! The following part can be removed on Server for On Demand Loading) -->
require("../assets/plugins/revolution-slider/revolution/js/extensions/revolution.extension.actions.min.js");
require("../assets/plugins/revolution-slider/revolution/js/extensions/revolution.extension.carousel.min.js");
require("../assets/plugins/revolution-slider/revolution/js/extensions/revolution.extension.kenburn.min.js");
require("../assets/plugins/revolution-slider/revolution/js/extensions/revolution.extension.layeranimation.min.js");
require("../assets/plugins/revolution-slider/revolution/js/extensions/revolution.extension.migration.min.js");
require("../assets/plugins/revolution-slider/revolution/js/extensions/revolution.extension.navigation.min.js");
require("../assets/plugins/revolution-slider/revolution/js/extensions/revolution.extension.parallax.min.js");
require("../assets/plugins/revolution-slider/revolution/js/extensions/revolution.extension.slideanims.min.js");
require("../assets/plugins/revolution-slider/revolution/js/extensions/revolution.extension.video.min.js");

// JS Page Level 插件的配置文件-->
require("../one.app.js");
require("./plugins/owl-carousel2.js");
require("./plugins/promo.js");
require("./plugins/testimonials.js");


//增加事件
$(function() {
  App.init();
  OwlCarousel.initOwlCarousel();
});
