//problem 1 
function max(n1,n2){
    let max=0;
    let arr =[n1,n2];
        if(arr[0]>max){
            max = arr[0];
        }else{
            max = arr[1];
        }
    return max;
}
console.log("Maximum of the two numbers is "+ max(7,10));


//Problem 2
function maxOfThree(n1,n2,n3){
    let arr = [n1,n2,n3];
    let max = 0;
    for(let ele of arr){
   //     console.log(ele);
        if(ele>max){
            max = ele;
        }
    }
    return max;
}
console.log("Maximum of the three numbers is "+ maxOfThree(80,56,92));


//Problem 3
function isVowel(char){
    let vowelarr = ["a","e","i","o","u"];
    return (vowelarr.indexOf(char)> -1);
}
console.log("Is the character a Vowel " + isVowel("f"));


//Problem 4
function sum(arr){
    let sum = 0;
    for(let ele of arr){
        sum = sum + ele;
    }
    return sum;
}
console.log(sum([1,2,3,4]));

function multiply(arr){
    let prod = 1;
    for(let ele of arr){
        prod = prod * ele;
    }
    return prod;
}
console.log(multiply([1,2,3,4]));


//Problem 5
function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse("How was your day"));

//Problem 6
function findLongestWord(arr){
    let longest=null;
    for(let ele of arr){
        if(longest == null){
            longest = ele;
        }
        else if(ele.length>longest.length){
            longest = ele;
        }
    }
    return longest;
}
console.log(findLongestWord(["Origami","Apple","Keyboard","Gloves"]));

//Problem 7
function filterLongWords(arr,i){
    let finalarr = [];

    for(let ele of arr){
        if(ele.length>i){
            finalarr.push(ele);
        }
    }
    return finalarr;
}
console.log(filterLongWords((["Summer","Spring","Winter","Autumn","Monsoon"]),6));

//Problem 8
function computeSumOfSquares(arr){
    let result = 0;
    result = arr.reduce((a, b) => a = a + Math.pow(b, 2));
    return result;
}
console.log(computeSumOfSquares([2,3,4,5]));

//Problem 9
function printOddNumbersOnly(arr){
    let oddarr = [];

    for(let ele of arr){
        if(ele %2 != 0){
            oddarr.push(ele);
        }
    }
    return oddarr;
}
console.log("Odd numbers in the array are: "+printOddNumbersOnly([10,9,8,7,6,5,4,3,2,1]));

//Problem 10
function computeSumOfSquaresOfEvensOnly(arr){
    let sum = 0;
    for(let ele of arr){
        if(ele%2 == 0){
            sum = sum + (ele * ele);
        }
    }
    return sum;
}
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5,6]));

//Problem 11

let arr11a = [1,2,3,4];
let sum11 = arr11a.reduce(function(a,c){
    return a+c;
});
console.log(sum11);

let prod11 = arr11a.reduce(function(a,c){
    return a*c;
})

console.log(prod11);

//Problem 12

function findSecondBiggest(arr){
    let firstbiggest = arr[0];
    let secondbiggest = arr[1];

    if(firstbiggest<secondbiggest){

        temp = firstbiggest;
        firstbiggest = secondbiggest;
        secondbiggest = temp;

    }

    for(let i in arr){
        if(i>1){
            if(arr[i]>firstbiggest){
                secondbiggest = firstbiggest;
                firstbiggest = arr[i];
            }else if(arr[i]>secondbiggest){
                secondbiggest = arr[i];
            }
        }
    }
    return secondbiggest;

}
console.log(findSecondBiggest([20,32,54,5,43,12,90]));

    //Problem 13
    function printFibo(len,num1,num2){
        let fibarr = [];
        let sum = 0;

        fibarr = [num1,num2];

        for (let i = 2; i < len; i++) {
            sum = num1 + num2;
            fibarr[i] = sum;
            num1 = num2;
            num2 = sum;
        }
        return fibarr.filter(function() {
            return true;
        });
    }
    console.log(printFibo(10,0,1));


    
    
    