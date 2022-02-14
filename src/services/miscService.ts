import Triangle from '../Polygon/Triangle';
import axios from './api';
export default class MiscService {
   

    /**
     * retrieve the sum of total area registered.
     * @returns {float} total area registered
     */
    async getTotalArea() {
        return await axios.get('/areatotal');
    }

}