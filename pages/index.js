import CardPlaceHolder from '@/Comps/CardPlaceHolder'
import Button from "@/Comps/Button";
import FightButton from "@/Comps/FightButton";
import Toggle from "@/Comps/Toggle";


export default function Home() {
  const name = "ivysaur";
  return (<div>
    <img src={`https://img.pokemondb.net/sprites/black-white/normal/${name}.png`} alt="Ivysaur"/>
    <CardPlaceHolder/>
    <Button/>
    <FightButton/>
  </div>
  )
}
