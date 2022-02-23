import styled from "styled-components";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useProvider } from "@/utils/provider";
import { card } from '../variable'
import { triangle } from "../variable";
import { triangleex } from "../variable";
import { clear } from "../variable";


const Cont = styled.div`
    width: 440px;
    margin-bottom: -437px;
    position: relative;
    /* left: 50px; */
`
const ClearCont = styled.div`
    width: 440px;
    height: 640px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    opacity: 0.22;
    background-color:${props=>props.clearcont}
    backdrop-filter: blur(10px);
`

const PictureCont = styled.div`
    width: 440px;
    position: absolute;
    top:-10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Triangle = styled.div`
    border-style: solid;
    border-width: 0 46px 80px 46px;
    border-color: transparent transparent #6B7DBC transparent;
    position: relative;
    right: 46px;
`

const TriangleExtension = styled.div`
    width: 110px;
    height: 80px;
    background-color:${props=>props.triex};
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TriangleText = styled.div`
    position: relative;
    font-size: 45px;
`

const TriangleCont = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    top: 65px;
`

const BannerCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Banner = styled.div`
    width: 100%;
    height: 65px;
    background-color: #3C3C3C;
    display: flex;
    align-items: center;
    padding-left: 170px;
`

const BannerText = styled.div`
    font-size: 30px;
    color: white;
`

const DataCont = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    bottom: 437px;
`

const Data = styled.div`
    width: 440px;
    height: 292px;
    background-color: ${props=>props.bg};
    border-radius: 0px 0px 20px 20px;
`

const TypeCont = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: -40px;
    justify-content: flex-end;
    height: 100px;
`

const TypeBorder = styled.div`
    width: 110px;
    height: 35px;
    border-radius: 0px 20px 20px 0px;
    border-style: solid;
    border-width: 3px 3px 3px 0px;
    border-color: black black black transparent;
    background-color: white;
    margin-bottom: 15px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
`

const TypeColor = styled.div`
    background-color: #A5B41D;
    height: 20px;
    width: 100px;
    border-radius: 0px 10px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PokeImage = styled.img`
    min-width: 300px;
    min-height: 300px;
    filter: contrast(150%);
    image-rendering: pixelated;
    filter: saturate(1.5) brightness(1.3);
`

const Card = ({
    name="Ivysaur",
    number="1",
    type1="GRASS",
    type2="POISON",
    hp=45,
    atk=49,
    def=49,
    sp_atk=65,
    sp_def=65,
    speed=45,
    cardtheme=card
}) => {
    const data = [
        {
          subject: 'HP',
          A: parseInt(hp),
          fullMark: 154,
        },
        {
          subject: 'Attack',
          A: parseInt(atk),
          fullMark: 190,
        },
        {
          subject: 'Defence',
          A: parseInt(def),
          fullMark: 180,
        },
        {
          subject: 'Sp. Atk',
          A: parseInt(sp_atk),
          fullMark: 194,
        },
        {
          subject: 'Sp. Def',
          A: parseInt(sp_def),
          fullMark: 167,
        },
        {
            subject: 'Speed',
            A: parseInt(speed),
            fullMark: 180
        }
      ];

      const{theme} = useProvider();

    return <Cont>
            <PictureCont>
                <PokeImage src={`https://img.pokemondb.net/sprites/x-y/normal/${name.toLowerCase()}.png`}/>
            </PictureCont>
        <ClearCont clearcont={clear[theme]}>

        </ClearCont>

        <DataCont>
            <BannerCont>
            <TypeCont>
                <TypeBorder>
                    <TypeColor>
                        {type1}
                    </TypeColor>
                </TypeBorder>
                {type2==""?null:<TypeBorder>
                    <TypeColor>
                        {type2}
                    </TypeColor>
                </TypeBorder>}
            </TypeCont>
                <TriangleCont tri={triangle[theme]}>
                    <TriangleExtension triex={triangleex[theme]}>
                        <TriangleText>
                            {number}
                        </TriangleText>
                    </TriangleExtension>
                    <Triangle/>
                </TriangleCont>
                <Banner>
                    <BannerText>
                        {name}
                    </BannerText>
                </Banner>
            </BannerCont>
            <Data bg={card[theme]}>
            <ResponsiveContainer width="100%" height="100%" >
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid/> // grid: ;
                        <PolarAngleAxis dataKey="subject"/> // text
                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} /> // fill
                    </RadarChart>
                </ResponsiveContainer>
            </Data>
        </DataCont>

    </Cont>
}

export default Card;