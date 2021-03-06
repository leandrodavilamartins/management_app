let router = document.querySelector('#router');

let html=`
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="../../views/farmacia.html">Farmácia</a></li>
    <li class="breadcrumb-item"><a href="../../views/compras.html">Compras</a></li>
    <li class="breadcrumb-item"><a href="../../views/vendas.html">Vendas</a></li>
    <li class="breadcrumb-item"><a href="../../views/estoque.html">Estoque</a></li>
    <li class="breadcrumb-item"><a href="../../views/despesas.html">Despesas</a></li>
    <li class="breadcrumb-item aria-current="page"><a href="../../views/formulas.html">Fórmulas</a></li>
    <li class="breadcrumb-item"><a href="#">IoT</a>&nbsp<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0078D4" class="bi bi-activity" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
</svg></li>
  </ol>
</nav>`

router.innerHTML = html;