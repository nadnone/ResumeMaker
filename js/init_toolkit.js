import * as add_objects_func from "./add_objects/objects.js";
import * as toolkit_event from "./event/toolkit_event.js";

let toolkit = document.getElementsByClassName("toolkit")[0];

export function init_rect(){
     let rect_create_btn = document.createElement("button");
     rect_create_btn.innerText = "Réctangle";
     rect_create_btn.onclick = add_objects_func.rectangle_add;
     toolkit.getElementsByClassName("floor0")[0].appendChild(rect_create_btn);
}
export function init_img(){
     let img_create_btn = document.createElement("button");
     img_create_btn.innerText = "Image";
     img_create_btn.onclick = add_objects_func.image_add;
     toolkit.getElementsByClassName("floor0")[0].appendChild(img_create_btn);
}

export function init_obj_size(){
     let objSize_create_textbox = document.createElement("input");
     objSize_create_textbox.type = "text";
     objSize_create_textbox.id = "size_obj_input";
     objSize_create_textbox.onchange = toolkit_event.size_obj_update;
     toolkit.getElementsByClassName("floor1")[0].appendChild(objSize_create_textbox);
}
