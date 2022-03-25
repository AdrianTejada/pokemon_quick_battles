import styled from "styled-components";
import { useRouter } from "next/router";

import { Background } from "@/Comps/Background";
import  SettingsCard  from "../Comps/SettingsCard";
import Button from "@/Comps/Button";


const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HomeButton = styled.div`
    position: absolute;
    top: 20px;
    left: 10px;
`

const SettingButton = styled.div`
    position: absolute;
    top: 20px;
    right: 10px;
`

export default function Settings () {
    const router = useRouter()
    return <Main>
        <HomeButton>
            <Button
                text="Home"
                onClick={()=>router.push('/stadium')}
            />
        </HomeButton>

        <SettingButton>
            <Button
                text="Log Out"
                onClick={()=>{
                    localStorage.removeItem('username')
                    localStorage.removeItem('token')
                    router.push('/')
                }}
            />
        </SettingButton>

        <SettingsCard/>

        <Background/> 
</Main>
}