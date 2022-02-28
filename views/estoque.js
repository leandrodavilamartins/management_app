import { getEstoque } from "../js/data/getEstoque.js";
import { generateTableEstoque } from "../js/generators/tableEstoque.js";

const table = document.querySelector('#tabela');

async function generateView(){
    let items = await getEstoque();
    let htmlTable = await generateTableEstoque(items);
    table.innerHTML = htmlTable;
    
}

generateView(); 