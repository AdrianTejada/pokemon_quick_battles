import styled from "styled-components";
import React from "react";

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
        <Background/>
        <React.Fragment/>

        <PlaceHolderCont>
            <CardPlaceHolder/>
            <CardPlaceHolder/>
        </PlaceHolderCont>

        <SearchCont>
            <SearchBar/>
        </SearchCont>
</Main>
}