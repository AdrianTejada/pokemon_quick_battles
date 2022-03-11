import { Background } from "@/Comps/Background"
import SearchBar from "@/Comps/SearchBar"
import styled from "styled-components"
import logo from '@/public/assets/logo.png'
import Image from "next/image"
import Button from "@/Comps/Button"
import SettingsButton from "@/Comps/SettingButton"
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
  margin-top: 10vh;
  height: 15vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ImgCont = styled.div`
width: 75vh;
`

export default function Home() {
  const router = useRouter()

  return <Main>
    <Background/> 
    <ImgCont>
      <Image
      alt="Logo"
      src={logo}
      width={970}
      height={506}
      layout='responsive'
      />
    </ImgCont>
    

    <ButtonCont>
      <Button
        text="Start!"
        onClick={()=>router.push('/stadium')}
      />
      
      <SettingsButton
        text="Settings"
        onClick={()=>router.push('/settings')}
      />
    </ButtonCont>
</Main>
}
