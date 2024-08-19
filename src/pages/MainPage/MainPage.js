import { useNavigate } from "react-router-dom";
import { MainContainer, MainAmong, AmongText, SwitchContainer, SwitchText } from "./MainPage.style.js";
import { Button, Switch } from "@mui/material";

const MainPage = () => {
    const navigate = useNavigate();

    const chatStartButtonClick = () => {
        navigate("/chat");
    };

    return (
        <>
            <MainContainer>
                <SwitchContainer>
                    <SwitchText>Dark</SwitchText>
                    <Switch />
                    <SwitchText>Light</SwitchText>
                </SwitchContainer>
                <MainAmong>
                    <AmongText>IMPOLITE CHATBOT</AmongText>
                    <Button
                        onClick={chatStartButtonClick}
                        variant='contained'
                        sx={{
                            fontSize: "1.5rem",
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
