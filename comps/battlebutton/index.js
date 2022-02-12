import { useRouter } from "next/router"
import styled from "styled-components"

const BattleButton = styled.button`
    width:150px;
    height:75px;
    background:${props=>props.bg};
    border-radius:10px;
    color:white;
    box-shadow: 0px 2px 2px black;
    border: 1px solid white;
`;

const FightButton = ({
    bg="linear-gradient(0deg,#884040,#E83838)",
    text="Fight"
}) => {
    const router = useRouter()

    return <div>
        <BattleButton bg={bg}>
            {text}
        </BattleButton>
    </div>
}

export default FightButton;