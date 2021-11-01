// Functions
function addToCart(productName = "Elma", quantity) {
    console.log("Sepete Eklendi : " + productName + " Adet: " + quantity)
    
}

addToCart("Ekmek", 4)
addToCart("Yumurta", 30)
addToCart("Karpuz", 2)

// Arrow Function
let sayHello = () => {
    console.log("Hello JavaScript!")
} 

sayHello()

// Declare function to variable
let sayHello2 = function () {
    console.log("Hello")
}

sayHello2()


// Objects

//Object 1
let product1 = {
    productName: "Telefon",
    unitPrice: 4000,
    quantity: 10
}

//Object 2
let product2 = {
    productName: "Tablet",
    unitPrice: 2500,
    quantity: 15
}

function addToCart2(product) {
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
    
}

// Product 1
addToCart2(product1)

console.log("-------------------------------")

// Product 2
addToCart2(product2)

// Reference Type
let product3 = {
    productName: "Telefon",
    unitPrice: 4000,
    quantity: 10
}

let product4 = {
    productName: "Telefon",
    unitPrice: 4000,
    quantity: 10
}
product3 = product4
product3.productName = "Süpürge"
console.log(product4.productName)

// Primitive Type
let num1 = 10
let num2 = 20
num1 = num2
num2 = 100
console.log(num1)

function addToCart3(products) {
    console.log(products)
}

let products = [
    {
        productName: "Telefon",
        unitPrice: 4000,
        quantity: 10
    },
    {
        productName: "Tablet",
        unitPrice: 2500,
        quantity: 15
    },
    {
        productName: "Süpürge",
        unitPrice: 1500,
        quantity: 20
    }
]

addToCart3(products)

function add(...numbers) { // Rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}

add(20, 30)
add(20, 30, 40)
add(20, 30, 40, 50)

let numbers = [
    30, 40, 5, 150, 300, 75
]
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    {
        name: "İç Anadolu",
        population: "20M"
    },

    {
        name: "Marmara",
        population: "30M"
    },

    {
        name: "Karadeniz",
        population: "15M"
    },

    [
        [
            "Ankara",
            "Konya"
        ],

        [
            "İstanbul",
            "Bursa"
        ],

        [
            "Artvin",
            "Trabzon"
        ]
    ]
]

console.log("Bölge: " + icAnadolu.name + " Nüfus: " + icAnadolu.population)
console.log(marmaraSehirleri)

let newProductName, newUnitPrice, newQuantity

({productName : newProductName, unitPrice : newUnitPrice, quantity : newQuantity} = {
    productName: "Telefon",
    unitPrice: 4000,
    quantity: 10
})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)