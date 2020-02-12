export default class Rectangle {
     constructor(context){
          this.x = 0;
          this.y = 0;
          this.w = 50;
          this.h = 12.5;
          this.context = context;
          this.color = "Black";
          this.id = 0;
          this.type = "rectangle";

     }
     clear(context){
          context.clearRect(0,0, window.innerWidth, window.innerHeight);
     }
     draw(context){
          context.fillStyle = this.color;
          context.fillRect(this.x, this.y, this.w, this.h);
     }
     set setPos([nx, ny]){
          this.x = nx;
          this.y = ny;
     }
     set setDim([nw, nh]){
          this.w = nw;
          this.h = nh;
     }
     set setId(nid){
          this.id = nid;
     }
     update(context){
          this.draw(context);
     }
     set setColor(ncolor){
          this.color = ncolor;
     }
     get getPos(){
          return {
               x: this.x,
               y: this.y
          };
     }
     get getDim(){
          return {
               x: this.w,
               y: this.h
          };
     }
     get getColor(){
          return this.color;
     }
     get getId(){
          return this.id;
     }
}
