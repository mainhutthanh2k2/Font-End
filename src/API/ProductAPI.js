import axios from "../axios.js";
import _ from "lodash";

const ProductAPI = {
    getProduct: async (conditionObj = {}) => {
        try {
            let conditionStr = ''

            if(!_.isEmpty(conditionObj)) {
                Object.keys(conditionObj).forEach(key => {
                    conditionStr += key + '=' + conditionObj[key]
                })
            }
            const res = await axios.get(`/product?${conditionStr}&limit=1`);
            if (res?.data?.status === 0) {
                return res.data?.data[0];
            }
            return {};
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    getProducts: async (conditionObj = {}) => {
        try {
            let conditionStr = ''

            if(!_.isEmpty(conditionObj)) {
                Object.keys(conditionObj).forEach(key => {
                    conditionStr += key + '=' + conditionObj[key]
                })
            }

            const res = await axios.get(`/product?${conditionStr}`);

            if (res?.data?.status === 0) {
                return res.data?.data;
            }

            return [];
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    
};

export default ProductAPI;
