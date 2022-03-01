import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import { DndProvider } from 'react-dnd';
import { TouchBackend} from 'react-dnd-touch-backend'

import { Background } from "@/Comps/Background";
import SearchBar from "@/Comps/SearchBar";
import CardPlaceHolder from "@/Comps/CardPlaceHolder";
import DropZone from "@/Comps/DropZone";
import FightButton from "@/Comps/FightButton";
import Button from "@/Comps/Button";
import SettingsButton from "@/Comps/SettingButton";

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

const PlaceHolderCont = styled.div`
    position: absolute;
    justify-content: center;
    display: flex;
    top: 180px;
    width: 1200px;
`

const FightButtonCont = styled.div`
    position: absolute;
    align-self: center;
    bottom: 20px;
`


const Pokemon1 = styled.div`
    position: relative;
    right: ${props=>props.right};
    opacity: ${props=>props.op};
    transition: right 0.5s, opacity 0.5s;
`

const Pokemon2 = styled.div`
    position: relative;
    left: ${props=>props.left};
    opacity: ${props=>props.op};
    transition: left 0.5s, opacity 0.5s;
`

const Header = styled.div`
    color: white;
    font-size: 40px;
    margin-top: 20px;
`

const HomeButton = styled.div`
    position: absolute;
    top: 20px;
    left: 10px;
`

const SettingButton = styled.div`
    position: absolute;
    top: 20px;
    right: 10px;
`



export default function Stadium () {
    const [pokemon1, setPokemon1] = useState(null)
    const [pokemon2, setPokemon2] = useState(null)
    const [pokemon1_pos, setPoke1Pos] = useState('200px')
    const [pokemon2_pos, setPoke2Pos] = useState('200px')
    const [pokemon1_op, setPoke1O] = useState(1)
    const [pokemon2_op, setPoke2O] = useState(1)
    const [header, setHeader] = useState(null)
    const [noFight, setFight] = useState(true)

    const router = useRouter()

    return <Main>
        <React.Fragment/>
        <Background/>

        <HomeButton>
            <Button
                text="Home"
                onClick={()=>router.push('/')}
            />
        </HomeButton>

        <SettingButton>
            <SettingsButton
                text="Settings"
                onClick={()=>router.push('/settings')}
            />
        </SettingButton>

        <DndProvider backend={TouchBackend}
            options={{
                enableTouchEvents:true,
				enableMouseEvents:true
            }}>
            <PlaceHolderCont>
                <Pokemon1 right={pokemon1_pos} op={pokemon1_op}>
                    <DropZone onDropItem={(item)=>setPokemon1(item)} >
                        <CardPlaceHolder pokemon={pokemon1}/>
                    </DropZone>
                </Pokemon1>

                <Pokemon2 left={pokemon2_pos} op={pokemon2_op}>
                    <DropZone onDropItem={(item)=>setPokemon2(item)} >
                        <CardPlaceHolder pokemon={pokemon2}/>
                    </DropZone>
                </Pokemon2>
            </PlaceHolderCont>
            <PlaceHolderCont>
                {/* <img src="../public/battle.gif" width="480" height="480"></img> */}
            </PlaceHolderCont>
            {header===null?<SearchBar/>:
            <Header>{header}</Header>
            }
        </DndProvider>

        {pokemon1 && pokemon2 && noFight?<FightButtonCont>
            <FightButton
                onClick={()=>{
                    setPoke1Pos('-3px')
                    setPoke2Pos('-3px')

                    setTimeout(()=>{
                        if (pokemon1.Total < pokemon2.Total) {
                            setPoke1O(0)
                            setPoke2Pos('-223px')
                            setHeader(`${pokemon2.Name} wins!`)
                            setTimeout(()=>{
                                setPokemon1(null)
                            },500)
                        } else if (pokemon1.Total > pokemon2.Total) {
                            setPoke2O(0)
                            setPoke1Pos('-223px')
                            setHeader(`${pokemon1.Name} wins!`)
                            setTimeout(()=>{
                                setPokemon2(null)
                            },500)
                        } else {
                            setHeader(`Draw!`)
                            setFight(null)
                        }
                    },2000)
                }}
            />
            </FightButtonCont>:
            <FightButtonCont>
                <Button
                    onClick={()=>{
                        setPokemon1(null)
                        setPokemon2(null)
                        setPoke1Pos('200px')
                        setPoke2Pos('200px')
                        setPoke1O(1)
                        setPoke2O(1)
                        setHeader(null)
                        setFight(true)
                    }}
                    text="Reset"
                />
            </FightButtonCont>}
</Main>
}