import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";

const Cont = styled.div`
    ${({op})=>op && `opacity:${op};`}
    ${({position, left, top})=>position=== 'absolute' && `
    left:${left}px;
    top:${top}px;
    position:${position};
    `}
`;

export default function DragCont ({
    children=null,
    item={}
}) {
    const [{ isDragging, coords }, drag, dragPreview] = useDrag(()=>({
        type:'pokemon',
        item,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            coords: monitor.getClientOffset()
        })
    }))

    const sty = {
        left: null,
        top: null,
        position: null
    }

    if (coords && isDragging) {
        // console.log(coords)
        sty.left = coords.x + 10
        sty.top = coords.y + 10
        sty.position = 'absolute'
    }


    return <Cont 
        ref={dragPreview}
        op={isDragging? 0.5 :1}
        left={sty.left}
        top={sty.top}
        position={sty.position}
    >
        <div ref={drag}>
            {children}
        </div>
    </Cont>
}