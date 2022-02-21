import { filter } from "@/utils/func"
import pokemon from '@/utils/Pokemon.json'

export default async function handler(req, res) {
    const {txt, gen1, gen2, gen3, gen4, gen5, gen6, only_legendary} = req.query

    const list = filter( pokemon, {
        txt:txt,
        gen1: gen1,
        gen2: gen2,
        gen3: gen3,
        gen4: gen4,
        gen5: gen5,
        gen6: gen6,
        only_legendary:only_legendary,
    })

    res.status(200).json(list)
}