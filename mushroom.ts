class Mushroom {
    private _name: string;
    private _shape: string;
    private _color: string;
    private _poisonous: boolean;
    private _Hat:Hat;

    constructor(name: string, shape: string, color: string, poisonous: boolean , hat:Hat) {
      this._name = name;
      this._shape = shape;
      this._color = color;
      this._poisonous = poisonous;
      this._Hat = hat;
    }
  
    public identify(): void {
      console.log(`This is a ${this._name} mushroom, it is ${this._color} and has a ${this._shape} shape.`);
      if (this._poisonous) {
        console.log("Warning: this mushroom is poisonous!");
      } else {
        console.log("This mushroom is safe to eat.");
      }
    }
  
    // Getters
    get name(): string {
      return this._name;
    }
  
    get shape(): string {
      return this._shape;
    }
  
    get color(): string {
      return this._color;
    }
  
    get poisonous(): boolean {
      return this._poisonous;
    }
    get Hat():Hat{
        return this._Hat;
    }
    // Setters
    set name(name: string) {
      this._name = name;
    }
    set Hat(Hat:Hat){
        this.Hat = Hat;
    }
    set shape(shape: string) {
      this._shape = shape;
    }
  
    set color(color: string) {
      this._color = color;
    }
  
    set poisonous(poisonous: boolean) {
      this._poisonous = poisonous;
    }

  }
  
  class Hat{
    private _size : number;
    constructor(size:number){
        this._size = size;
    }
    get size():number{
        return this._size;
    }
    set size(size:number){
        this._size = size;
    }
  }
  class Foot{
    private _length:number;
    constructor(length:number){
        this._length = length;
    }
    set length(length:number){
        this._length = length;
    }
    get length():number{
        return this._length;
    }
  }

  class Chanterelle extends Mushroom {
    constructor(color: string, poisonous: boolean, hat:Hat) {
      super("Chanterelle", "funnel-shaped", color, poisonous,hat);
    }
  }
  
  class Morel extends Mushroom {
    constructor(color: string, poisonous: boolean, hat:Hat) {
      super("Morel", "honeycomb-shaped", color, poisonous,hat);
    }
  }
  
  class Amanita extends Mushroom {
    constructor(color: string, hat:Hat) {
      super("Amanita", "umbrella-shaped", color, true,hat);
    }
  }
  
  class Portobello extends Mushroom {
    constructor(poisonous: boolean, hat:Hat) {
      super("Portobello", "broad and flat", "brown", poisonous,hat);
    }
  }
  
  class Shitake extends Mushroom {
    constructor(poisonous: boolean, hat:Hat) {
      super("Shitake", "umbrella-shaped", "brown", poisonous,hat);
    }
  }

  class MushroomController{
    private _musrooms : Mushroom[];
    constructor(mushrooms:Mushroom[]){
        this._musrooms = mushrooms;
    }
    ToString(){
        this._musrooms.forEach(element => {
            console.log(element.identify());
        });
    }
    Biggest(){
        console.log(this._musrooms.sort((a,b)=>b.Hat.size - a.Hat.size)[0]);
    }
  }
  let mushrooms:Mushroom[] = [
    new Shitake(false,new Hat(1)),
    new Portobello(true,new Hat(2)),
    new Amanita('red',new Hat(3)),
    new Morel('green',true,new Hat(4)),
    new Chanterelle('yellow',false,new Hat(5)),
    new Morel('black',true,new Hat(6)),
    new Shitake(true,new Hat(9))
    ];
  let contr = new MushroomController(mushrooms);
  contr.Biggest();