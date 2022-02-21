import styled from "styled-components";
import React from "react";

import { DndProvider } from 'react-dnd';
import { TouchBackend} from 'react-dnd-touch-backend'

import { Background } from "@/Comps/Background";
import SearchBar from "@/Comps/SearchBar";
import CardPlaceHolder from "@/Comps/CardPlaceHolder";

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

const PlaceHolderCont = styled.div`
    position: absolute;
    justify-content: space-between;
    display: flex;
    top: 300px;
    width: 1000px;
`



export default function Stadium () {
    return <Main>
        <Background/>
        <React.Fragment/>

        <DndProvider backend={TouchBackend}
            options={{
                enableTouchEvents:true,
				enableMouseEvents:true
            }}>
            <PlaceHolderCont>
                <CardPlaceHolder/>
                <CardPlaceHolder/>
            </PlaceHolderCont>
        <SearchBar/>
        </DndProvider>
</Main>
}