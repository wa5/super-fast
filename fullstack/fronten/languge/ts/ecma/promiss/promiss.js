var shuibpromis = new Promise(function (fulfull, notfullfil) {
    var isshubchalu = false;
    setTimeout(function () {
        if (!isshubchalu) {
            fulfull('burgaer khalatin');
            console.log('fullfill');
        }
        else {
            console.log();
        }
        notfullfil('no barger no salry');
    }, 2000);
});
console.log(shuibpromis);
