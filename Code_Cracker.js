function encrypt() {
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var encry = ['£', '*', '%', '&', '<', '>', '!', ')', '"', '(', '@', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

     function encrypt (message, type) {
            let char = message.split("");
            let output = [];
            if (type == "decrypt") {
                for (let index = 0; index < char.length; index++) {
                    let findIndx = encry.indexOf(char[index]);
                    if (findIndx != null || undefined) {
                        output.push(alpha[findIndx]);
                    } else {
                        ; eer
                        continue;
                    }
                }
            }
            if (type === "encrypt") {
                for (let index = 0; index < char.length; index++) {
                    let findIndx = alpha.indexOf(char[index]);
                    if (findIndx != null || undefined) {
                        output.push(encry[findIndx]);
                    } else {
                        continue;
                    }
                }
            }

            return output.join("");
        };
}
console.log(encrypt(" chiijioke", "decrypt"));
