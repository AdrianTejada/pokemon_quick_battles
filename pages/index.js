import { Background } from "@/Comps/Background"
import SearchBar from "@/Comps/SearchBar"
import styled from "styled-components"

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Home() {
  return <Main>
  <Background/> 
</Main>
}
