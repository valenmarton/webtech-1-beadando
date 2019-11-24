$(document).ready(function() {
  let footer = "footer.html";
  let header = "header.html";
  let home_content = "landing_page.html";
  $(".header").load(header);
  $(".content").load(home_content);
  $(".footer").load(footer);
});
