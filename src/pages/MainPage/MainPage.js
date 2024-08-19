import { useNavigate } from "react-router-dom";
import { MainContainer, MainAmong, AmongText } from "./MainPage.style.js";
import { Button } from "@mui/material";
import SwitchComponent from "../../component/Switch/SwitchComponent";
import { useSelector } from "react-redux";
const MainPage = () => {
    const navigate = useNavigate();
    const switchState = useSelector((state) => state.switchState);

    const chatStartButtonClick = () => {
        navigate("/chat");
    };

    return (
        <>
            <MainContainer $switchState={switchState}>
                <SwitchComponent />
                <MainAmong>
                    <AmongText>IMPOLITE CHATBOT</AmongText>
                    <Button
                        onClick={chatStartButtonClick}
                        variant='contained'
                        sx={{
                            fontSize: "1.5rem",
                            backgroundColor: switchState ? "#1976d2" : "#505050",
                            "&:hover": {
                                backgroundColor: switchState ? "#115293" : "#404040",
                            },
                        }}
                    >
                        채팅시작 ▶
                    </Button>
                </MainAmong>
            </MainContainer>
        </>
    );
};

export default MainPage;
