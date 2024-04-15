const number=parseInt(prompt("Enter a number"));

let sum=0;


let temp=number;

while(temp>0){

    let remainder=temp%10;
    sum=sum*10+remainder;

    temp=parseInt(temp/10);

}


if(sum===number)

{
    console.log("Palindrome number");
}


else{

    console.log("Not palindrome number");
}