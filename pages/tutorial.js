import styled from "styled-components"
import { IntroCard } from "@/Comps/IntroCard";
import { Background } from "@/Comps/Background"
import { useState } from "react";
import { DndProvider } from 'react-dnd';
import { TouchBackend} from 'react-dnd-touch-backend'

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default function Tutorial() {

    return <Main>
        <Background/> 

            <IntroCard>

            </IntroCard>
            
    </Main>
} 
