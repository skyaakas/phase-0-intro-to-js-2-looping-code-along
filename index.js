


//const newArray=["Guadalupe", "Ollie", "Aki"];





function writeCards(newArray,newEvent) {
  const newMessage = [];
  for (let i = 0; i < newArray.length; i++) {
    

    const message =  `Thank you, ${newArray[i]}, for the wonderful ${newEvent} gift!`;
    newMessage.push(message)
    debugger;
  }
  return newMessage;
  
  
}
writeCards(["Guadalupe","Ollie","Aki"],"surprise");

function countDown(i){
while (i>=0) {
  console.log(i);
  i--;
  
}
}
countDown(10);