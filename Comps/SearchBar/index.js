import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useProvider } from '@/utils/provider';
import MiniCard from "../MiniCard";
import React from "react";
import DragCont from "../DragCont";

const Cont = styled.div`
    margin-top: 50px ;
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
    /* position: relative; */
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

const ButtonCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    padding: 20px;

`

const PageButtonCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

const PageButton = styled.button`
    border-radius: 5px;
    border: 0px solid transparent;
    background-color: grey;
    margin: 2px;
`

var timer = null;
var butt_arr = [];
var start = 1;


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
    const [page, setCurPage] = useState(1)

    for (var i=1; i<800; i+=8) {
        // butt_arr.push(start);
        butt_arr.push(((i-1)/8)+1)
        start++;
    }

    butt_arr = butt_arr.slice(
        page-5<0?0:page-5,
        page+5
    );
    

    const Search = async (txt) => {
        setCurPage(1)
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        if (timer === null) {
            if (!localStorage.getItem('token')) {
                alert('you are not logged in!')
            }
            timer = setTimeout(async()=>{
                const result = await axios.get(`https://pokemon-api-bcit.herokuapp.com/getpokemon`,{
                // const result = await axios.get(`http://localhost:5000/getpokemon`,{
                    params: {
                        token: localStorage.getItem('token'),
                        txt,
                        gen1,
                        gen2,
                        gen3,
                        gen4,
                        gen5,
                        gen6,
                        show_legendaries,
                        page
                    }})
                setData(result.data);
                timer = null;
            }, 500)
            // console.log(data)
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
            <ButtonCont>
                <Data>
                    {data.map((o,i)=><DragCont key={i} item={o}>
                            <MiniCard
                                name={o.Name}
                                />
                        </DragCont>
                    )}
                </Data>
                    <PageButtonCont>
                    {butt_arr.map((o,i)=><PageButton style={{background:o===page?"pink":"white"}}
                    onClick={async()=>{
                        setCurPage(p)
                        const result = await axios.get(`https://pokemon-api-bcit.herokuapp.com/getpokemon`,{
                        // const result = await axios.get(`http://localhost:5000/getpokemon`,{
                            params: {
                                token: localStorage.getItem('token'),
                                txt,
                                gen1,
                                gen2,
                                gen3,
                                gen4,
                                gen5,
                                gen6,
                                show_legendaries,
                                page
                            }})
                        setData(result===[]?null:result.data);
                        console.log(page)
                    }}
                    >{o}</PageButton>)}
                    </PageButtonCont>
            </ButtonCont>
        </DataCont>}
    </Cont>
}