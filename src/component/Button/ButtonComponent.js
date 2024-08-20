import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const ButtonComponent = ({ ButtonOnClick, ButtonMessage }) => {
    const switchState = useSelector((state) => state.switchState);

    return (
        <>
            <Button
                onClick={ButtonOnClick}
                variant='contained'
                sx={{
                    fontSize: "1.5rem",
                    backgroundColor: switchState ? "#1976d2" : "#505050",
                    "&:hover": {
                        backgroundColor: switchState ? "#115293" : "#404040",
                    },
                }}
            >
                {ButtonMessage}
            </Button>
        </>
    );
};

export default ButtonComponent;
