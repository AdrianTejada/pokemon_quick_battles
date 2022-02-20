import styled from "styled-components";

import { Background } from "@/Comps/Background";
import  SettingsCard  from "@/Comps/SettingsCard";
import Button from "@/Comps/Button";

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Settings () {
    return <Main>
        <SettingsCard/>
        <Background/> 
</Main>
}