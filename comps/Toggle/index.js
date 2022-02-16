import styled from "styled-components"

export default function Toggle(){
    return <Container>
        <BBar>
            <Circle />

        </BBar>
    </Container>

}

const Container = styled.div`
padding: 1.5vh 0;
`

const Circle = styled.div`
position: relative;
height: 5vh;
width: 5vh;
background-color: #3480D9;
border-radius: 100%;
z-index: 1;
top: -50%;

`

const BBar = styled.div`
background-color: #3A3A3A;
width: 10vh;
height: 2.5vh;
z-index: -1;
border-radius: 3rem;
`