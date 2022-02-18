import { useContext, createContext, useState } from "react";

const initialStates = {
    theme: "default",
    setTheme:()=>{},
    gen1: 1,
    setGen1:()=>{},
    gen2: 2,
    setGen1:()=>{},
    gen3: 3,
    setGen1:()=>{},
    gen4: 4,
    setGen1:()=>{},
    gen5: 5,
    setGen1:()=>{},
    gen6: 6,
    setGen1:()=>{},
    show_legendaries:false,
    setLegend:()=>{}
}

const MyContext = createContext(initialStates)

export default function AppProvider({children}) {
    const [theme, setTheme] = useState(initialStates.theme)

    const [gen1, setGen1] = useState(initialStates.gen1)
    const [gen2, setGen2] = useState(initialStates.gen2)
    const [gen3, setGen3] = useState(initialStates.gen3)
    const [gen4, setGen4] = useState(initialStates.gen4)
    const [gen5, setGen5] = useState(initialStates.gen5)
    const [gen6, setGen6] = useState(initialStates.gen6)

    const [show_legendaries, setLegend] = useState()

    return <MyContext.Provider
    value={{
        theme, setTheme,
        gen1, setGen1,
        gen2, setGen2,
        gen3, setGen3,
        gen4, setGen4,
        gen5, setGen5,
        gen6, setGen6,
        show_legendaries, setLegend
    }}>
        {children}
    </MyContext.Provider>
}

export function useProvider() {
    const {        
        theme, setTheme,
        gen1, setGen1,
        gen2, setGen2,
        gen3, setGen3,
        gen4, setGen4,
        gen5, setGen5,
        gen6, setGen6,
        show_legendaries, setLegend} = useContext(MyContext)
    return {        
        theme, setTheme,
        gen1, setGen1,
        gen2, setGen2,
        gen3, setGen3,
        gen4, setGen4,
        gen5, setGen5,
        gen6, setGen6,
        show_legendaries, setLegend};
}