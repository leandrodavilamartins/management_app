import { getVendas } from "../js/data/getVendas.js";
import { generateTableVendas } from "../js/generators/tableVendas.js";

const table = document.querySelector('#tabela');

async function generateView(){
    let items = await getVendas();
    let htmlTable = await generateTableVendas(items);
    table.innerHTML = htmlTable;
        spinner.classList.remove('visible');
    spinner.classList.add('invisible');
}

generateView(); 