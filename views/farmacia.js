import { getFarmacia } from "../js/data/getFarmacia.js";
import { generateTableFarmacia } from "../js/generators/tableFarmacia.js";

const table = document.querySelector('#tabela');

async function generateView(){
    let items = await getFarmacia();
    let htmlTable = await generateTableFarmacia(items);
    table.innerHTML = htmlTable;
        spinner.classList.remove('visible');
    spinner.classList.add('invisible');
}

generateView(); 