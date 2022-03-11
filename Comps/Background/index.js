import styled from "styled-components"
import night from "@/public/bg/dark.png"
import day from '@/public/bg/light.png'
import { useProvider } from "@/utils/provider"

import Image from "next/image"

const Cont = styled.div`
    width: 100vw;
    height: 100vh;

    overflow: hidden;
    position: absolute;
    z-index: -1;

    background-color: red;
`

const ImageCont = styled.div`
height: 100vh;
`

export const Background = () => {
    const {theme} = useProvider()
    console.log(theme==='default'?day.src:night.src)
    
    return <Cont>
        <ImageCont>
            <Image 
            alt={'The Background Image'}
            src={theme==='default'?day:night} 
            width={2302}
            height={1212}
            layout="fill"
            objectFit="cover"
            objectPosition='center'
            />
        </ImageCont>
    </Cont>
}


/*

*/