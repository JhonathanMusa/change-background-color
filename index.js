const cambiarColor = () => {
  let color = document.getElementById("cambiar").value;
  document.body.style.background = color;
  if (color == "#fff" || color == "#eee" || color == "#aaa")
    document.body.style.color = "black";
  else {
    document.body.style.color = "white";
  }
};

let btnCambiar = document.getElementById("btn-cambiar");
btnCambiar.addEventListener("click", cambiarColor);
