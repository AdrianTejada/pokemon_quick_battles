import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image"
import { Background } from "@/Comps/Background";
import  SettingsCard  from "../Comps/SettingsCard";
import Button from "@/Comps/Button";
import question from '@/public/instructions/question.png'


const Main = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const TopBtnBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

width: 100%;
padding: 1vw 1vw;
`

const SettingCont = styled.div`
width: 100%;
height: 100%;


display: flex;
align-items: center;
justify-content: center;

`


export default function Settings () {
    const router = useRouter()
    return <Main>
        <TopBtnBar>
           
            <Button
                text="Back"
                onClick={()=>router.push('/stadium')}
            />
             <Image
            src={question} onClick={()=>router.push('/tutorial')}
            />

            <Button
                text="Log Out"
                onClick={()=>{
                    localStorage.removeItem('username')
                    localStorage.removeItem('token')
                    router.push('/')
                }}
            />

        </TopBtnBar>

        <SettingCont>

            <SettingsCard/>
        </SettingCont>

    


        <Background/> 
</Main>
}

/*
        
*/