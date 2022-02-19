import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useProvider } from '@/utils/provider';

const Cont = styled.div`
    min-width: 507px;
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

    const [data, setData] = useState([])


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
            setData(result.data);
            timer = null;
            console.log(data)
            }, 1000)
        }
    }

    return <Cont>
        <SearchCont
            placeholder="Search Pokemon"
            onChange={(e)=>Search(e.target.value)}
        />
    </Cont>
}