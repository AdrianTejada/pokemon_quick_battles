
import { useRouter } from "next/router"
import styled from "styled-components"
import Image from "next/image"

import { Background } from "@/Comps/Background"
import Button from "@/Comps/Button"
import { IntroCard } from "@/Comps/IntroCard"



const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TopBtnBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

width: 100%;
padding: 1vw 1vw;
`

export default function Test() {
    const router = useRouter()

    return <Main>
                <TopBtnBar>
            <Button
            text="Home"
            onClick={()=>router.push('/')}
            />

            <Button
            text="Skip"
            onClick={()=>router.push('/stadium')}
            />
        </TopBtnBar>
        <Background />
        <IntroCard />

    </Main>
}
