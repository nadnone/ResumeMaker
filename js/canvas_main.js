import * as init_func from "./init_toolkit.js";
import * as init_event from "./event/update_event.js";
import * as constantes from "./misc/constantes.js";
function init(){
     init_func.init_img();
     init_func.init_rect();
     init_func.init_obj_size();

     setInterval(init_event.update_global, 1000/constantes.FPS);
     canvas.addEventListener("mousemove", init_event.mousemove_canvas, false);
     canvas.addEventListener("click", init_event.mouseclick, false);

}
init();
