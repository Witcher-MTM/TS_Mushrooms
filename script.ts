class Figure{
    private name:string;
    private color:string;
    constructor(name:string,color:string){
        this.name = name;
        this.color = color;
    }
    setName(name:string) : void{
        this.name = name;
    }
    getName() : string{
        return this.name;
    }
    setColor(color:string) : void{
        this.color = color;
    }
    getColor() : string{
        return this.color;
    }
    
    toString(){
        return `Name - ${this.getName()}\nColor - ${this.getColor()}`;
    }
}

class Circle extends Figure{
    private radius:number;
    private diametr:number;
    constructor(name:string,color:string,radius:number){
        super(name,color);
        this.radius = radius;
        this.diametr = radius*2;
    }
    setRadius(radius:number) : void{
        this.radius = radius;
        this.diametr = radius*2;
    }
    getRadius() : number{
        return this.radius;
    }
    setDiametr(diametr:number) : void{
        this.diametr = diametr;
        this.radius = diametr/2;
    }
    getDiametr() : number{
        return this.diametr;
    }
    toString(): string {
        return `${super.toString()}\nRadius - ${this.getRadius()}\nDiametr - ${this.getDiametr()}`;
    }

}
class Square extends Figure{
    private sizeSide : number;
    constructor(name:string,color:string , sizeSide:number){
        super(name,color);
        this.sizeSide = sizeSide;
    }
    setSizeSide(sizeSide:number):void{
        this.sizeSide = sizeSide;
    }
    getSizeSide():number{
        return this.sizeSide;
    }
    toString(): string {
        return `${super.toString()}\nSizeSide - ${this.getSizeSide()}`;
    }
}