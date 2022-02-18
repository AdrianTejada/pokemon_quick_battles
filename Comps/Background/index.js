import styled from "styled-components"
import night from "@/public/bg/dark.png"
import day from '@/public/bg/light.png'

import Image from "next/image"

const Cont = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    align-self: center;
    top: 0px;
`

const ImageCont = styled.div`
    /* width: 5000px; */
    height: 100vh;
    position: absolute;
    overflow: hidden;
`



export const Background = () => {
    return <Cont>
        <ImageCont>
            <Image src={day} style={{width: '100%', height: '100vh', objectFit: 'cover'}}/>
        </ImageCont>
</Cont>
}