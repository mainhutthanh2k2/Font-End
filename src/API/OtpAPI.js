import axios from "../axios.js";

const OtpAPI = {
    sendOTP: async (email) => {
        try {
            const res = await axios.get(`/send-email?email=${email}`);

            if (res.status === 0) {
                return true;
            }

            return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    verifyOTP: async (otp) => {
        try {
            const res = await axios.get(`/verify-otp?otp=${otp}`);

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

export default OtpAPI;
