// You can add JavaScript functionality here, such as:
// - Image carousel for the hero section
// - Adding items to the cart
// - Form validation for the contact form
document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card img");
    const modal = document.getElementById("product-modal");
    const modalImg = document.getElementById("modal-product-img");
    const modalTitle = document.getElementById("modal-product-title");
    const modalPrice = document.getElementById("modal-product-price");
    const closeModal = document.querySelector(".close-btn");
    const colorOptions = document.getElementById("color-options");
    const contactForm = document.getElementById("contact-form");

    // Dados fictícios para trocar as cores
    const productColors = {
        "Tênis de Corrida": {
            "original": "https://static.netshoes.com.br/produtos/tenis-adidas-adizero-drive-rc-feminino/72/FBA-2174-172/FBA-2174-172_zoom1.jpg?ts=1728917876&ims=1088x",
            "orange": "https://static.netshoes.com.br/produtos/tenis-adidas-adizero-drive-rc-masculino/87/FBA-2251-387/FBA-2251-387_zoom1.jpg?ts=1729180943&ims=1088x",
            "blue": "https://static.netshoes.com.br/produtos/tenis-adidas-adizero-drive-rc-masculino/76/FBA-2251-076/FBA-2251-076_zoom1.jpg?ts=1729180961&ims=1088x",
            "black": "https://static.netshoes.com.br/produtos/tenis-adidas-adizero-drive-rc-masculino/72/FBA-2251-172/FBA-2251-172_zoom1.jpg?ts=1738594849&ims=1088x",
            "white": "https://static.netshoes.com.br/produtos/tenis-adidas-adizero-drive-rc-masculino/28/FBA-2251-028/FBA-2251-028_zoom1.jpg?ts=1736940276&ims=1088x"
        },

        "Salto Alto": {
            "black": "https://static.zattini.com.br/produtos/scarpin-feminino-salto-fino-fivela/06/PNI-0268-006/PNI-0268-006_zoom1.jpg?ts=1710927637&ims=1088x",
            "white": "https://static.zattini.com.br/produtos/scarpin-feminino-salto-fino-fivela/05/PNI-0268-205/PNI-0268-205_zoom1.jpg?ts=1710927553&ims=1088x",
            "nude": "https://static.zattini.com.br/produtos/scarpin-feminino-salto-fino-fivela/03/PNI-0268-203/PNI-0268-203_zoom1.jpg?ts=1710927575&ims=1088x"
        },

        "Tênis Cano Médio": {
            "original": "https://a-static.mlcdn.com.br/1500x1500/tenis-adidas-hoops-3-0-mid-masculino/netshoes/3zp-4993-024-38/dc00350bdc7acb91fee07d309ac7632b.jpeg",
            "white": "https://static.netshoes.com.br/produtos/tenis-adidas-hoops-30-mid-masculino/26/3ZP-4993-026/3ZP-4993-026_zoom1.jpg?ts=1706625777&ims=1088x",
            "black": "https://static.netshoes.com.br/produtos/tenis-adidas-hoops-30-mid-masculino/72/3ZP-4993-172/3ZP-4993-172_zoom1.jpg?ts=1706109870&ims=1088x"
        },

        "Botas de Couro": {
            "original": "https://static.zattini.com.br/produtos/bota-feminina-texana-country-western-bordada-bico-fino-couro-tendencia/09/P4Z-0011-309/P4Z-0011-309_zoom1.jpg?ts=1694829195&ims=1088x",
            "black": "https://static.zattini.com.br/produtos/bota-feminina-texana-country-western-bordada-bico-fino-couro-tendencia/06/P4Z-0011-006/P4Z-0011-006_zoom1.jpg?ts=1694829214&ims=1088x",
            "silver": "https://static.zattini.com.br/produtos/bota-feminina-texana-country-western-bordada-bico-fino-couro-tendencia/64/P4Z-0011-064/P4Z-0011-064_zoom1.jpg?ts=1694829195&ims=1088x"
        },

        "Tênis com Plataforma": {
            "original": "https://static.netshoes.com.br/produtos/tenis-nike-court-vision-alta-feminino/14/2IC-5849-014/2IC-5849-014_zoom1.jpg?ts=1700144589&ims=1088x",
            "blue": "https://static.netshoes.com.br/produtos/tenis-nike-court-vision-alta-feminino/32/JD8-9894-832/JD8-9894-832_zoom1.jpg?ts=1741711441&ims=1088x",
            "pink": "https://static.netshoes.com.br/produtos/tenis-nike-court-vision-alta-feminino/14/JD8-8602-014/JD8-8602-014_zoom1.jpg?ts=1730797067&ims=1088x"
        }
    };

    // Abrir Modal ao clicar na imagem do produto
    productCards.forEach(img => {
        img.addEventListener("click", function () {
            const card = this.closest(".product-card");
            const title = card.querySelector("h3").textContent;
            const price = card.querySelector(".price").textContent;
            const imageUrl = this.src;

            modal.style.display = "flex";
            modalImg.src = imageUrl;
            modalTitle.textContent = title;
            modalPrice.textContent = price;

            colorOptions.innerHTML = "";
            if (productColors[title]) {
                for (const color in productColors[title]) {
                    const option = document.createElement("option");
                    option.value = color;
                    option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
                    colorOptions.appendChild(option);
                }
            }

            // Atualizar imagens ao trocar cor
            colorOptions.addEventListener("change", function () {
                const selectedColor = colorOptions.value;
                if (productColors[title] && productColors[title][selectedColor]) {
                    modalImg.src = productColors[title][selectedColor];
                }
            });
        });
    });

    // Fechar Modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fechar Modal ao clicar fora dele
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    fetch("header.html")
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML("afterbegin", data));

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML("beforeend", data));

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                const submitButton = contactForm.querySelector("button");
                submitButton.innerHTML = "Eviando...";
                submitButton.disabled = true;

                setTimeout(() => {
                    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
                    contactForm.reset();
                    submitButton.innerHTML = "Enviar";
                    submitButton.disabled = false;
                }, 2000);
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    }
});
