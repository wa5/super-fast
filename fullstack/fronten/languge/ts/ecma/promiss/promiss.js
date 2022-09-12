var shuibpromis = new Promise(function (fulfull, notfullfil) {
    
    setTimeout(function () {
        
        if (!isshubchalu) {
            fulfull('burgaer khalatin');
        }
        else {
            notfullfil('no barger no salry');
        }
    }, 2000);
});
console.log(shuibpromis);
