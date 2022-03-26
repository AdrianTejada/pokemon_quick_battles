import styled from "styled-components"
import { IntroCard } from "@/Comps/IntroCard";
import { Background } from "@/Comps/Background"
import { useRouter } from "next/router"

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const TopBtnBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    padding: 1vw 1vw;
`

export default function Tutorial() {
    const router = useRouter()

    return <Main>
        <Background/> 
        <TopBtnBar>
        

        </TopBtnBar>

        <IntroCard/>
            
    </Main>
} 
