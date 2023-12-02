import axios from "../axios.js";

const CustomerAPI = {
    getOneUser: async (email) => {
        try {
            const res = await axios.get(`/user?email=${email}`);

            if (res.status === 0) {
                return res.data;
            }

            return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
};

export default CustomerAPI;
