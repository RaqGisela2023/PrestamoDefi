document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll('.page');

    function showPage() {
        const hash = window.location.hash.substring(1);
        pages.forEach(page => {
            if (page.id === hash) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    showPage();

    window.addEventListener('hashchange', showPage);

    const connectWalletBtn = document.getElementById('connectWalletBtn');
    if (connectWalletBtn) {
        connectWalletBtn.addEventListener('click', function() {
            alert('Funcionalidad de conectar wallet aún no implementada.');
        });
    }
});
