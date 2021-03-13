function countDown(num){
        let counter = setInterval(function(){
        num--;
        if(num <= 0){
            clearInterval(counter);
            console.log("Done!");
            }
        else{
            console.log(num);
            }
    },1000)
}