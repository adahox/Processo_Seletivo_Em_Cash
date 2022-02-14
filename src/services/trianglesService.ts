import Triangle from '../Polygon/Triangle';
import axios from './api';

export default class TrianglesService {
   
    /**
     * register new triangle on database
     * @param obj triangle object to be registered on database
     * @returns {string | JSON } 
     */
    async create(obj: any) {
        return await axios.post('/triangulos', obj);
    }
}