import { filter } from "@/utils/func"
import pokemon from '@/utils/Pokemon.json'

export default async function handler(req, res) {
    const {txt, gen1, gen2, gen3, gen4, gen5, gen6, show_legendaries } = req.query
    var list = []

    console.log({
        "this is the text": txt,
        gen1,
        gen2,
        gen3,
        gen4,
        gen5,
        gen6,
        show_legendaries
    })

    // const list = filter( pokemon, {
    //     txt:txt,
    //     gen1: gen1,
    //     gen2: gen2,
    //     gen3: gen3,
    //     gen4: gen4,
    //     gen5: gen5,
    //     gen6: gen6,
    //     show_legendaries:show_legendaries,
    // })



    res.status(200).json(list)
}