function openImage(url) {
    window.open(url, '_blank', 'width=600,height=400,top=100,left=100');
  }

  document.getElementById('Order').onclick = function() {
    setInterval(function()
{
    window.location.href = 'thanking_for_order.html';
}, 5*100);
}   