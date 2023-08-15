var tasa = prompt("Ingrese tasa BCV del dia");
alert(`Tasa del dia definida en ${tasa}`)

var precio = document.getElementById("precio");
// var tasa = document.getElementById("tasa").value;
// tasa = tasadia;
var montos = [];

function calcPrice() {
  var totalbs = document.getElementById("totalbs");

  let total = precio.value * tasa;
  totalbs.value = total.toFixed(2);
}

function calcCambio() {
  var efectivo = document.getElementById("efectivo");
  var cambio = document.getElementById("cambio");
  let calcCambio =
    efectivo.value != "" ? efectivo.value - $("#totalapagarusd").val() : 0;
  17;

  cambio.value = calcCambio.toFixed(2);
}

function limpiarCampos() {
  $("#nombre").val("");
  $("#precio").val("");
  $("#totalbs").val("");
}

$("#agregar").click(function () {
  montos.push([$("#nombre").val(), $("#precio").val(), $("#totalbs").val()]);

  var mostrarMontos = montos.map(function (bar) {
    return (
      "<tr><td class='capitalize'>" +
      bar[0] +
      "</td><td>" +
      bar[1] +
      "</td><td> " +
      bar[2] +
      "</td></tr>"
    );
  });
  $(".montos").html(mostrarMontos);

  var sumaA = montos.reduce(function (sum, col) {
    return sum + parseFloat(col[1]);
  }, 0);
  var sumaB = montos.reduce(function (sum, col) {
    return sum + parseFloat(col[2]);
  }, 0);

  $("#totalapagarusd").val(sumaA.toFixed(2));
  $("#totalapagarbsd").val(sumaB.toFixed(2));

  $("#totales").css("display", "flex");
});

$("#ocultar-bcv").click(function () {
tasa = window.confirm(`La tasa definida es ${tasa}. Desea Cambiarla?`);
if (confirm) {
    prompt("Ingrese la nueva tasa (BCV)");
}else{
    alert(`Se mantiene la tasa en ${tasa}`)
}
});

$(document).bind("keypress", function (e) {
  if (e.keyCode == 13) {
    $("#agregar").trigger("click");
    limpiarCampos();
  }
});

$("#agregar").click(function () {
  limpiarCampos();
});

$("#reiniciar").click(function () {
  $(".montos").html("");
  $("totalbs").val("");
  $("#totales").css("display", "none");
  $("#totalapagarusd").val("");
  $("#totalapagarbsd").val("");
});
