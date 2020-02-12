import * as cookies from "../misc/cookies.js";
import * as constantes from "../misc/constantes.js";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

export function rectangle_add(){
     let memory = document.getElementsByClassName("objects")[0];
     let rectangle = document.createElement("input");
     rectangle.setAttribute("objet_genre", "rectangle");
     rectangle.id = memory.childNodes.length;
     rectangle.hidden = true;
     memory.appendChild(rectangle);
}

function upload_img(event){
     let compatible = false;
     let file = event.target.files[0];
     if(file.size < 5e+8 && file.type.match("image.*")) compatible = true;
     if(compatible){
          let reader = new FileReader();
          reader.onload = ()=>{

               let memory = document.getElementsByClassName("objects")[0];
               let img = document.createElement("input");
               img.setAttribute("objet_genre", "image");
               img.id = memory.childNodes.length;
               img.innerText = reader.result;
               img.hidden = true;
               memory.appendChild(img);

          }
          reader.readAsDataURL(file);
     }
     else {
          alert("Image trop lourde, max 500Mo")
     }
}

export function image_add(){
     let iFile = document.createElement("input");
     iFile.type = "file";
     iFile.addEventListener("change", upload_img, false);
     iFile.click();
}
