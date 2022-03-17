export function filter (arr = [], 
    config = {
        txt:null,
        gen1:1,
        gen2:2,
        gen3:3,
        gen4:4,
        gen5:5,
        gen6:6,
        only_legendary:false
    }
) {

    const {txt, gen1, gen2, gen3, gen4, gen5, gen6, only_legendary} = config
    if (txt == null || txt == ""){
        return ""
    } else {
        const filtered_arr = arr.filter((o)=>{
            if ((o.id == txt
                || o.Name.includes(txt) 
                || o.Type1.includes(txt) 
                || o.Type2.includes(txt))&&
                ( o.Generation == gen1
                || o.Generation == gen2
                || o.Generation == gen3
                || o.Generation == gen4
                || o.Generation == gen5
                || o.Generation == gen6)
                ) {
                return true
            }
            else {
                return false
            }
        })
        if (only_legendary == 'true') {
            const legendary_array = filtered_arr.filter((o)=>{
                if (o.Legendary == true) {
                    return true
                } else {
                    return false
                }
            })
            return legendary_array
        } else {
            return filtered_arr
        }
    }
}