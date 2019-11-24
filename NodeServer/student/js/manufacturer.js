$(document).ready(function() {
  const server = "http://localhost:8081/";
  $("body").on("click", "#getManufacturers", function() {
    $.get(server + "manufacturers", function(data) {})
      .done(function(data) {
        $("tr").remove();
        let table = $("#manufacturers");
        $.each(data, function(key, value) {
          let row = $("<tr></tr>");
          table.append(row);

          let name =
            '<td style="cursor:pointer; font-weight:bold" onclick="getCarsByManufacturer(' +
            "'" +
            value.name +
            "'" +
            ')">' +
            value.name +
            "</td>";
          let country = "<td>" + value.country + "</td>";
          let founded = "<td>" + value.founded + "</td>";

          row.append(name);
          row.append(country);
          row.append(founded);

          table.append(row);
        });
        console.log(data);
      })
      .fail(function() {
        console.log("Could not retrieve any data.");
      });
  }),
    $("body").on("submit", "#addManufacturerForm", function() {
      $.ajax({
        type: "POST",
        url: server + "addManufacturers",
        data: $("#addManufacturerForm").serialize(),
        success: function(data) {
          console.log("Manufacturer was added successfully.");
        }
      });
      return false;
    });
});
