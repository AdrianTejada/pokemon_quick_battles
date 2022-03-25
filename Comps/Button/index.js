import styled from "styled-components"
import { useProvider } from "@/utils/provider";
import { bgcolor } from '../variable'

const MainButton = styled.button`
    background:${props=>props.background};
    border-radius:10em;
    color:white;
    box-shadow: 0px 4px 2px #505050;
    border:none;
    padding: 0.4em 2em;

    font-family: Share Tech;
    font-size: 1.75em;
`;

const Button = ({
    bg=bgcolor,
    text="Start",
    onClick=()=>{}
}) => {

    const{theme} = useProvider();

    return <div onClick={()=>onClick()}>
            <MainButton background={bg[theme]}>
                {text}
            </MainButton>
    </div>
}

export default Button;