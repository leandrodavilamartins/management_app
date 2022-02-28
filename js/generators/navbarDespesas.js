function generateNavbar() {
    let icon = '../../public/navbar.svg'; //icon source
    let title = 'Despesas';

let html = `<nav class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="${icon}" alt="" width="30" height="24" class="d-inline-block align-text-top">
      ${title}
    </a>
  </div>
</nav>`

const navbar = document.querySelector("#navbar");
navbar.innerHTML = html;
return html;
}

generateNavbar();