import styled from "styled-components"
import night from "@/public/bg/dark.png"
import day from '@/public/bg/light.png'
import { useProvider } from "@/utils/provider"

import Image from "next/image"

const Cont = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    align-self: center;
`

const ImageCont = styled.div`
    min-height: 100vh;
    position: absolute;
    overflow: hidden;
    object-fit: cover;
`

export const Background = () => {
    const {theme} = useProvider()
    return <Cont>
        <ImageCont>
            <Image src={theme==='default'?day:night} style={{width: '100%', height: '100vh', objectFit: 'cover'}}/>
        </ImageCont>
</Cont>
}