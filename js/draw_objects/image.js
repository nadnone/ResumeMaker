export default class Img_object {
     constructor(context){
          this.x = 0;
          this.y = 0;
          this.w = 50;
          this.h = 12.5;
          this.context = context;
          this.img = "";
          this.id = 0;
          this.type = "image";
     }
     clear(context){
          context.clearRect(0,0, window.innerWidth, window.innerHeight);
     }
     draw(context){
          let base_image = new Image();
          base_image.src = this.img;
          base_image.onload = ()=>{
               context.drawImage(base_image, this.x, this.y, this.w, this.h);
          }
     }
     set setPos([nx, ny]){
          this.x = nx;
          this.y = ny;
     }
     set setDim([nw, nh]){
          this.w = nw;
          this.h = nh;
     }
     set setId(id){
          this.id = id;
     }
     update(){
          this.draw(this.context);
     }
     set setImg(nimg){
          this.img = nimg;
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
          return this.img;
     }
     get getId(){
          return this.id;
     }
}
