import {readFile} from "node:fs/promises"
export async function ReadMenu(path="menu.json"){
    try{
        
        const data = await readFile(path);
        // console.log(data)
        if(data === null){
            throw new Error("Le fichoer n'existe pas ")
        }
        const menu = JSON.parse(data);
        console.log(menu)
        if (!menu.jours || menu.jours.length === 0){
            throw new Error("il n'y a aucun jour")
            
        }

        return menu;
 }
 catch(error) {
    console.log(error)
    if(error.code==="ENOENT") {
        console.warn("le f")
    }
 }
}

console.log(await ReadMenu("./menu.json"))