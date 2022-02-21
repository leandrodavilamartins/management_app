import { getFormulas } from "../js/data/getFormulas.js";
import { generateTableEstoque } from "../js/generators/tableEstoque.js";

const table = document.querySelector('#tabela');

async function generateView(){
    let items = await getFormulas();
    let htmlTable = await generateTableEstoque(items);
    table.innerHTML = htmlTable;
    
}

generateView(); 