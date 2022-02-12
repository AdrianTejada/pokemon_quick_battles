import { useRouter } from "next/router"
import styled from "styled-components"

const MainButton = styled.button`
    width:100px;
    height:30px;
    background-color:${props=>props.bg};
    border-radius:20px;
    color:white;
    box-shadow: 0px 1px 1px black;
    border:none;
`;

const Button = ({
    bg="#BF2525",
    text="Start"
}) => {
    const router = useRouter()

    return <div>
        <MainButton bg={bg}>
            {text}
        </MainButton>
    </div>
}

export default Button;