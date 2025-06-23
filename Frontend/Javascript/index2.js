
/// what is the use of the this keyworkd. when the thsi keyword is prendent in the funtion i will alsys hown the 
// windown object. when the this keyword is presend in the object it will showes the parent is an object , this 
// keyword defined obj is a patent object of these keyword

// default binding when the this keyword is called inside in the funtion this keyword create a default binding
// of the global object. 

// implicit binding
// whenever this keyword is called it will represent that this keyword is present it will redirect throught the 
// when i call a useur inside a object method. when thry to fecth the user in console. it will search a user 
// in a global object. this varible helps to creat a object to the parent object not we can get a value of theis 
// // by the help of this.user. arrown funtion refres as a window object. but inside the ojbect methods. when i write
// // a arrow funtions it can take a help of the of scorpe of its a parent object and we can get a value


// // call methods

// let rest1 = {
//     food:["south indian" , "NorthIndain"]
// }

// let rest2 ={
//     food:[
//         "chinees0" , "japaneese"
//     ]
// }
// let rest3 ={
//     food:["korean" , 
//         "muglai"
//     ]
// }


// function printsMenu(){
//     this.food.forEach(element => {
//         console.log(element)
//     });
// }

// function greeetResturant(restuarant){
//        printsMenu.call(rest3)
// }

// greeetResturant()


// function greet(greeetMessage , sign){
//  console.log(this.user , greeetMessage , sign)
// }

// let obj1 = {
//     user:"mahesh"
// }
// let obj2 ={

//     user:"priyanka"
// }
// let obj3 = {
//     user:"ankit"
// }

// greet.call(obj1 , "Goodnight" , '!!') 
// greet.apply(obj2, ["GoodMorning" ,"!!"])