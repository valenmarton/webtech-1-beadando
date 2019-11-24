import { appRoutes } from "./routes.js";

$(document).ready(function() {
  $("body").on("click", "a#home_btn", function() {
    $(".content").load(appRoutes.home);
  });

  $("body").on("click", "#manufacturers_btn", function() {
    $(".content").load(appRoutes.manufacturers);
  });

  $("body").on("click", "#cars_btn", function() {
    $(".content").load(appRoutes.cars);
  });

  $("body").on("click", "#logout_btn", function() {
    window.location.href = appRoutes.logout;
  });
});
