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
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const SearchCont = styled.div`
    position: absolute;
    align-self: center;
    top: 20px;
`

const PlaceHolderCont = styled.div`
    display: flex;
    min-width: 1000px;
    justify-content: space-between;
`



export default function Stadium () {
    return <Main>
        <React.Fragment/>
        <Background/>

        <DndProvider backend={TouchBackend}
            options={{
                enableTouchEvents:false,
				enableMouseEvents:true
            }}>
            <PlaceHolderCont>
                <CardPlaceHolder/>
                <CardPlaceHolder/>
            </PlaceHolderCont>
        </DndProvider>

        <SearchCont>
            <SearchBar/>
        </SearchCont>
</Main>
}