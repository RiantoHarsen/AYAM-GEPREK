document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const menu = document.getElementById('menu').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    const message = `Pesanan Baru:\n\nMenu: ${menu}\nNama Pemesan: ${name}\nAlamat Kirim: ${address}\nMetode Pembayaran: ${payment}`;

    const whatsappUrl = `https://wa.me/+6282114620358?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
});
