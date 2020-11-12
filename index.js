const app = new Vue({
  el: "#app",
  data: {
    color: "",
  },
  methods: {
    changeBackground() {
      document.body.style.background = this.color;
      if (
        this.color == "black" ||
        this.color == "#000" ||
        this.color == "#333"
      ) {
        document.body.style.color = "#fff";
      } else {
        document.body.style.color = "#000";
      }
    },
  },
});

/* const cambiarColor = () => {
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
 */
