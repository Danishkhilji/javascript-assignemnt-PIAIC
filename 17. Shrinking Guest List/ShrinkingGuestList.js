var friends= ["Junaid","faraz","awais","noman","ali","Yasir"];

console.log("Hello dears, due to shortage of space i can only invite two people today");
 
friends.slice().reverse()
    .forEach((name)=>{
        if(friends.length==2){
            console.log(`Hello ${name}, unfortunately other friends can not join us but still we well be together at dinner` );
        }else{
            console.log(`Hello ${name}, I am sorry i can not entertain you today i wish we will be togather in future`);
            friends.shift();    
        }
        });
