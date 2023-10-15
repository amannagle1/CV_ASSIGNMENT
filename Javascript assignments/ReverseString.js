
function reverse(string , newString) {
    return string.split(newString).reverse().join(newString)
}

let string=" This Is a Sunny Day ";
let output=reverse(string, "");

let newOutput=reverse(output, " ");

console.log(newOutput);