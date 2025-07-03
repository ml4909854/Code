// // // // // Now i am here because i am leanrn a very important opic
// // // // // taht is the promise.
// // // // //why we have a need. javascript is a single threded programming
// // // // // language. when we are call a api. then we conse it suddelny not
// // // // // resolve both state because it diredtly go the pending state.
// // // // // that why promise show a pending state. // hwo i
// // // // // resolve these things we are use a pending state.

// // // // // why we have a need of promise. when user try to access a some
// // // // // page user can wait if you internedt is 3g the fully webpage taking
// // // // // a time 30sec but this is not a good user experience
// // // // // user 5g internedt === > resolve.
// // // // // user 5h resolve it take some time but promise is rosolved
// // // // // user pending > pending < pend after htat the data will resolved.

// // // // // herer is one example related to the promise

// // // // const myPromise = new Promise((resolve, reject) => {
// // // //   // suppose we call a api inside here
// // // //   // after some seconds the api will give the result
// // // //   const apiUrl = true; // means this apiUrl are on a working state
// // // //   setTimeout(() => {
// // // //     if (apiUrl) {
// // // //       resolve("becaue content is not defind");
// // // //     } else {
// // // //       reject("cancelled!");
// // // //     }
// // // //   }, 5000);
// // // // });

// // // // // javascript is a singLe threaded lanuage that means it is
// // // // // not wait 5 sec and it is directly comes to it orignal
// // // // //console
// // // // // how i detali with these pending data.

// // // // myPromise
// // // //   .then((param) => {
// // // //     // then takes one argument params. in whcich params whatever the data prsendt in the resovlve that date render itno the console

// // // //     console.log(param);
// // // //   })
// // // //   .catch((param) => {
// // // //     //.catch works on a resolved state.
// // // //     console.log(param);
// // // //   })
// // // //   .finally(() => {
// // // //     // .finally works on a both state like reqeuest is reolved or not resolved
// // // //     console.log("run on a both request");
// // // //   });

// // // // // now here we are render some dat

// // // // let db = [
// // // //   {
// // // //     id: 1,
// // // //     user: "mahesh",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     user: "sangeeta",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     user: "priyanka",
// // // //   },
// // // // ];

// // // // const apiPromise = new Promise((resolve, reject) => {
// // // //   const apiUrl = true;
// // // //   setTimeout(() => {
// // // //     if (apiUrl) {
// // // //       resolve(db);
// // // //     } else {
// // // //       reject("404 not found!");
// // // //     }
// // // //   }, 3000);
// // // // });

// // // // apiPromise.then((response)=>{
// // // //         response.forEach(element => {
// // // //             console.log(element.user)
// // // //         });
// // // // }).catch((response)=>{
// // // //     console.log(response)
// // // // }).finally(()=>{
// // // //     "data fetched."
// // // // })

// // // // // now here this is the full exercise related to the promise

// // // // promise chaning

// // // const uploadFile = (callback) => {
// // //   setTimeout(() => {
// // //     console.log("file is uploaded");
// // //     callback();
// // //   }, 1000);
// // // };
// // // const readFile = (callback) => {
// // //   setTimeout(() => {
// // //     console.log("file is read");
// // //     callback();
// // //   }, 1000);
// // // };
// // // const analyzeFile = (callback) => {
// // //   setTimeout(() => {
// // //     console.log("file is analyze");
// // //     callback();
// // //   }, 1000);
// // // };
// // // const compileFile = (callback) => {
// // //   setTimeout(() => {
// // //     console.log("file is compile");
// // //     callback();
// // //   }, 1000);
// // // };

// // // // how i create a promise doom. how

// // // uploadFile((callback) => {
// // //   readFile((callback) => {
// // //     analyzeFile((callback) => {
// // //       compileFile((callback) => {
// // //         setTimeout(() => {
// // //           console.log("all process completed");
// // //         }, 1000);
// // //       });
// // //     });
// // //   });
// // // });

// // // // this is called the promess Doom .
// // // // meaning call funtion one after another 
// // // // this situation is call the promise of DOOM


// // // Now here we have resolve a behaviour of promise chaning

// // const uploadedFile = (() => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log("file updload")
// //       resolve("file uploaded");
// //     }, 1000);
// //   });
// // });

// // const readFile = (() => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log("Fileread")
// //       resolve("file read");
// //     }, 1000);
// //   });
// // });

// // const analyzeFile = (() => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log("fiel analyexed")
// //       resolve("file analyzed");
// //     }, 1000);
// //   });
// // });

// // const compileFile = (() => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log("File compiled");
// //       reject("error to getting a file");
// //     }, 1000);
// //   });
// // });


// // uploadedFile()
// // .then(()=>readFile())
// // .then(()=>analyzeFile())
// // .then(()=>compileFile())
// // .then(()=>console.log("all process compleste"))
// // .catch((err)=>{
// //     console.log(err)
// // })


// // this process is called the promise chainine. A promise have also a 
// // three state reolve reject pending.
// // ther is tow method also here realted to the prmise.

// // promise.all with the help of promise.all we can all the promise simulatinely we passed
// // all the promise in an array format.

// // ruts multiple promises in parallel '
// // watist for all of them to finish
// // returs a new promise with all resusts in an arrya


// // promise.all

// const burger = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("burder order")
//     } , 1000)
// })

// const pizza = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("pizza order")
//     } , 1000)
// })

// const momos = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("momos order")
//     } , 1000)
// })

// // it return a new promise. And take all promise in parallely

// Promise.all([burger , pizza , momos])
// .then((response)=>console.log(response))
// .catch((error)=>console.log(error))

// // if there is error in one promise all promise will be break.



// Promise.race()
// runs multiple promises in parallel
// does not wait for other.
// promise.race() == means who wins the race. we have deliverd a multople food items.
// now see who is deliverd first

const burger = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("burger deliverd")
    }, 2002);
})

const pizza = new Promise((resolve , reject)=>{
    setTimeout(() => {
         reject("error to deliver pizza")
    }, 1000);
})

const momos = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("mosmo deliverd first")
    }, 4999);
})

Promise.race([burger , pizza , momos])
.then((response)=>console.log(response))
.catch((error)=>console.log(error))