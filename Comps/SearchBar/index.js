import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useProvider } from '@/utils/provider';
import MiniCard from "../MiniCard";
import React from "react";

const Cont = styled.div`
    width: 507px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SearchCont = styled.input`
    min-width: 100%;
    padding: 20px;
    border-radius: 100px;
    border-width: 0px;
    font-size: 20px;
`

const DataCont = styled.div`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 33.5px 35px 33.5px;
    border-color: transparent transparent #ffffff transparent;
    margin-top: 30px;
`

const Data = styled.div`
    min-width: 100%;
    border-radius: 20px;
    height: 500px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    overflow: scroll;
`

var timer = null;

export default function SearchBar () {
    const {
        gen1,
        gen2,
        gen3,
        gen4,
        gen5,
        gen6,
        show_legendaries
    } = useProvider()

    const [data, setData] = useState("")

    const Search = async (txt) => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        if (timer === null) {
            timer = setTimeout(async()=>{
            const result = await axios.get('/api/pokemon',{
                params: {
                    txt,
                    gen1,
                    gen2,
                    gen3,
                    gen4,
                    gen5,
                    gen6,
                    show_legendaries
                }})
            setData(result===[]?null:result.data);
            console.log(data)
            timer = null;
            }, 1000)
        }
    }

    return <Cont>
        <SearchCont
            placeholder="Search Pokemon by name or type!"
            onChange={(e)=>{
                Search(e.target.value)
        }}/>
        
        {data===""?<React.Fragment/>:<DataCont>
            <Triangle/>
            <Data>
                {data.map((o,i)=><div key={i}>
                        <MiniCard
                            name={o.Name}
                        />
                    </div>
                )}
            </Data>
        </DataCont>}
    </Cont>
}