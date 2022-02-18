import styled from "styled-components"
import night from "@/public/bg/dark.png"
import day from '@/public/bg/light.png'

import Image from "next/image"

const Cont = styled.div`
    width: 100vw;
    height: 100vh;
`

const ImageCont = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;
    align-self: center;
    overflow: hidden;
    z-index: -1;
`



export const Background = ({children}) => {
    return <Cont>
        {children}
        <ImageCont>
            <Image src={day} width={2000} height={1440}/>
        </ImageCont>
</Cont>
}