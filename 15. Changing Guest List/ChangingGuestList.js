var friends= ["Junaid","faraz","awais","noman","ali"];

console.log(`${friends[3]} is not coming for dinner due to an emergency`);
friends.splice(3, 1, "Hamza");

for(var i =0; i<friends.length ; i++){
    console.log(`Hello ${friends[i]}, I am inviting you for a dinner at my home tonight` );
}