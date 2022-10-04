var current_users =["danish","HAMZA","Awais","yasir","junaid"]
var new_users =["DANISH","hammad","faraz","awais","noman"]

var current_users = current_users.map((user)=>{
    return user.toLocaleLowerCase()
}) 

new_users.forEach((N_user)=>{
     if(current_users.includes(N_user.toLocaleLowerCase())){
         console.log("User name alread exist try with another name");
     }else{
         console.log(`Welcome ${N_user}`);
     }
  })