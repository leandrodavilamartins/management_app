import { getFormulas } from "../js/data/getFormulas.js";
import { generateSelect } from "../js/generators/select.js";
import { generateTableFormula } from "../js/generators/tableFormula.js";

const select = document.querySelector('#select');
const table = document.querySelector('#tabela');

async function generateView(){
    let items = await getFormulas();
    let htmlSelect = await generateSelect(items);
    let htmlTable = await generateTableFormula(items);
    select.innerHTML = htmlSelect;
    table.innerHTML = htmlTable;
    
}

generateView(); 