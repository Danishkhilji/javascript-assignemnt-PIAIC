var friends= ["Junaid","faraz","awais","noman","ali"];

console.log("Hello dear, we have some other friends also they are joining us at dinner today");

friends.unshift("Yasir asghar")
friends.splice(3,0,"Munir")
friends.push("Daniyal")
for(var i =0; i<friends.length ; i++){
    console.log(`Hello ${friends[i]}, I am inviting you for a dinner at my home tonight` );
}