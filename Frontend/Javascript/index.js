

/// what is the closure means its store the variabel in our memory. 
// lexicalscopign means whenever someone create a funtion and inside a funtion it will return a new function 
// that is called the closure fuction;


// here we are create to counter our funtion

// function parent(){
//     let count = 0
//     count++
//     console.log(count)
// }

// parent()
// parent()
// parent()
// parent()

// why we get one each and every time because whenever a funtion called it will reassign the value of count ==0
// that why reason the counter get a value again and again 1.


// 2. way.//
// // declare a variable outside of the function.
// let count = 0
// function parent(){
//     count++
//     console.log(count)
// }

// // count is decalre in a local scope or global scope some change the count all of the code will be destroyed
// count = "1234"
// parent()
// parent()
// parent()
// parent()
//  so now these kind of error in genereate whenever i try.

// 3 .way


// function parent(){
//     let count = 0
//     console.log(count)
//     function childFunction(){
//         count++
//         return count
//     }
//     return childFunction
// }

// let counting = parent()
// console.log(counting())
// console.log(counting())
// console.log(counting())
// console.log(counting())


// importantn points.
// whenever there;s a nested fution and the parent funtion
// return the child funtion without calling it , and child
// funtion has some dependencey to the parent scope (lexicla)
// scope it js will create a clousure. where it stores the 
// refreence of the parent dependency and by that the 
// child will still be able to acess the dependence 
// evern after the parent is destroyed.


///  Why the closure are important ?

// closure are used to encapsulation something or hiding
// something noOne can change it


// function Bank(amount){
//     let balance = 0
    
//     balance+=amount
//     console.log(balance)
// }
// Bank(100)
// Bank(200)
// now here a bank is not added a amount, it will not be
// updated successfully not be added the amount.

// let balance = 0
// function Bank(amount){
// //     balance+=amount
// //     console.log(balance)
// // }
// // balance= 10000000000034
// // Bank(100)
// // Bank(100)
// // Bank(100)
// // every can manipulate it, so in these code i want,
// // there is no data privacey like each and everyone
// // can update the coe and et the code.


// // using the clousure

// function Bank(){
//     let balance = 0
//     function deposit(amount){
//         balance+=amount
//         console.log(balance)
//     }
//     return deposit
// }
// const makingDeposit = Bank()
// makingDeposit(299)
// makingDeposit(29)


// // we can get the data like these now we can get the data with these kind of the privacy.
// let counter = (function () {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// })();
// counter();
// counter();
// 

// let arr = [1 , 3, 4]

// let value = arr.reduce((acc , curr)=>{
//     return acc = acc+curr
// },0)
// console.log(value)


// foreach loop is used for iteerating the code.
// let arr = [ 1, 3, 4, 5]
// arr.forEach((ele , i , arr)=>{
//     console.log (ele , i , arr)
// })

// filter method. how i create a filter method
// It is used to discount of all the product.
// array updated sucessfully!
// let arr = [1 ,2 ,3 ,4]
// let value = arr.map((ele , i  , arr)=>{
//     return ele*2
// })
// console.log(value)


// let arr = [1 , 3, 5, 6, 7, 8]
// let value = arr.filter((ele )=>{
//     return ele%2==0
// })
// console.log(value)

// // const products = [
// //   { name: "T-shirt", price: 500 },
// //   { name: "Shoes", price: 1500 },
// //   { name: "Cap", price: 200 },
// // ];

// // filter by price
// //price low to high

// // let sortedArray = products.sort((a , b)=>a.price -b.price) // product assednding in a accesnding order....
// // let decessdingorder = products.sort((a , b)=>b.price - a.price) // product shown in a decesnding order....
// // console.log(decessdingorder)
// // console.log(sortedArray)


// const product = [
//   {
//     "id": 1,
//     "name": "T-shirt",
//     "category": "Clothing",
//     "price": 500
//   },
//   {
//     "id": 2,
//     "name": "Jeans",
//     "category": "Clothing",
//     "price": 1200
//   },
//   {
//     "id": 3,
//     "name": "Laptop",
//     "category": "Electronics",
//     "price": 55000
//   },
//   {
//     "id": 4,
//     "name": "Mobile Phone",
//     "category": "Electronics",
//     "price": 25000
//   },
//   {
//     "id": 5,
//     "name": "Wrist Watch",
//     "category": "Accessories",
//     "price": 2500
//   },
//   {
//     "id": 6,
//     "name": "Sneakers",
//     "category": "Footwear",
//     "price": 3000
//   },
//   {
//     "id": 7,
//     "name": "Sandals",
//     "category": "Footwear",
//     "price": 1000
//   }
// ]

// let narr = product.filter((ele)=>{
//     return ele.category == "Clothing"
// })

// // sorting by price high to low

// let accendingPrice = narr.sort((a , b)=>b.price-a.price)
// console.log(accendingPrice)
// let arr  = narr.reduce((acc  , curr)=>{
// return acc + curr.price
// },0)
// console.log(arr)