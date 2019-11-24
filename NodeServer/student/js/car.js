$(document).ready(function() {
  const server = "http://localhost:8081/";
  $("body").on("click", "#getCars", function() {
    $.get(server + "cars", function(data) {})
      .done(function(data) {
        $("tr").remove();
        let table = $("#cars");
        $.each(data, function(key, value) {
          let row = $("<tr></tr>");
          table.append(row);
          let name = "<td>" + value.name + "</td>";
          let consumption = "<td>" + value.consumption + "</td>";
          let color = "<td>" + value.color + "</td>";
          let manufacturer = "<td>" + value.manufacturer + "</td>";
          let year = "<td>" + value.year + "</td>";
          let available = "<td>" + value.available + "</td>";
          let horsepower = "<td>" + value.horsepower + "</td>";

          row.append(name);
          row.append(consumption);
          row.append(color);
          row.append(manufacturer);
          row.append(year);
          row.append(available);
          row.append(horsepower);

          table.append(row);
        });
        console.log(data);
      })
      .fail(function() {
        console.log("Could not retrieve any data.");
      });
  }),
    $("body").on("submit", "#addCarForm", function() {
      $.ajax({
        type: "POST",
        url: server + "addCar",
        data: $("#addCarForm").serialize(),
        success: function(data) {
          console.log("Car was added successfully.");
        }
      });
      return false;
    });
});

function getCarsByManufacturer(manufacturer) {
  document.cookie = "name=" + manufacturer;
  $.getJSON("manufacturer", function(data) {
    $("tr").remove();
    let table = $("#carsByManufacturer");

    $.each(data, function(key, value) {
      let row = $("<tr></tr>");
      let name = "<td>" + value.name + "</td>";
      let consumption = "<td>" + value.consumption + "</td>";
      let color = "<td>" + value.color + "</td>";
      let manufacturer = "<td>" + value.manufacturer + "</td>";
      let year = "<td>" + value.year + "</td>";
      let available = "<td>" + value.available + "</td>";
      let horsepower = "<td>" + value.horsepower + "</td>";

      row.append(name);
      row.append(consumption);
      row.append(color);
      row.append(manufacturer);
      row.append(year);
      row.append(available);
      row.append(horsepower);

      table.append(row);
    });
  });
}
