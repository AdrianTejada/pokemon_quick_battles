import styled from "styled-components";
import React from "react";
import { useState } from "react";

import { DndProvider } from 'react-dnd';
import { TouchBackend} from 'react-dnd-touch-backend'

import { Background } from "@/Comps/Background";
import SearchBar from "@/Comps/SearchBar";
import CardPlaceHolder from "@/Comps/CardPlaceHolder";
import DropZone from "@/Comps/DropZone";

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
    top: 180px;
    width: 1000px;
`



export default function Stadium () {
    const [pokemon1, setPokemon1] = useState(null)
    const [pokemon2, setPokemon2] = useState(null)

    return <Main>
        <React.Fragment/>
        <Background/>

        <DndProvider backend={TouchBackend}
            options={{
                enableTouchEvents:true,
				enableMouseEvents:true
            }}>
            <PlaceHolderCont>
                <DropZone onDropItem={(item)=>setPokemon1(item)}>
                    <CardPlaceHolder pokemon={pokemon1}/>
                </DropZone>

                <DropZone onDropItem={(item)=>setPokemon2(item)}>
                    <CardPlaceHolder pokemon={pokemon2}/>
                </DropZone>
            </PlaceHolderCont>
            <SearchBar/>
        </DndProvider>
</Main>
}