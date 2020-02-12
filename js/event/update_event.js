import MouseEvent from "./mouse.js";
import * as cookies from "../misc/cookies.js";
import * as conversions from "../misc/conversions.js";
import * as constantes from "../misc/constantes.js";
import reDrawObjects from "../add_objects/redraw_objects.js";
import Rectangle from "../draw_objects/rectangle.js";
import Img_object from "../draw_objects/image.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let mouseEvent = new MouseEvent();
let object_temp = [];

export function mousemove_canvas(event){
     mouseEvent.setMouseMovement = {
          "X": event.movementX,
          "y": event.movementY
     };
     mouseEvent.setPos = [canvas, event];
}
export function mouseclick(){
     let back = mouseEvent.getclick;
     if(!back) mouseEvent.setClick = true;
     else mouseEvent.setClick = false;
}



let memory = document.getElementsByClassName("objects")[0].childNodes;

export function update_global(){

     let click = mouseEvent.getclick;

     /* push the news objects */
     for (let i = 0; i < memory.length; i++) {
          if(i === memory.length-1){mouseEvent.SetobjetCatched = i;}
          if(memory[i].id >= object_temp.length && memory[i].getAttribute("objet_genre") === "rectangle") {
               let object = new Rectangle();
               object.setId = memory[i].id;
               let size = JSON.stringify({"w": object.getDim.x, "h": object.getDim.y});
               memory[i].setAttribute("size", size);
               object_temp.push(object);
               object.draw(ctx);
          }
          else if (memory[i].id >= object_temp.length && memory[i].getAttribute("objet_genre") === "image") {
               let object = new Img_object();
               object.setId = memory[i].id;
               let size = JSON.stringify({"w": object.getDim.x, "h": object.getDim.y});
               memory[i].setAttribute("size", size);
               object.setImg = object.innerText;
               object_temp.push(object);
               object.draw(ctx, object.innerText);
          }
     }
     /* update mousecatch cookie*/
     cookies.setCookie("mouseCatch", mouseEvent.getObjetCatched, 10);

     /* refresh size */
     for (let i = 0; i < memory.length; i++) {
          if(parseInt(memory[i].id) === parseInt(mouseEvent.getObjetCatched)){
               let dim = JSON.parse(memory[i].getAttribute("size"));
               object_temp[i].setDim = [dim.w, dim.h];
               break;
          }
     }

     // get the object
     let mouseCatch = mouseEvent.getObjetCatched;
     let objet = false;
     for (let i = 0; i < object_temp.length; i++) {
               objet = object_temp[i];
               /* clic collision */
               let mousePos = mouseEvent.getPos;
               let objetPos = objet.getPos;
               let objetDim = objet.getDim;

               if(mousePos.x > objetPos.x && mousePos.x < objetPos.x + objetDim.x &&
                    mousePos.y > objetPos.y && mousePos.y < objetPos.y + objetDim.y &&
                    click && parseInt(objet.getId) === parseInt(mouseCatch)){
                         objet.setPos = [mousePos.x - (objetDim.x/2).toFixed(0), mousePos.y - (objetDim.y/2).toFixed(0)];
                         mouseEvent.SetobjetCatched = objet.getId;
               }
     }
     /* refresh */
     if(object_temp.length >= 0){
          ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
          reDrawObjects(ctx, object_temp);
     }

}
