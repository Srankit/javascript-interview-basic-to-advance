const myPromise = new Promise((res, rej)=>{
    if(5%2==0){
        res("Success")
    }else{
        rej("Error......!")
    }
});

//Using Promises**************
/*myPromise
.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("promise completed.....")
})

// Using .catch()**********************

fetch('https://api.example.com/data')
.then(response=> response.json())
.catch(error=> console.log('faild to fetch data...', error));


//Promise.all()*************Advanced Promise Features


Promise.all([promise1, promise2, promise3])
.then((results)=>{
     // results is an array of each promise's result
    console.log(results);
})
.catch((error)=>{
    // If any promise is rejected, catch the error
    console.log("A promise failed to resolve", error);
});


//Promise.race()*********************

Promise.race([promise1, promise2, promise3])
.then((value)=>{
// Value of the first resolved promise
console.log(value)

})
.catch((error)=>{
    //Error of the first rejected promise
     console.log(error);
})

//Promise.allSettled()***************

promise.allSettled([promise1, promise2, promise3])
.then((results)=>{
    results.forEach((result)=> console.log(result.status));
});

//Promise.any()****************************
Promise.any([promise1, promise2, promise3])
.then((value)=>{
    console.log(value)
})
.catch((error)=>{
console.log('All promises were  rejected');
});

//Fetching Data from an API************

fetch('https://api.example.com/data')
.then(response =>response.json())
.then(data=> console.log(data))
.catch(error=> console.log('Fetch error:', error));


//Wrapping Callback-based APIs***************

const fs= require('fs').promise;

fs.readFile('path/to/file.txt', 'utf8')
.then(data=> console.log(data))
.catch(error=>console.error('Read file error:', error));

*/
//Promises vs. Async/Await****************

async function fetchData(){
    try{
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data= await response.json();
        console.log(data);
    }catch(error){
        console.log('Fetch error',error);
    }

}
fetchData()