import { SwitchContainer, SwitchText } from "./SwitchComponent.style.js";
import { Switch } from "@mui/material";
import { setSwitchState } from "../../redux/actions.js";
import { useSelector, useDispatch } from "react-redux";

const SwitchComponent = () => {
    const switchState = useSelector((state) => state.switchState);
    const dispatch = useDispatch();

    const handleSwitchChange = (event) => {
        dispatch(setSwitchState(event.target.checked));
    };

    return (
        <>
            <SwitchContainer>
                <SwitchText>Dark</SwitchText>
                <Switch checked={switchState} onChange={handleSwitchChange} />
                <SwitchText>Light</SwitchText>
            </SwitchContainer>
        </>
    );
};

export default SwitchComponent;
