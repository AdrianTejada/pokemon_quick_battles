import styled from "styled-components";
import { useProvider } from "@/utils/provider";

const MainCont = styled.div`
    min-width: 384px;
    min-height: 696px;
    margin-bottom: -348px;
`

const Opacity = styled.div`
    min-width: 100%;
    min-height: 348px;
    opacity: 0.22;
    background-color: #181818;
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
    background-color: white;
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
    color: white;
`

const CheckText = styled.div`
    font-size: 16px;
    color: white;
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
    background-color: #3480D9;
    border-radius: 50%;
    transition: top .5s;
`


export default function SettingsCard () {
    const {theme, setTheme} = useProvider()
    return <MainCont>
        <Opacity/>
        <Cont>
            <SubCont onClick={()=>setTheme(theme==='default'?'dark':'default')}>
                <Text>
                    Default Theme
                </Text>
                <Bar>
                    <Circle top={theme==="default"?'-11px':'11px'}/>
                </Bar>
            </SubCont>
            <Line/>
                <GenCont>
                    <Row>
                        <Check>
                            <CheckBox type='checkbox'>
                            </CheckBox>
                            <CheckText>
                                Gen 1
                            </CheckText>
                        </Check>
                        <Check>
                        <CheckBox type='checkbox'>
                            </CheckBox>
                            <CheckText>
                                Gen 2
                            </CheckText>
                        </Check>
                        <Check>
                            <CheckBox type='checkbox'>
                            </CheckBox>
                            <CheckText>
                                Gen 3
                            </CheckText>
                        </Check>
                    </Row>
                    <Row>
                    <Check>
                        <CheckBox type='checkbox'>
                        </CheckBox>
                        <CheckText>
                            Gen 4
                        </CheckText>
                    </Check>
                    <Check>
                        <CheckBox type='checkbox'>
                            </CheckBox>
                            <CheckText>
                                Gen 5
                            </CheckText>
                        </Check>
                        <Check>
                            <CheckBox type='checkbox'>
                            </CheckBox>
                            <CheckText>
                                Gen 6
                            </CheckText>
                        </Check>
                    </Row>
                </GenCont>
            <Line/>
            <SubCont style={{justifyContent: 'center'}}>
                <CheckBox type='checkbox'>
                    </CheckBox>
                    <CheckText>
                        Legendaries Only
                    </CheckText>
            </SubCont>
        </Cont>
    </MainCont>
}