$(document).ready(function() {
  function calcularCarrinho() {
      let subtotal = 0;

      $('.cart-info').each(function() {
          const price = parseFloat($(this).find('small').text().replace('Preço: R$', ''));
          const quantity = parseInt($(this).closest('tr').find('.quantity-input').val());
          const itemTotal = price * quantity;

          subtotal += itemTotal;
          $(this).closest('tr').find('.item-price').text(`R$${itemTotal.toFixed(2)}`);
      });

      const tax = 25.00; // Taxa fixa de exemplo
      const total = subtotal + tax;

      $('#subtotal').text(`R$${subtotal.toFixed(2)}`);
      $('#tax').text(`R$${tax.toFixed(2)}`);
      $('#total').text(`R$${total.toFixed(2)}`);
  }

  $('.quantity-input').on('input', calcularCarrinho);
});
