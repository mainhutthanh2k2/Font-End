import { useState } from "react";
import OtpInput from "react-otp-input";
import { Button, Modal, Form } from "react-bootstrap";
import { OtpAPI, CustomerAPI } from "~/API";

import img_login from "../../asset/imgs/img-login.png";
import img_otp from "../../asset/imgs/img-otp.png";
import "./LoginModal.scss";

function LoginModal(props) {
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [modalStage, setModalStage] = useState("modalEmail");

    const { showModal, handleCloseModal } = props;

    const modalStages = ["modalEmail", "modalOTP", "modalUserInfo"];

    const modalContent = {
        modalEmail: (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng Nhập Hoặc Tạo Tài Khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="img" style={{ backgroundImage: `url(${img_login})` }}></div>
                    <p className="text-center" style={{ padding: "0 100px" }}>
                        Nhập email mua hàng để hưởng đặc quyền riêng tại FPT Shop
                    </p>
                    <Form.Control
                        type="email"
                        className="input_txt"
                        placeholder="Nhập email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: "center" }}>
                    <Button
                        variant="danger"
                        onClick={async () => {
                            if (handleValidateEmail(email)) {
                                OtpAPI.sendOTP(email) && handleSwitchModal(modalStages[1]);
                            }
                        }}
                    >
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </>
        ),
        modalOTP: (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Xác Thực OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="img" style={{ backgroundImage: `url(${img_otp})` }}></div>
                    <p className="text-center">Mã OTP đã được gửi đến số điện thoại {email || -1}</p>
                    <span className="text_special" onClick={() => setModalStage(modalStages[0])}>
                        <i className="fa-regular fa-pen-to-square"></i>
                        Đổi số điện thoại nhận mã
                    </span>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => <input {...props} />}
                        containerStyle={"container_modal"}
                        inputStyle={"otp_input"}
                    />
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: "center" }}>
                    <Button
                        variant="danger"
                        onClick={() => {
                            if (handleConfirmOTP()) handleSignInOrSignUp();
                        }}
                    >
                        Xác nhận
                    </Button>
                    <span className="text_special" onClick={() => OtpAPI.sendOTP(email)}>
                        Gửi lại mã OTP cho tôi
                    </span>
                </Modal.Footer>
            </>
        ),
        modalUserInfo: (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin khách hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer style={{ justifyContent: "center" }}>
                    <Button variant="danger" onClick={handleCloseModal}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </>
        ),
    };

    const handleSwitchModal = (stage) => {
        setModalStage(stage);
    };

    const handleConfirmOTP = () => {
        return OtpAPI.verifyOTP(otp);
    };

    const handleValidateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSignInOrSignUp = async () => {
        const isHaveAccount = await CustomerAPI.getOneUser(email);
        console.log({ isHaveAccount });
        if (isHaveAccount) {
            console.log("Login");
            handleCloseModal();
        } else {
            console.log("Sign up");
            handleSwitchModal(modalStages[2]);
        }
    };

    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal} aria-labelledby="contained-modal-title-vcenter" centered>
                {modalContent[modalStage]}
            </Modal>
        </>
    );
}

export default LoginModal;
