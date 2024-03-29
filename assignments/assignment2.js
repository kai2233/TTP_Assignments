/*let numbers = [1, 2, 3, 4, 5];

//myEach
function myEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
      cb(arr[i]);
    }
  }
  myEach(numbers, (num) => {
    console.log(num);
  });

//myMap
function myMap(arr,cb){
  for (let i=0;i<arr.length;i++){
    cb(arr[i]*2);
  }
}


myMap(numbers,(num) =>{
  console.log(num);
});

//myFilter
function myFilter(arr, cb){
  for(let i=0;i<arr.length;i++){
    if(cb(arr[i])){
      console.log(arr[i]);
    }
  }
}

let isEven = (num)=> num%2===0;
myFilter(numbers,isEven);

//mySome
function mySome(arr, cb){
  for(let i=0;i<arr.length;i++){

    if(cb(arr[i])){
      return true;
    }
  }
  return false;
}
let hasEven = (num) => num % 2 === 0;
console.log(mySome(numbers,hasEven));

//myEvery
//let numbers = [2, 4, 6, 8, 10];
function myEvery(arr, cb){
  for(let i=0;i<arr.length;i++){
    if(!cb(arr[i])){
      return false;
    }
  }
  return true;
}
let allEven = (element) => element %2===0;
console.log(myEvery(numbers,allEven)); 

//myReduce
function myReduce(arr,cb,index){
  let x=arr[index];
  for(let i=index+1;i<arr.length;i++){
    x=cb(x,arr[i]);
  }
  return x;
}
let sum = (element,currentElement) => element+currentElement;
console.log(myReduce(numbers,sum,0));

//myIncludes
function myIncludes(arr,target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
      return true;
    }
  }
  return false;
}
const fruits = ['apple', 'banana', 'orange', 'grape'];

console.log(myIncludes(fruits,'banana')); 


//myIndexOf
function myIndexOf(arr, target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
      return i;
    }
  }
  return -1;
}
const fruits = ['apple', 'banana', 'orange', 'grape'];
console.log(myIndexOf(fruits,'orange'));


//myPush
function myPush(arr,element){
  arr[arr.length]=element;
  return arr.length;
}
let fruits = ['apple', 'banana'];
let length = myPush(fruits,'orange');
console.log(fruits); 
console.log(length); 


//myUnshift
function myLastIndexOf(arr,target){
  for(let i=arr.length-1;i>=0;i--){
    if(arr[i]===target){
      return i;
    }
  }
  return -1;
}
const animals = ['cat', 'dog', 'bird', 'dog', 'fish'];
console.log(myLastIndexOf(animals,'dog'));
console.log(myLastIndexOf(animals,'cow'));


//grabKeys
function grabKeys(object){
  let arr = [];
  for(key in object){
    arr.push(key);
  }
  return arr;
}
const student = {
  firstname: 'John',
  lastname: 'Doe',
  age: 22,
  gender: 'male'
};

console.log(grabKeys(student)); 


//grabValues
function grabValues(object){
  let arr=[];
  for(key in object){
    arr.push(object[key]);
  }
  return arr;
}
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
};
console.log(grabValues(car));


//The sum of a range
function range(start,end){
  let arr=[];
  for(let i=start;i<=end;i++){
    arr.push(i);
  }
  return arr;
}
function sum(arr){
  let num=0;
  for(let i=0;i<arr.length;i++){
    num+=arr[i];
  }
  return num;
}
console.log(range(1,10));
console.log(sum(range(1,10)));


//Reversing an array
function reverseArray(arr){
  let temp=[];
  for(let i=arr.length-1;i>=0;i--){
    temp.push(arr[i]);
  }
  return temp;
}
function reverseArrayInPlace(arr){
  let temp;
  let j=arr.length-1;
  for(let i=0;i<j;i++){
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    j--;
  }
}
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
*/