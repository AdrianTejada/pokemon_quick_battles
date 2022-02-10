import { useContext, createContext, useState } from "react";

const initialStates = {
    theme: "default",
    setTheme:()=>{}
}

const MyContext = createContext(initialStates)

export default function AppProvider({children}) {
    const [theme, setTheme] = useState(initialStates.theme)

    return <MyContext.Provider value={{theme, setTheme}}>
        {children}
    </MyContext.Provider>
}

export function useProvider() {
    const {theme, setTheme} = useContext(MyContext)
    return {theme, setTheme};
}