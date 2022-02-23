import { useRouter } from "next/router"
import styled from "styled-components"
import { useProvider } from "@/utils/provider";
import { battlebgcolor } from '../variable'

const BattleButton = styled.button`
    width:150px;
    height:75px;
    background:${props=>props.battlebackground};
    border-radius:10px;
    color:white;
    box-shadow: 0px 2px 2px black;
    border: 1px solid white;
`;

const FightButton = ({
    battlebg=battlebgcolor,
    text="Fight",
    onClick=()=>{}
}) => {

    const router = useRouter()
    const{theme} = useProvider();

    return <div onClick={()=>onClick()}>
        <BattleButton battlebackground={battlebg[theme]}>
            {text}
        </BattleButton>
    </div>
}

export default FightButton;