import styled from "styled-components";
import Image from "next/image";
import mypic from '@/public/black.png'
import { useState } from "react";
import Card from "../Card";


const CardWrapper = styled.div`
  overflow: hidden;
  min-width: 250px;
  min-height: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  background-color: lightgrey;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const CardPlaceHolder = ({
}) => {
    const [pokemon, setPokemon] = useState(null)

    return (<div>
        {pokemon===null?<CardWrapper>
        <Image
        src={mypic}
        alt="Picture of the author"
        height={50}
        width={50}
        />

        </CardWrapper>:
        <Card
          // name={pokemon.Name}
          // number={pokemon.id}
          // type1={pokemon['Type 1']}
          // type2={pokemon['Type 2']}
          // hp={pokemon['HP']}
          // atk={pokemon.Attack}
          // def={pokemon.Defense}
          // sp_atk={pokemon['Sp. Atk']}
          // sp_def={pokemon['Sp. Atk']}
          // speed={pokemon.Speed}
        />}

        </div>
    )
}

export default CardPlaceHolder;