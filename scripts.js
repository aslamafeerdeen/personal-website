document.querySelectorAll('.photo img').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<img src="${this.src}" alt="Large view">`;
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});
