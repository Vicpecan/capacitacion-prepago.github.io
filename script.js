//Ejecutar función en el evento click
document.getElementById("btn_open"). addEventListener("click", open_close_menu);
//Declaramos las variables

var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menu

    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }
//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
});

// Obtén todas las opciones del menú
var opciones = document.querySelectorAll('.options__menu a');

// Agrega un event listener a cada opción
opciones.forEach(function(opcion) {
  opcion.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que se ejecute la acción predeterminada del enlace

    // Verifica si la opción ya tiene la clase "selected"
    var isSelected = this.classList.contains('selected');

    // Si la opción no está seleccionada
    if (!isSelected) {
      // Elimina la clase "selected" de todas las opciones
      opciones.forEach(function(opcion) {
        opcion.classList.remove('selected');
      });

      // Agrega la clase "selected" a la opción seleccionada
      this.classList.add('selected');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("a[href^='#']");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function(e) {
        e.preventDefault();
        var target = this.getAttribute("href");
        var targetElement = document.querySelector(target);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      });
    }
  });
  