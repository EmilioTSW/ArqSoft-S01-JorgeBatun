document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".animar");

    const mostrarElemento = () => {
        elementos.forEach(elemento => {
            const posicion = elemento.getBoundingClientRect().top;
            const alturaPantalla = window.innerHeight;

            if (posicion < alturaPantalla - 80) {
                elemento.classList.add("visible");
            }
        });
    };

    mostrarElemento();
    window.addEventListener("scroll", mostrarElemento);

    const cards = document.querySelectorAll(".card-juego");

    cards.forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.background = `
                radial-gradient(circle at ${x}px ${y}px, rgba(56,189,248,0.20), rgba(15,23,42,0.95) 45%)
            `;
        });

        card.addEventListener("mouseleave", () => {
            card.style.background = "rgba(15, 23, 42, 0.92)";
        });
    });
});