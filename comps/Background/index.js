import styled from "styled-components"
import { backgroundimage } from '../variable'
import { useProvider } from "@/utils/provider";

const Cont = styled.div`
    width: 100vw;
    height: 100vh;
`;

const ImageCont = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;
    align-self: center;
    overflow: hidden;
    z-index: -1;
`;



export const Background = ({
    children,
    bgimage=backgroundimage,
}) => {

    const{theme} = useProvider();

    return <Cont>
        {children}
        <ImageCont>
            
        </ImageCont>
</Cont>
}