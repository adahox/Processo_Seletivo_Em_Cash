import ITriangle from "../Interfaces/ITriangle";
import Polygon from "./Polygon";

export default class Triangle extends Polygon implements ITriangle {
    
    sideA: number = 0;
    sideB: number = 0;
    sideC: number = 0;
    
    constructor() {
        super();
    }

    /**
     * Heron teorem
     * readmore: https://www.todamateria.com.br/area-do-triangulo/
     * @returns number triangle area
     */
    getArea(): number {
        let semi_perimeter = this.getSemiPerimeter();
        return  Math.sqrt(
            semi_perimeter * (semi_perimeter - this.sideA) * (semi_perimeter - this.sideB) * (semi_perimeter - this.sideC) 
        );
    }
 
    /**
     * semi perimeter value.
     * @returns number semiperimeter
     */
    getSemiPerimeter() {
        return (this.sideA + this.sideB + this.sideC) / 2;
    }

}