document.addEventListener('DOMContentLoaded', function() {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const itemPrices = document.querySelectorAll('.item-price');
    const subtotalDisplay = document.getElementById('subtotal');
    const taxDisplay = document.getElementById('tax');
    const totalDisplay = document.getElementById('total');
  
    // Função para calcular o total
    function updateTotal() {
      let subtotal = 0;
      itemPrices.forEach((price, index) => {
        const quantity = parseInt(quantityInputs[index].value);
        const itemPrice = parseFloat(price.textContent.slice(1).replace(',', '')); // Remove o '$' e vírgulas
        subtotal += quantity * itemPrice;
      });
  
      const tax = subtotal * 0.12; // Exemplo de imposto de 12%
      const total = subtotal + tax;
  
      subtotalDisplay.textContent = '$' + formatMoney(subtotal);
      taxDisplay.textContent = '$' + formatMoney(tax);
      totalDisplay.textContent = '$' + formatMoney(total);
    }
  
    // Adicionar ouvinte de eventos para os inputs de quantidade
    quantityInputs.forEach(input => {
      input.addEventListener('input', updateTotal);
    });
  
    // Atualizar o total quando a página carregar
    updateTotal();
  });
  
  // Função para formatar o dinheiro com vírgulas a cada três dígitos
  function formatMoney(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  