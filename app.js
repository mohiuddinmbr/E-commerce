const products = [
  { id: 1, name: "Wireless Headphones", price: 29.99, category: "Electronics", stock: 10 },
  { id: 2, name: "Bluetooth Speaker", price: 24.50, category: "Electronics", stock: 5 },
  { id: 3, name: "Smart Watch", price: 45.00, category: "Electronics", stock: 0 },
  { id: 4, name: "Gaming Mouse", price: 18.75, category: "Electronics", stock: 7 },
  { id: 5, name: "Mechanical Keyboard", price: 55.20, category: "Electronics", stock: 3 },
  { id: 6, name: "USB-C Charger", price: 12.99, category: "Electronics", stock: 15 },
  { id: 7, name: "LED Monitor", price: 120.00, category: "Electronics", stock: 4 },
  { id: 8, name: "Laptop Stand", price: 20.00, category: "Electronics", stock: 6 },
  { id: 9, name: "Power Bank", price: 22.40, category: "Electronics", stock: 9 },
  { id: 10, name: "Wireless Earbuds", price: 30.00, category: "Electronics", stock: 0 },

  { id: 11, name: "Men's T-Shirt", price: 10.99, category: "Clothing", stock: 20 },
  { id: 12, name: "Women's T-Shirt", price: 11.50, category: "Clothing", stock: 18 },
  { id: 13, name: "Jeans Pants", price: 25.00, category: "Clothing", stock: 12 },
  { id: 14, name: "Hoodie", price: 30.00, category: "Clothing", stock: 8 },
  { id: 15, name: "Jacket", price: 45.00, category: "Clothing", stock: 5 },
  { id: 16, name: "Sneakers", price: 35.00, category: "Clothing", stock: 10 },
  { id: 17, name: "Formal Shirt", price: 20.00, category: "Clothing", stock: 7 },
  { id: 18, name: "Shorts", price: 15.00, category: "Clothing", stock: 9 },
  { id: 19, name: "Cap", price: 8.99, category: "Clothing", stock: 14 },
  { id: 20, name: "Socks Pack", price: 6.50, category: "Clothing", stock: 25 },

  { id: 21, name: "Office Chair", price: 85.00, category: "Furniture", stock: 3 },
  { id: 22, name: "Study Table", price: 70.00, category: "Furniture", stock: 2 },
  { id: 23, name: "Bookshelf", price: 60.00, category: "Furniture", stock: 4 },
  { id: 24, name: "Bedside Lamp", price: 18.00, category: "Furniture", stock: 6 },
  { id: 25, name: "Sofa Set", price: 200.00, category: "Furniture", stock: 1 },
  { id: 26, name: "Dining Table", price: 150.00, category: "Furniture", stock: 2 },
  { id: 27, name: "Wardrobe", price: 180.00, category: "Furniture", stock: 1 },
  { id: 28, name: "Coffee Table", price: 40.00, category: "Furniture", stock: 5 },
  { id: 29, name: "TV Cabinet", price: 90.00, category: "Furniture", stock: 3 },
  { id: 30, name: "Recliner Chair", price: 120.00, category: "Furniture", stock: 2 },

  { id: 31, name: "Notebook", price: 3.50, category: "Stationery", stock: 50 },
  { id: 32, name: "Ball Pen", price: 1.20, category: "Stationery", stock: 100 },
  { id: 33, name: "Marker Set", price: 5.00, category: "Stationery", stock: 30 },
  { id: 34, name: "Highlighter", price: 2.50, category: "Stationery", stock: 40 },
  { id: 35, name: "Stapler", price: 4.00, category: "Stationery", stock: 20 },
  { id: 36, name: "Paper Clips", price: 1.00, category: "Stationery", stock: 60 },
  { id: 37, name: "File Folder", price: 2.80, category: "Stationery", stock: 25 },
  { id: 38, name: "Sketch Book", price: 6.50, category: "Stationery", stock: 15 },
  { id: 39, name: "Glue Stick", price: 1.50, category: "Stationery", stock: 35 },
  { id: 40, name: "Eraser Pack", price: 1.80, category: "Stationery", stock: 45 },

  { id: 41, name: "Face Wash", price: 5.50, category: "Beauty", stock: 20 },
  { id: 42, name: "Shampoo", price: 6.00, category: "Beauty", stock: 18 },
  { id: 43, name: "Hair Oil", price: 4.50, category: "Beauty", stock: 25 },
  { id: 44, name: "Body Lotion", price: 7.00, category: "Beauty", stock: 12 },
  { id: 45, name: "Perfume", price: 15.00, category: "Beauty", stock: 6 },
  { id: 46, name: "Lip Balm", price: 2.00, category: "Beauty", stock: 30 },
  { id: 47, name: "Face Cream", price: 8.00, category: "Beauty", stock: 14 },
  { id: 48, name: "Hand Wash", price: 3.50, category: "Beauty", stock: 22 },
  { id: 49, name: "Deodorant", price: 6.75, category: "Beauty", stock: 10 },
  { id: 50, name: "Makeup Kit", price: 25.00, category: "Beauty", stock: 5 },

  { id: 51, name: "Football", price: 12.00, category: "Sports", stock: 10 },
  { id: 52, name: "Cricket Bat", price: 20.00, category: "Sports", stock: 6 },
  { id: 53, name: "Tennis Racket", price: 18.00, category: "Sports", stock: 4 },
  { id: 54, name: "Basketball", price: 14.00, category: "Sports", stock: 8 },
  { id: 55, name: "Skipping Rope", price: 5.00, category: "Sports", stock: 15 },
  { id: 56, name: "Gym Gloves", price: 7.50, category: "Sports", stock: 12 },
  { id: 57, name: "Yoga Mat", price: 10.00, category: "Sports", stock: 9 },
  { id: 58, name: "Dumbbells", price: 25.00, category: "Sports", stock: 3 },
  { id: 59, name: "Water Bottle", price: 6.00, category: "Sports", stock: 20 },
  { id: 60, name: "Sports Bag", price: 15.00, category: "Sports", stock: 7 },

  { id: 61, name: "Rice Bag", price: 20.00, category: "Grocery", stock: 30 },
  { id: 62, name: "Cooking Oil", price: 10.00, category: "Grocery", stock: 25 },
  { id: 63, name: "Sugar Pack", price: 5.00, category: "Grocery", stock: 40 },
  { id: 64, name: "Tea Pack", price: 4.50, category: "Grocery", stock: 35 },
  { id: 65, name: "Milk Powder", price: 8.00, category: "Grocery", stock: 20 },
  { id: 66, name: "Biscuits", price: 2.50, category: "Grocery", stock: 50 },
  { id: 67, name: "Chocolate Box", price: 6.00, category: "Grocery", stock: 15 },
  { id: 68, name: "Instant Noodles", price: 1.50, category: "Grocery", stock: 60 },
  { id: 69, name: "Salt Pack", price: 1.00, category: "Grocery", stock: 45 },
  { id: 70, name: "Spices Set", price: 12.00, category: "Grocery", stock: 18 }
];
const product = document.querySelector('.product')
const btns = document.querySelector('.btns')


let category = ['all'];

products.map(item =>{
    if(!category.includes(item.category)){
        return category.push(item.category)
    }
})
category.map((item,index) =>{
    btns.innerHTML += `
    <button onclick='changecatagory(${index})'>${item}</button>
    `
})
// console.log(category);

let render = (arr) =>{
    product.innerHTML = "";
    arr.map(item => {
    product.innerHTML += `
    <div>
    <h1>${item.name}</h1>
     <p>${item.price}</p>
     <p>${item.category}</p>
     <p>${item.stock}</p>
     <button>Add to cart</button>
    </div>
    
    ` 
}) }

render(products)

function changecatagory(index){
    console.log(category[index]);
    
    if (index === 0){
        render(products)
        return
    }
    
    let filter = products.filter(
        (item) => item.category === category[index],
    )
    render(filter)
}
