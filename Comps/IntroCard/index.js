import styled from "styled-components"
import prof from '@/public/assets/Professor_Cerise_PJ.png'
import instruct1 from "@/public/instructions/1.png"

import { AiOutlineCaretDown } from 'react-icons/ai'

import { useProvider } from "@/utils/provider"

import Image from "next/image"

const Cont = styled.div`
width: 100vw;
height: 100vh;
display: flex; 
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
`
const BotBar = styled.div`
height: 30vh;
width: 100vw;

z-index: 1;
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Top = styled.div`
width: 100%;
display: flex; 
justify-content: flex-end;
overflow: none;
height: 4em;

`
const Triangle = styled.div`
width: 0; 
height: 0; 
border-left: 10vh solid transparent;
border-right: 10vh solid transparent;

border-bottom: 10vh solid red;

margin-right: -5vw;
`
const NameContent = styled.div`
font-family: Lato;
font-weight: 500;
font-size: 2em;
padding: 0.5em 20%;

background-color: red;
`
const Bottom = styled.div`
display: flex;
justify-content: flex-end;
margin: 0 3vw 1vw 0;
`

const TxtCont = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`
const PContent = styled.div`
margin: 1vw 3vw;
font-weight: 700;
font-family: Lato;
font-size: 1.5em;

overflow: hidden;
white-space: nowrap;
background-color: white;

animation: changing 3.5s steps(100, end);

@keyframes changing {
    from { width: 0% }
    to { width: 100% }
}
`
const BotBtn = styled.div`
`

const BGImages = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
display: flex;
justify-content: space-between;
`
const Middle = styled.div`
width: 60%;
display: flex;
justify-content: center;
padding-top: 5%;
`
const ImgCont1 = styled.div`
width: 25%;
padding: 2em;
margin-right: 10%;

`
const ImgCont2 = styled.div`
width: 50%;
padding: 2em;
`

export const IntroCard = ({
    char = "professor henry",
    description = "First you want to pick you first pokemon",
    nextPage = () => {console.log("I was clicked")},
    instructImg = ""
}) => {
    const {theme} = useProvider()
    
    return <Cont>

        


        <BotBar onClick={()=>{nextPage()}}>
            <Top>
                <Triangle />
                <NameContent>
                    {char}
                </NameContent>  
            </Top>

            <TxtCont>
                <PContent>
                    {description}
                </PContent>

                <Bottom>
                    <BotBtn>
                        <AiOutlineCaretDown size="2em"/>
                    </BotBtn>
                </Bottom>
            </TxtCont>
        </BotBar>

        <BGImages>
            <Middle>
                <ImgCont2>
                    <Image
                        src={instruct1}
                        width={557}
                        height={309}
                        layout="responsive"
                    />
                </ImgCont2>
            </Middle>

            <ImgCont1>
                <Image 
                src={prof}
                width={276}
                height={575}
                layout="responsive"
                />
            </ImgCont1>
        </BGImages>

    </Cont>
}


/*

*/