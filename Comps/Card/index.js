import styled from "styled-components";
import { RadarChart } from "recharts";


const Cont = styled.div`
    width: 440px;
    margin-bottom: -437px;
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
    background-color: #181818;
`

const PictureCont = styled.div`
    width: 100%;
    height: 50%;
`

const Triangle = styled.div`
    border-style: solid;
    border-width: 0 46px 80px 46px;
    border-color: transparent transparent #FF6161 transparent;
    position: relative;
    right: 46px;
`

const TriangleExtension = styled.div`
    width: 110px;
    height: 80px;
    background-color: #FF6161;
    z-index: 1;
    padding-left: 5px;
`

const TriangleText = styled.div`
    position: relative;
    font-size: 30px;
    top: 28px;
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
    justify-content: center;
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

const Type = styled.div`
    /* width: ; */
`

const Card = ({
    name="Fletchinder",
    number="194"
}) => {
    return <Cont>
        <ClearCont>
            <PictureCont>
            </PictureCont>
        </ClearCont>

        <DataCont>
            <BannerCont>
                <TriangleCont>
                    <TriangleExtension>
                        <TriangleText>
                            No. {number}
                        </TriangleText>
                    </TriangleExtension>
                    <Triangle/>
                </TriangleCont>
                <Banner>
                    {name}
                </Banner>
            </BannerCont>

            <Data bg={'lightblue'}>
            </Data>
        </DataCont>

    </Cont>
}

export default Card;