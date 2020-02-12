import * as cookies from "../misc/cookies.js";
import * as conversions from "../misc/conversions.js";

export function size_obj_update(event){

     let memory = document.getElementsByClassName("objects")[0].childNodes;
     let mouseCatch = cookies.getCookie();
     let objCatched = "";
     for (var i = 0; i < mouseCatch.length; i++) {
          if(mouseCatch[i].name === "mouseCatch") objCatched = mouseCatch[i].value;
     }

     let size = event.target.value;
     let objToSize = objCatched;

     let encapsuled = {
          "w": conversions.pt(parseFloat(size.split(",")[0])),
          "h": conversions.pt(parseFloat(size.split(",")[1])),
          "id": objToSize
     };
     console.log(objToSize);

     for (let i = 0; i < memory.length; i++) {
          if(memory[i].id === objToSize) memory[i].setAttribute("size", JSON.stringify(encapsuled)); break;
     }
}
