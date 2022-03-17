
import { useRouter } from "next/router"
import styled from "styled-components"
import Image from "next/image"
import { Background } from "@/Comps/Background"

import { IntroCard } from "@/Comps/IntroCard"



const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Test() {
    const router = useRouter()

    return <Main>
        <Background />
        <IntroCard />

    </Main>
}
