const getCartItems = JSON.parse(localStorage.getItem("cartItem"));
console.log(getCartItems);

const divC = document.querySelector('.container')


let showcartitem = () =>{
    divC.innerHTML = ""
    getCartItems.map(item =>{
        divC.innerHTML += `
        <div class="cart-card">
            <div class="left">
                <h2>${item.name}</h2>
                <p class="category">${item.category}</p>
            </div>
            <div class="right">
                <h3>$${item.price}</h3>
                <div class="quantity-box">
                    <button class="minus">
                        -
                    </button>
                    <span>
                        ${item.quentity}
                    </span>
                    <button class="plus">
                        +
                    </button>
                </div>
            </div>
        </div>
        `
    })
}

showcartitem()
