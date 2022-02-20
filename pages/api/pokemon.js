import { filter } from "@/utils/func"
import pokemon from '@/utils/Pokemon.json'
import { loadStaticPaths } from "next/dist/server/dev/static-paths-worker"

export default async function handler(req, res) {
    const {txt, gen1, gen2, gen3, gen4, gen5, gen6, show_legendaries } = req.query;
    var list = filter(pokemon, {txt: txt, gen1:gen1, gen2:gen2, gen3:gen3, gen4:gen4, gen5:gen5, gen6:gen6, only_legendary:show_legendaries})

    // list.slice(0,8)

    res.status(200).json(list)
}