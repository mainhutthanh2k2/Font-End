import axios from "../axios.js";

const CustomerAPI = {
    getOneUser: async (email) => {
        try {
            const res = await axios.get(`/user?email=${email}&limit=1`);

            if (res.status === 0) {
                return res.data;
            }

            return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    checkUserExists: async (email) => {
        try {
            const res = await axios.get(`/check-user-exists?email=${email}`);

            if (res.status === 0) {
                return true;
            }

            return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
};

export default CustomerAPI;
