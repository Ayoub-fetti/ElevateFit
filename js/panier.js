/* fonction pour ajouter le produit choiser dans la page cart.html */



function ajouterAuPanier() {
    // Récupérer les informations du produit
    const productName = document.getElementById("product-name").textContent;
    const productPrice = document.getElementById("product-price").textContent.replace("$", "");
    const productImage = document.getElementById("product-img").src;
    const quantity = document.querySelector("input[type='number']").value;

    // Récupérer le panier existant ou créer un nouveau
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Vérifier si le produit existe déjà dans le panier
    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        // Mettre à jour la quantité si le produit existe
        cart[existingProductIndex].quantity = parseInt(cart[existingProductIndex].quantity) + parseInt(quantity);
    } else {
        // Ajouter le nouveau produit
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: parseInt(quantity)
        });
    }

    // Sauvegarder le panier mis à jour
    localStorage.setItem("cart", JSON.stringify(cart));
}