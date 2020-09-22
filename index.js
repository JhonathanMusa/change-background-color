const cambiarColor = () => {
  let color = document.getElementById("cambiar").value;
  document.body.style.background = color;
};

let btnCambiar = document.getElementById("btn-cambiar");
btnCambiar.addEventListener("click", cambiarColor);
