function encrypt() {
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var encry = ['£', '*', '%', '&', '<', '>', '!', ')', '"', '(', '@', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

    let output = "";

    let index = alpha.indexOf("g", "h");
    output += encry[index];
    return output;
}
console.log(encrypt()); 
