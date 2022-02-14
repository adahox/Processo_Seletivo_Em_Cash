import IRetangle from "../Interfaces/IRentangle";
import Polygon from "./Polygon";

export default class Retangle extends Polygon implements IRetangle {

    width: number = 0;
    height: number = 0;

    getArea(): number {
        return this.width * this.height;
    }

}