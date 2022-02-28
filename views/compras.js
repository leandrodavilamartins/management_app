import { getCompras } from "../js/data/getCompras.js";
import { generateTableCompras } from "../js/generators/tableCompras.js";

const table = document.querySelector('#tabela');

async function generateView(){
    let items = await getCompras();
    let htmlTable = await generateTableCompras(items);
    table.innerHTML = htmlTable;
    
}

generateView(); 