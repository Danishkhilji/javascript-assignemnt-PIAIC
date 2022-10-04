var usernames =["admin","danish","hamza","awaus","yasir"];

usernames.forEach((names)=>
{
    if(names=="admin"){
        console.log("Hello admin, would you like to see a status report");
    }else{
        console.log(`Hello ${names}, thank you for logging in again`);
    }
})