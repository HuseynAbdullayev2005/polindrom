function checkPalindrome(number) {
    let x = number;
    
    
    
    let y = 0;
while (number > 0) {
        const k = number % 10;
        y = y * 10 + k; 
        number = Math.floor(number / 10);
    }

if(x===y){
    console.log("polindrom");
    
}
else{
    console.log("polindrom deyil");
    
}
}
console.log(checkPalindrome(11));


