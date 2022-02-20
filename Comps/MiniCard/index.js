import styled from "styled-components"

const Cont = styled.div`
    min-width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    border: 1px solid #C4C4C4;
    filter: drop-shadow(0px 5px 5px #C4C4C4);
    background-color: white;
    overflow: hidden;
`

const Pokemon = styled.img`
    position: absolute;
    align-self: center;
    top: -10px;
`

const Text = styled.div`
    font-size: 16px;
    position: absolute;
    align-self: center;
    bottom: 10px;
`

export default function MiniCard ({
    name="Pikachu",
}) {
    return <Cont>
        <Pokemon src={`https://img.pokemondb.net/sprites/x-y/normal/${name.toLowerCase()}.png`}></Pokemon>
        <Text>{name}</Text>
    </Cont>
}