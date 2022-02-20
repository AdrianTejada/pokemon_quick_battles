import styled from "styled-components"

const MainButton = styled.button`
    width:100px;
    height:30px;
    background:${props=>props.bg};
    border-radius:20px;
    color:white;
    box-shadow: 0px 1px 1px black;
    border:none;
`;

const Button = ({
    bg="linear-gradient(0deg,#E83838,#BF2525)",
    text="Start",
    onClick=()=>{}
}) => {
    return <div onClick={onClick()}>
            <MainButton bg={bg}>
                {text}
            </MainButton>
    </div>
}

export default Button;