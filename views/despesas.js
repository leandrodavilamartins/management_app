import { getDespesas } from "../js/data/getDespesas.js";
import { generateTableDespesas } from "../js/generators/tableDespesas.js";

const table = document.querySelector('#tabela');

async function generateView(){
    let items = await getDespesas();
    let htmlTable = await generateTableDespesas(items);
    table.innerHTML = htmlTable;
    
}

generateView(); 