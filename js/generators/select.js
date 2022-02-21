
export async function generateSelect(data) {
    //let select = document.querySelector("#select");
    let checkBtn = `<button class='btn-primary'>
    Selecionar
    </button>`;

    let items = [];
    items = data;

    let html = '<select class="form-select" aria-label="Default select example">';
    items.forEach( item => {
        return html += `<option value="1">${item.nome}</option>`
    })
    html += "</select>";
    html += "<br>";
    html += checkBtn;

    //select.innerHTML = html;
    return html;
}


