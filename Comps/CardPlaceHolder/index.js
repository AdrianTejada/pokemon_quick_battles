import styled from "styled-components";
import Image from "next/image";
import black from '@/public/black.png'
import white from '@/public/white.png'
import { useState } from "react";
import Card from "../Card";
import { placeholder } from "../variable";
import { useProvider } from "@/utils/provider";

const CardWrapper = styled.div`
  overflow: hidden;
  min-width: 440px;
  min-height: 640px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  background-color: ${props=>props.bg};
  opacity: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const CardPlaceHolder = ({
  pokemon=null
}) => {
    const { theme } = useProvider()
    return (<div>
        {pokemon===null?<CardWrapper
        bg={placeholder[theme]}>
        <Image
        src={theme==='default'?white:black}
        alt="Picture of the author"
        height={50}
        width={50}
        />

        </CardWrapper>:
        <Card
          name={pokemon.Name}
          number={pokemon.id}
          type1={pokemon['Type 1']}
          type2={pokemon['Type 2']}
          hp={pokemon['HP']}
          atk={pokemon.Attack}
          def={pokemon.Defense}
          sp_atk={pokemon['Sp Atk']}
          sp_def={pokemon['Sp Atk']}
          speed={pokemon.Speed}
        />}

        </div>
    )
}

export default CardPlaceHolder;