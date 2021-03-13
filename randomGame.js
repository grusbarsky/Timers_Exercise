function randomGame(){
    let counter = 0;
    let num;
    let guess = setInterval(function(){
        num = Math.random();
        counter++;
        if(num > .75){
            clearInterval(guess);
            console.log(`It took ${counter} try/tries)`);
        }
    },1000)
}