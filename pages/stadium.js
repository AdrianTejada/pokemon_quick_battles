import styled from "styled-components";

import { Background } from "@/Comps/Background";
import SearchBar from "@/Comps/SearchBar";

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default function Stadium () {
    return <Main>
        <SearchBar/>
        <Background/>
</Main>
}