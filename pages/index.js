import Toggle from "@/comps/Toggle";


export default function Home() {
  const name = "ivysaur";
  return (<div>
    <img src={`https://img.pokemondb.net/sprites/black-white/normal/${name}.png`} alt="Ivysaur"/>



    <Toggle />
  </div>
  )
}
