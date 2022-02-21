import { useRouter } from "next/router"
import styled from "styled-components"
import { useProvider } from "@/utils/provider";
import { bgcolor } from '../variable'

const MainButton = styled.button`
    width:100px;
    height:30px;
    background:${props=>props.background};
    border-radius:20px;
    color:white;
    box-shadow: 0px 1px 1px black;
    border:none;
`;

const Button = ({
    bg=bgcolor,
    text="Start",
    onClick=()=>{}
}) => {

    const router = useRouter()
    const{theme} = useProvider();

    return <div onClick={onClick()}>
            <MainButton background={bg[theme]}>
                {text}
            </MainButton>
    </div>
}

export default Button;