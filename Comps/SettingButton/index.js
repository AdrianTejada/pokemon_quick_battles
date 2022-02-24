import styled from "styled-components"
import { useProvider } from "@/utils/provider";
import { settingbgcolor } from '../variable'

const MainButton = styled.button`
    width:100px;
    height:30px;
    background:${props=>props.settingbackground};
    border-radius:20px;
    color:white;
    box-shadow: 0px 1px 1px black;
    border:none;
`;

const SettingsButton = ({
    settingbg=settingbgcolor,
    text="Start",
    onClick=()=>{}
}) => {

    const{theme} = useProvider();

    return <div onClick={()=>onClick()}>
            <MainButton settingbackground={settingbg[theme]}>
                {text}
            </MainButton>
    </div>
}

export default SettingsButton;