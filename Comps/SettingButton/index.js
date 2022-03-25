import styled from "styled-components"
import { useProvider } from "@/utils/provider";
import { settingbgcolor } from '../variable'

const MainButton = styled.button`
    background:${props=>props.settingbackground};
    border-radius:10em;
    color:white;
    box-shadow: 0px 4px 2px #505050;
    border:none;
    padding: 0.4em 1.5em;

    font-family: Share Tech;
    font-size: 1.75em;
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