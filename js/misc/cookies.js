export function setCookie(name, value, timeout){
     let d = new Date();
     d.setTime(d.getTime() + (timeout*100));
     document.cookie = name + "=" + value.toString() + "; expires=" + d.toUTCString() + ";path=/;";
}
export function getCookie(name){

     let cookies = document.cookie.toString().split(";");
     let cookiesArray = [];
     for (let i = 0; i < cookies.length; i++) {
          let obj = {
               "name": cookies[i].split("=")[0],
               "value": cookies[i].split("=")[1]
          };
          cookiesArray.push(obj);
     }

     if(name === undefined) return cookiesArray;
     else {
          for (let i = 0; i < cookiesArray.length; i++) {
               if(cookiesArray[i].name === name) return cookiesArray[i];
               else return false;
          }
     }
}
