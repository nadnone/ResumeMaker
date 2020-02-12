export default class MouseEvent{
     constructor() {
          this.x = 0;
          this.y = 0;
          this.click = false;
          this.mouseMovement = {
               x: 0,
               y: 0
          };
          this.objetCatched = 0;
     }
     set SetobjetCatched(objetId){
          this.objetCatched = objetId;
     }
     set setMouseMovement(movement){
          this.mouseMovement = movement;
     }
     set setClick(click){
          this.click = click;
     }
     set setPos([canvas, e]){
          let rect = canvas.getBoundingClientRect();
          let canvaScale = {
               x: canvas.width / rect.width,
               y: canvas.height / rect.height
          };

          this.x = (e.clientX - rect.left) * canvaScale.x;
          this.y = (e.clientY - rect.top) * canvaScale.y;
     }
     get getCanvasPos(){
          return {
               x: this.x,
               y: this.y
          };
     }
     get getclick(){
          return this.click;
     }
     get getMouseMovement(){
          return this.mouseMovement;
     }
     get getObjetCatched(){
          return this.objetCatched;
     }
     get getPos(){
          return {
               "x": this.x,
               "y": this.y
          }
     }

}
