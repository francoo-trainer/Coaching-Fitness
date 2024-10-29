//funciones anonimas auto ejecutables
// abre menu HAMBURGUESA y lo cierra
((d)=>{
const $btnmenu = d.querySelector(".menu-btn"),
$menu= d.querySelector(".menu");

$btnmenu.addEventListener("click", (e)=>{
    $menu.classList.toggle("is-active");
});
// desaparece el menu 
d.addEventListener("click", (e)=>{
   
    if(!e.target.matches(".menu a")) return false;
    $menu.classList.remove("is-active");
});
})(document);