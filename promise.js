//First example of promise with arrow function.

/*console.log("Lets Learn about Promises");

let prom1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Hii my name is Mahesh");
        resolve("Mahesh")
    },3000)
})

prom1.then((a)=>{
    console.log(a)
})*/


//Lets try with simple function

/*console.log("Promises with simple Function")

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is completed")
        resolve();
    },1000)
}) 

promiseOne.then(function(){
    console.log("Promise Consumed")
})*/


//Data comsupstion

//let promiseThree = new Promise(function(resolve, reject){
  //  setTimeout(function(){
    //    resolve({username:"Mahesh8", email:"mahesh@gmail.com"})
   // }, 3000);
//})

//promiseThree.then(function(user){
  //  console.log(user)
//})


//.then(), .catch() and .finally() lets learn how its work.

/*let promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username: "Mahesh", email:"mahesh@123"});
        }else{
            reject("Error occured");
        }
    }, 2000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolve od rejacted. Good Day")
})*/


// using Asyn, Await insted of .then(), .catch() and .finally

let promiseFive = new Promise ((resolve, reject)=>{
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "Mahesh8", Email: "@gmail.com"})
        }else{
            reject("Error Occured")
        }
    },1000);
})

async function consumePromise() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromise()