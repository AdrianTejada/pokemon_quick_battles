<<<<<<< HEAD
import CardPlaceHolder from "@/Comps/CardPlaceHolder";

export default function Home() {
  const name = "ivysaur";
  return (<div>
    <img src={`https://img.pokemondb.net/sprites/black-white/normal/${name}.png`} alt="Ivysaur"/>
    <CardPlaceHolder/>
  </div>
=======
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../comps/button'
import FightButton from '../comps/battlebutton'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Button/>
      </div>
      
      <div>
        <FightButton/>
      </div>
    </div>
>>>>>>> d7d4fc2a7c0280c211c95dcf0933598a9cddc32a
  )
}
