/*---------------------filtre by category-------------------*/       
document.getElementById("categorySelect").addEventListener("change", function () {
    const selectedCategory = this.value;
    const products = document.querySelectorAll(".col-4");

    products.forEach(product => {
        const category = product.getAttribute("data-category");

        if (selectedCategory === "all" || category === selectedCategory) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

/*----------------filtrer par prix------------------*/


document.getElementById("minPrice").addEventListener("input", function () {
    document.getElementById("minPriceValue").textContent = this.value + "$";
});
document.getElementById("maxPrice").addEventListener("input", function () {
    document.getElementById("maxPriceValue").textContent = this.value + "$";
});

document.getElementById("applyFilter").addEventListener("click", function () {
    const minPrice = parseInt(document.getElementById("minPrice").value, 10);
    const maxPrice = parseInt(document.getElementById("maxPrice").value, 10);
    const products = document.querySelectorAll(".col-4");

    products.forEach(product => {
        const productPrice = parseInt(product.getAttribute("data-price"), 10);

        if (productPrice >= minPrice && productPrice <= maxPrice) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
         

/*----------------------JS for Single product detail-------------------------*/ 


        var ProductImg = document.getElementById("product-img");//larger image
        var SmallImg = document.getElementsByClassName("small-img");//it returns list of 4 images having index 0,1,2,3 as we have 4 images with class name "small0-img" 

        SmallImg[0].onclick = function()//when user click on first image or images at 0 index, it will display as ProdcutImg.src replace with clicked or SmallImg[0], so we get smallimg[0] in bigger form, similarly when click on smallimg[1], it will display in bigger picture and so on 
        {
            ProductImg.src = SmallImg[0].src;   
        }

        SmallImg[1].onclick = function()
        {
            ProductImg.src = SmallImg[1].src;   
        }

        SmallImg[2].onclick = function()
        {
            ProductImg.src = SmallImg[2].src;   
        }

        SmallImg[3].onclick = function()
        {
            ProductImg.src = SmallImg[3].src;   
        }

        
      /*------------- Add to cart & price total --------------------*/
    
        document.addEventListener("DOMContentLoaded", function() {
            // Sélection des éléments HTML
            const addToCartButton = document.querySelector(".btn"); 
            const quantityInput = document.querySelector("input[type='number']"); // Champ de quantité
            const productPriceElement = document.getElementById("product-price"); // Prix unitaire du produit
            const navTotalPrice = document.querySelector("nav .menu-bar li"); // Prix total dans la barre de navigation
            const cartIcon = document.querySelector("nav .fa-shopping-cart"); // Icône du panier
        
            let totalPrice = 0;
            let cartCount = 0;
        
            // Écouteur d'événement pour le clic sur le bouton "Add To Cart"
            addToCartButton.addEventListener("click", function(event) {
                event.preventDefault(); // Empêche le comportement par défaut du lien
                
                // Récupérer la quantité et le prix unitaire
                const quantity = parseInt(quantityInput.value);
                const productPrice = parseFloat(productPriceElement.textContent.replace("$", ""));
                
                // Calculer le total pour cet ajout
                const totalProductPrice = quantity * productPrice;
                
                // Mettre à jour le total et le nombre d'articles dans le panier
                totalPrice += totalProductPrice;
                cartCount += quantity;
        
                // Afficher le total dans la barre de navigation
                navTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
                
                // Afficher le nombre d'articles dans le panier (à côté de l'icône du panier)
                cartIcon.parentElement.innerHTML = `<i class="fas fa-shopping-cart"></i> (${cartCount})`;
            });
        });
        
     /*--------------------- afficher les details de chaque produit  ---------------------------*/
     function goToProduct(product) {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
         window.location.href = 'product-detail.html';
    }
    
    
    document.addEventListener('DOMContentLoaded', () => {
        const product = JSON.parse(localStorage.getItem('selectedProduct'));
        if (product) {
            document.getElementById('product-cat').innerText = product.cat;
            document.getElementById('product-name').innerText = product.name;
            document.getElementById('product-img').src = product.img;
            document.getElementById('product-price').innerText = product.price;y
        }
        
    
        
    });
/*-----------------------------------------------------------------------------*/


   