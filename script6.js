$(document).ready(function () {
    $(".tournable:not(.quatrieme)").click(function () {
      $(this).toggleClass("tournee");
    });
  
    $(".couverture").click(function () {
      $(".livre").toggleClass("ouvert");
      $(".guide").toggleClass("cache");
    });
  
    $(".quatrieme").click(function () {
      $(".tournable:not(.quatrieme)").toggleClass("tournee");
    });
  });
  