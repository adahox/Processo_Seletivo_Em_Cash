import axios from './api';
import { ToastAndroid } from 'react-native';
export default class RetangleService {

    /**
     * register new retangle on database
     * @param obj retangle object to be registered on database
     * @returns {string | JSON } 
     */
    async create(obj: any) {
        
        let RETURN_MSG = "";
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const { data } = await axios.post('/retangulos', obj, {
                headers: headers
            });
            RETURN_MSG = data;
            
            return data;
        } catch(e: any) {
            RETURN_MSG = e.response.data;
        }

        ToastAndroid.showWithGravityAndOffset(RETURN_MSG, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    }
}