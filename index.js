const cambiarColor = () => {
  let color = document.getElementById("cambiar").value;
  document.body.style.background = color;
  if (color == "black" || color == "#000" || color == "#333")
    document.body.style.color = "white";
  else {
    document.body.style.color = "black";
  }
};

let btnCambiar = document.getElementById("btn-cambiar");
btnCambiar.addEventListener("click", cambiarColor);
