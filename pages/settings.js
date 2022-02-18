import styled from "styled-components";

import { Background } from "@/Comps/Background";
import  SettingsCard  from "@/Comps/SettingsCard";
import Button from "@/Comps/Button";

import { useProvider } from "@/utils/provider";

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Settings () {
    const {theme} = useProvider()
    return <Main>
            <SettingsCard/>
                <Button text="show provider info" onClick={()=>console.log(theme)}/>
            </Main>
    {/* </Background> */}
}