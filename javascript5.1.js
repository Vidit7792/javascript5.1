class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
        calcArea(){
            return this.width*this.height;
        }

    }
    let rect = new Rectangle(4,5);
    console.log(rect.width);
    console.log(rect.height);
    console.log(rect.calcArea());
    console.log(rect);
