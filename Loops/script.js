//Q1. Wap to find the sum of the natural number 1 to n  

function sumCheck(n){
    let sum=0;
    //number of iteration is defined thus using for loop
    for(let x=1;x<=n;x++){
        sum+=x;
    }
    //console.log(sum)
    return sum;
}
sumCheck(5)

//Sum of digits of a number

function sumOfDigits(x){
  let sum = 0;
  ///No of times for iteration is not predfined thus using for loop
  while(x>0){
    sum += x%10;
    x=Math.floor(x/10);
  }
  return sum;
}

console.log(sumOfDigits(12585))

//Count the number of digits in number
function numDigits(x){
    let count =0;

    //MAth.abs() used to find the absolute number so that if there is any negative integer the we can atleast get the absolute value 
    //which is equivalent to the positve value of negative integer

    //do_while loop is used since we want to run the loop once before codition, to get Math.abs() result.
    do{
        x = Math.abs(x);
        count+=1;
        x = Math.floor(x/10);
    }while(x>0);
    return count;
}
console.log(numDigits(-565661235))
//Check a number is Palindrome or not
var isPalindrome = function(x) {
   
    var rev = +(x.toString().split('').reverse().join(""));
    return x===rev
 };
isPalindrome(121);

//Factorial of a number

var factorialNum=function(n){
    let res=1;
    if(n===0) return sum=1;
    for(let i=2;i<=n;i++){
        res=res*i;
    }
    return res;
}
console.log(factorialNum(5))

//find the prime numbers
var isPrime=function(n){
   if(n===2&&n<2) return true;
   if(n%2===1){
    return true;
   }else{
    return false;
   }
}

console.log(isPrime(30))