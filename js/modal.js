export default function initModal() {
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    
    if(botaoFechar && containerModal) {
      
        function toggleModal(event) {
            event.preventDefault();
            containerModal.classList.toggle('ativo');
        }
        function cliqueForaModal(event) {
            if(event.target === this) {
            toggleModal(event);
            }
        }
    
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}