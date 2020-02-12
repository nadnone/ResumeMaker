import Rectangle from "../draw_objects/rectangle.js";
import Img_object from "../draw_objects/image.js";


export default function reDrawObjects(ctx, object_temp){
     for (let i = 0; i < object_temp.length; i++) {
          object_temp[i].update(ctx);
     }
}
