import { useNavigate } from "react-router-dom";
import { MainContainer, MainAmong, AmongText, SwitchContainer, SwitchText } from "./MainPage.style.js";
import { Button, Switch } from "@mui/material";
import { setSwitchState } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const MainPage = () => {
    const navigate = useNavigate();
    const switchState = useSelector((state) => state.switchState);
    const dispatch = useDispatch();

    const chatStartButtonClick = () => {
        navigate("/chat");
    };

    const handleSwitchChange = (event) => {
        dispatch(setSwitchState(event.target.checked));
    };

    return (
        <>
            <MainContainer switchState={switchState}>
                <SwitchContainer>
                    <SwitchText>Dark</SwitchText>
                    <Switch checked={switchState} onChange={handleSwitchChange} />
                    <SwitchText>Light</SwitchText>
                </SwitchContainer>
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
