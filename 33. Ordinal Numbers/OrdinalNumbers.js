var numbers = [1,2,3,4,5,6,7,8,9]





numbers.forEach((num)=>{
    if(num == numbers[0]){
        console.log(`${num}st`);
    }else if(num == numbers[1]){
        console.log(`${num}nd`);
    }else if(num == numbers[2]){
        console.log(`${num}rd`);
    } else{
        console.log(`${num}th`);
    }
    
})