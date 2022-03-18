import { useDrop } from "react-dnd"
import styled from "styled-components"

const DropCont = styled.div`
    ${({border})=> border && `
    border:3px solid ${border};
    border-radius: 23px;
    `}
`

const DropZone = ({
    children=null,
    onDropItem=()=>{},
}) => {
    const [{canDrop, isOver}, drop] = useDrop(()=>({
        accept:'pokemon',
        drop:(item, monitor)=>{
            onDropItem(item)
        },
        collect: (monitor) => ({
            canDrop: monitor.canDrop(),
            isOver: monitor.isOver()
        })
    }))
    return (<DropCont ref={drop} border={canDrop && isOver? 'lightgray': 'transparent'}>
        {children}
        </DropCont>)
}

export default DropZone;