import { MainContainer, MainAmong, AmongText } from "./MainPage.style.js";
import SwitchComponent from "../../component/Switch/SwitchComponent";
import { useSelector } from "react-redux";
import ButtonComponent from "../../component/Button/ButtonComponent.js";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const switchState = useSelector((state) => state.switchState);
    const navigate = useNavigate();
    const chatStartButtonClick = () => {
        navigate("/chat");
    };

    return (
        <>
            <MainContainer $switchState={switchState}>
                <SwitchComponent />
                <MainAmong>
                    <AmongText>IMPOLITE CHATBOT</AmongText>
                    <ButtonComponent ButtonOnClick={chatStartButtonClick} ButtonMessage='채팅시작 ▶' />
                </MainAmong>
            </MainContainer>
        </>
    );
};

export default MainPage;
