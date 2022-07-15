//class Quark {
    //constructor (color,flavor){
       // this.color = color;
       // this.flavor = flavor;
       // this.baryon_number = 1/3;
    //}
   // interact(quark){
        //const quarkColor = quark.color;
        //quark.setColor(this.color)
        //this.color = quarkColor
   // }
    //setColor (color){
        //this.color = color
   // }
//}

class Quark {
    constructor (color,flavor){
        Object.assign(this,{color,flavor,baryon_number:1/3});
    }
    interact (quark){
        [this.color,quark.color] = [quark.color,this.color]
    }
}

