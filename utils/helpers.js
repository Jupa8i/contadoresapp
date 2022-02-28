export function applyFilter(contador, value) {

  console.log(contador, value)
  let filtros = ["nombre", "valor"]
  let val = false
  filtros.forEach((filtro) => {
    if (String(contador[filtro]).toUpperCase().indexOf(String(value).toUpperCase()) > -1) {
      val = true
    }
  })

  if (val) return true
}

export function applyOperator(a, b, op) {
  switch (op) {
    case ">":
      return a > b;
    case ">=":
      return a >= b;
    case "<":
      return a < b;
    case "<=":
      return a <= b;
    default:
      null;
  }
}

export function applyOrderBy(a, b, valor) {
  if (a[valor] < b[valor]) {
    return -1;
  }
  if (a[valor] > b[valor]) {
    return 1;
  }
  return 0;
}

export function getBoolean(valor, nombre) {
  if (valor == nombre) {
    return true;
  } else {
    return false;
  }
}

export function getOperador(value) {
  if (value) {
    return "desc";
  } else {
    return "asc";
  }
}

export function getValor(value) {
  if (value) {
    return "nombre";
  } else {
    return "valor";
  }
}

export function onlyNumber($event) {
  let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
  if (keyCode < 48 || keyCode > 57) { // && keyCode !== 46 / 46 es punto (.)
    $event.preventDefault();
  }
}

export function formatNumber(number) {
  number += ""
  var x = number.split(".")
  var x1 = x[0]
  var x2 = x.length > 1 ? "." + x[1] : ""
  var rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "." + "$2")
  }

  return x1 + x2
}
