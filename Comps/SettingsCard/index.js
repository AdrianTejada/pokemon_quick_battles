import styled from "styled-components";
import { useProvider } from "@/utils/provider";
import { settingbg } from "../variable";
import { checktext } from "../variable";
import { themetext } from "../variable";
import { circle } from "../variable";
import { card } from "../variable";

const MainCont = styled.div`
    min-width: 384px;
    min-height: 696px;
    margin-bottom: -348px;
`

const Opacity = styled.div`
    min-width: 100%;
    min-height: 348px;
    /* opacity: 0.22; */
    background-color: ${props=>props.settingbackground};
    backdrop-filter: blur(10px);
    border-radius: 25px;
`

const Cont = styled.div`
    width: 100%;
    height: 348px;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 348px;
    align-items: center;
    justify-content: space-evenly;
`

const Line = styled.div`
    min-width: 366px;
    height: 1px;
    background-color: ${props=>props.bg};
`

const SubCont = styled.div`
    min-width: 331px;
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const GenCont = styled.div`
    min-width: 324px;
    min-height: 104px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Check = styled.div`
    width: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Text = styled.div`
    font-size: 21px;
    color: ${props=>props.themetxcolour};
`

const CheckText = styled.div`
    font-size: 16px;
    color: ${props=>props.textcolour};
    position: relative;
    bottom: 2px;
`

const CheckBox = styled.input`
    width: 20px;
    height: 20px;
`

const Bar = styled.div`
    min-width: 26px;
    min-height: 50px;
    border-radius: 50px;
    background-color: #3A3A3A;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Circle = styled.div`
    position: relative;
    top: ${props=>props.top};
    min-width: 20px;
    min-height: 20px;
    background-color: ${props=>props.circlehue};
    border-radius: 50%;
    transition: top .5s;
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
        <Opacity settingbackground={card[theme]}/>
        <Cont>
            <SubCont onClick={()=>setTheme(theme==='default'?'dark':'default')}>
                <Text themetxcolour={maintext[theme]}>
                    {theme==='default'?'Default Theme':'Dark Theme'}
                </Text>
                <Bar>
                    <Circle top={theme==="default"?'-11px':'11px'} circlehue={circlecolour[theme]}/>
                </Bar>
            </SubCont>
            <Line bg={themetext[theme]}/>
                <GenCont>
                    <Row>
                        <Check onClick={()=>setGen1(gen1==1?0:1)}>
                            <CheckBox
                                type='checkbox'
                                checked={gen1==1?true:false}
                            />
                            <CheckText textcolour={checkcolour[theme]}>
                                Gen 1
                            </CheckText>
                        </Check>
                        <Check onClick={()=>setGen2(gen2==2?0:2)}>
                            <CheckBox
                                type='checkbox'
                                checked={gen2==2?true:false}
                            />
                            <CheckText textcolour={checkcolour[theme]}>
                                Gen 2
                            </CheckText>
                        </Check>
                        <Check onClick={()=>setGen3(gen3==3?0:3)}>
                            <CheckBox
                                type='checkbox'
                                checked={gen3==3?true:false}
                            />
                            <CheckText textcolour={checkcolour[theme]}>
                                Gen 3
                            </CheckText>
                        </Check>
                    </Row>
                    <Row>
                    <Check onClick={()=>setGen4(gen4==4?0:4)}>
                            <CheckBox
                                type='checkbox'
                                checked={gen4==4?true:false}
                            />
                        <CheckText textcolour={checkcolour[theme]}>
                            Gen 4
                        </CheckText>
                    </Check>
                    <Check onClick={()=>setGen5(gen5==5?0:5)}>
                            <CheckBox
                                type='checkbox'
                                checked={gen5==5?true:false}
                            />
                            <CheckText textcolour={checkcolour[theme]}>
                                Gen 5
                            </CheckText>
                        </Check>
                        <Check onClick={()=>setGen6(gen6==6?0:6)}>
                            <CheckBox
                                type='checkbox'
                                checked={gen6==6?true:false}
                            />
                            <CheckText textcolour={checkcolour[theme]}>
                                Gen 6
                            </CheckText>
                        </Check>
                    </Row>
                </GenCont>
            <Line bg={themetext[theme]}/>
            <SubCont style={{justifyContent: 'center'}} onClick={()=>setLegend(show_legendaries==false?true:false)}>
                    <CheckBox type='checkbox'
                        checked={show_legendaries}
                    />
                    <CheckText textcolour={checkcolour[theme]}>
                        Legendaries Only
                    </CheckText>
            </SubCont>
        </Cont>
    </MainCont>
}