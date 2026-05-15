const getCartItems = JSON.parse(localStorage.getItem("cartItem"));
console.log(getCartItems);

const divC = document.querySelector('.container')


let showcartitem = () => {
    divC.innerHTML = ""
    let total = 0;
    getCartItems.map(item => {
         total += Math.ceil(item.price * item.quentity)
    })
    getCartItems.map(item => {
        divC.innerHTML += `
        <div class="cart-card">
            <div class="left">
                <h2>${item.name}</h2>
                <p class="category">${item.category}</p>
            </div>

            <div class="right">
                <h3>$${item.price}</h3>

                <div class="quantity-box">
                    <button class="minus" onclick="quentity(${item.id} , 'min')">-</button>

                    <span>${item.quentity}</span>

                    <button class="plus" onclick="quentity(${item.id} , 'plus')">+</button>
                </div>
            </div>
        </div>
        
        `
    })
    divC.innerHTML += `
    <div class="total-box">
            <div>
                <h2>Total Price</h2>
                <p>${getCartItems.length} Items</p>
            </div>

            <h1 class="total-p">$${total}</h1>
        </div>
    `
    

    
}

showcartitem()

function quentity(id, action) {
    let product = getCartItems.find(item => item.id === id)
    // let pQuentity = getCartItems.find(item => item.quentity ===)

    if (action === "plus") {
        product.quentity += 1
    } else if (action === "min") {
        product.quentity -= 1
    }
    if (product.quentity === 0) {
        let index = getCartItems.findIndex(item => item.id === id)
        getCartItems.splice(index, 1)
    }
    localStorage.setItem("cartItem", JSON.stringify(getCartItems))
    showcartitem()
}

