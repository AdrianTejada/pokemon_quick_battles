import { Background } from "@/Comps/Background"
import SearchBar from "@/Comps/SearchBar"
import styled from "styled-components"
import logo from '@/public/assets/logo.png'
import Image from "next/image"
import Button from "@/Comps/Button"
import { useRouter } from "next/router"

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ButtonCont = styled.div`
  margin-top: 30px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function Home() {
  const router = useRouter()

  return <Main>
    <Background/> 
  <Image
    src={logo}
    />
    <ButtonCont>
      <Button
        text="Start!"
        onClick={()=>router.push('/stadium')}
      />
      <Button
        text="Settings"
        onClick={()=>router.push('/settings')}
      />
    </ButtonCont>
</Main>
}
