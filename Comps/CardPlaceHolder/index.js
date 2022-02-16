import styled from "styled-components";
import Image from "next/image";
import mypic from '@/public/black.png'

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 250px;
  height: 400px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  background-color: lightgrey;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const CardPlaceHolder = () => {
    return (
        <CardWrapper>
        <Image
        src={mypic}
        alt="Picture of the author"
        height={50}
        width={50}
        
        />
        </CardWrapper>
    )
}

export default CardPlaceHolder;
