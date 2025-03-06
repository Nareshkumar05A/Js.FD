let score=1000
console.log("Your bill amout is Rs."+score);

function convert()
{
    const cm=Number(document.getElementById("input").value)
    const inchval=cm/2.54
    const result=document.getElementById("result")
    result.innerHTML=inchval.toFixed(2) + "inches"
}
function franit()
{
    const celcius = Number(document.getElementById("input").value);
    const fran = (celcius * 9/5) + 32;
    const ans = document.getElementById("ans");
    ans.innerHTML = fran.toFixed(2) + " Fahrenheit";
}

//Template leteral

let fn="Naresh"
let ln="Kumar"
let initial="A"

console.log(fn+" "+ln+" "+initial)
console.log(`${fn} ${ln} ${initial}`)
let msg=`Naresh
kumar A`
console.log(msg)

//String
let str="i am naresh kumar from thiruvannmalai"
console.log(str)
console.log(str.substring(2,6))
console.log(str.slice(0,9))

let st=str.replace('naresh',"kumar")
console.log(st)

let bill=`RS'10`
let b=bill.padEnd(7,'0')
console.log(b)

//Arrays

let arr=[1,2,3,4,5,6,7]
console.log(arr)

let arr1=[1,2,3,4,5,6,7,[10,8]]
console.log(arr1[7][1])

let matrix=[[1,2,3],[5,6,7],[8,9,0]]
console.log(matrix)
console.log(matrix[2][1])

//Array method

let Array=['a','b','c','d','e']

//push add element to the end

Array.push('f')
console.log(Array)

Array.pop('b')
console.log(Array)
Array.shift()
console.log(Array)
Array.unshift('a')
console.log(Array)

//Delete or splice

arr.splice(2,3)
console.log(arr)
arr.splice(2,1,'3')
console.log(arr)

//Ending index not included 
let d=arr.slice(1,2)
console.log(d)

//reverse

arr.reverse()
console.log(arr)


//Array to string
cdlet strw=Array.join()
console.log(strw)

//String to Array
let Arrays="a,b,c,d,e"
let a1=Arrays.split(',')
console.log(a1)

//join two array
let a=[1,2,3]
let b1=[4,5,6]
let ab1=[a,b1]
console.log(ab1)

let joinarr=a.concat(b1)
console.log(joinarr)

let joia=[...a,...b1]
console.log(joia)

