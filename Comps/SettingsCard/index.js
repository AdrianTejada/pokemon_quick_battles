import styled from "styled-components";
import { useProvider } from "@/utils/provider";
import { settingbg } from "../variable";
import { checktext } from "../variable";
import { themetext } from "../variable";
import { circle } from "../variable";
import { card } from "../variable";

const MainCont = styled.div`
    width:20vw;
    min-width: 300px;
    padding: 0 2vw;
`

const SettingsCont = styled.div`
padding: 0 1vw;
background-color: ${props=>props.settingbackground};
display: flex;
flex-direction: column;
border-radius: 1vw;
padding-bottom: 1em;
`

const H1 = styled.div`
font-family: Share Tech;
font-size: 2em;
width: 100%;
text-align: center;

margin: 1vw 0;
color: ${props=>props.txtColor}
`

const DMCont = styled.div`
//dark mode container
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1vh 0;
`
const DMTxt = styled.div`
font-size: 1.25em;
color: ${props=>props.themetxcolour};
font-family: Lato;
`

const Bar = styled.div`
border-radius: 10em;
display: flex;
justify-content: center;
align-items: center;
width: 3.5em;
background-color: ${props=>props.bgcolor};
`

const Circle = styled.div`
position: relative;
left: ${props=>props.left};
width: 2em;
height: 2em;
background-color: ${props=>props.circlehue};
border-radius: 50%;
transition: .5s;
`

const Line = styled.div`
width: 100%;
height: 1px;
background-color: ${props=>props.bg};
`

const GCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 1vh 0;
`

const GHead = styled.div`
font-family: Lato;
font-size: 1.25em;
color: ${props=>props.headColor};
width: 100%;
margin-bottom: 0.5em;
`

const Check = styled.div`
width: 100%;
display: flex;
align-items: center;
cursor: pointer;
margin-bottom: 0.4em;
`

const CheckText = styled.div`
    font-size: 1.25em;
    color: ${props=>props.textcolour};

    font-family: Lato;
    font-weight: 300;
`

const CheckBox = styled.input`
width: 1.5em;
height: 1.5em;
margin-right: 1em;
background-color: blue;
`



export default function SettingsCard ({
    bgsetting=settingbg,
    checkcolour=checktext,
    maintext=themetext,
    circlecolour=circle
}) {
    const {
        theme, setTheme,
        gen1, setGen1,
        gen2, setGen2,
        gen3, setGen3,
        gen4, setGen4,
        gen5, setGen5,
        gen6, setGen6,
        show_legendaries, setLegend
    } = useProvider()
    return <MainCont>
        <SettingsCont settingbackground={card[theme]}>

            <H1 txtColor={maintext[theme]}>
                Settings
            </H1>
            <DMCont onClick={()=>setTheme(theme==='default'?'dark':'default')}>
                <DMTxt themetxcolour={maintext[theme]}>
                    Default Theme
                </DMTxt>
                <Bar bgcolor={maintext[theme]}>
                    <Circle left={theme==="default"?'-1em':'1em'} circlehue={circlecolour[theme]}/>
                </Bar>
            </DMCont>

            <Line bg={themetext[theme]}/>
            
            <GCont>
                <GHead headColor={maintext[theme]}>
                    Pokemon Generation
                </GHead>
                
                <Check onClick={()=>setGen1(gen1==1?false:1)}>
                    <CheckBox
                    type='checkbox'
                    checked={gen1==1?true:false}
                    />
                    <CheckText 
                    textcolour={checkcolour[theme]}
                    >
                        Generation 1
                    </CheckText>
                </Check>

                <Check onClick={()=>setGen2(gen2==2?false:2)}>
                    <CheckBox
                        type='checkbox'
                        checked={gen2==2?true:false}
                    />
                    <CheckText textcolour={checkcolour[theme]}>
                        Generation 2
                    </CheckText>
                </Check>

                <Check onClick={()=>setGen3(gen3==3?false:3)}>
                    <CheckBox
                        type='checkbox'
                        checked={gen3==3?true:false}
                    />
                    <CheckText textcolour={checkcolour[theme]}>
                        Generation 3
                    </CheckText>
                </Check>

                <Check onClick={()=>setGen4(gen4==4?false:4)}>
                    <CheckBox
                        type='checkbox'
                        checked={gen4==4?true:false}
                    />
                    <CheckText textcolour={checkcolour[theme]}>
                        Generation 4
                    </CheckText>
                </Check>

                <Check onClick={()=>setGen5(gen5==5?false:5)}>
                    <CheckBox
                        type='checkbox'
                        checked={gen5==5?true:false}
                    />
                    <CheckText textcolour={checkcolour[theme]}>
                        Generation 5
                    </CheckText>
                </Check>

                <Check onClick={()=>setGen6(gen6==6?false:6)}>
                    <CheckBox
                        type='checkbox'
                        checked={gen6==6?true:false}
                    />
                    <CheckText textcolour={checkcolour[theme]}>
                        Generation 6
                    </CheckText>
                </Check>

                <Line bg={themetext[theme]}/>
            </GCont>

            <Check onClick={()=>setLegend(show_legendaries==false?true:false)}>
                <CheckBox type='checkbox'
                checked={show_legendaries}
                />
                <CheckText textcolour={checkcolour[theme]}>
                    Legendary Pokemons Only
                </CheckText>
            </Check>
          
            </SettingsCont>
        
       
    </MainCont>
}
