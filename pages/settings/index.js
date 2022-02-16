import styled from "styled-components"
import Toggle from "@/comps/Toggle"



export default function Settings(){
    return <Container>
        <SetCont>
            <RowC>
                <HTxt>
                    Settings
                </HTxt>

            </RowC>

            <Row2>
                <Cont>
                    <LTxt>
                        Theme: 
                    </LTxt>  
                </Cont>

                <Cont>
                    <Toggle />   
                </Cont>
            </Row2>
            <RowDiv />
        </SetCont>
    </Container>
}

const Container = styled.div`
background-color: royalblue;
height: 100vh;
width: 100vw;
display: flex; 
justify-content: center;
align-items: center;
`

const SetCont = styled.div`
background-color: grey;
height: 90vh;
width: 90vw;
padding: 5vh 4vw;
border-radius: 2vh;
`
const RowC = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

`
const Row2 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`
const RowDiv = styled.div`
width: 100%;
background-color: #fff;
height: 0.2vh;
`
const HTxt = styled.div`
font-family: Share Tech;
font-size: 5vh;
color: #fff;

`
const Cont = styled.div`
`
const LTxt = styled.p`
font-size: 4vh;
font-family: Lato;
color: #fff;
margin: 0;
`




