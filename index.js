// Code your solutions in this file

const arr = ["Charlie", "Samip", "Ali"]

function writeCards(arr){
    for (i = 0; i < arr.length ; i++){
        
          console.log( `Thank you, ${arr[i]}, for the wonderful birthday gift!,`);
       
       } return writeCards
   
}
writeCards(arr);


function countDown (){
    let countdown = 10;
    while (countdown >= 0){
        console.log(countdown--);
    }
}
countDown();