import styled from "styled-components";
import { useRouter } from "next/router";

import { Background } from "@/Comps/Background";
import  SettingsCard  from "@/Comps/SettingsCard";
import Button from "@/Comps/Button";


const Main = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const TopBtnBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

width: 100%;
padding: 1vw 1vw;
`

const SettingCont = styled.div`
width: 100%;
height: 100%;


display: flex;
align-items: center;
justify-content: center;

`


export default function Settings () {
    const router = useRouter()
    return <Main>
        <TopBtnBar>
            <Button
            text="Home"
            onClick={()=>router.push('/')}
            />

            <Button
            text="Start!"
            onClick={()=>router.push('/stadium')}
            />
        </TopBtnBar>

        <SettingCont>

            <SettingsCard/>
        </SettingCont>

    


        <Background/> 
</Main>
}

/*
        
*/