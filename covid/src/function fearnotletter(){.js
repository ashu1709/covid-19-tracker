function fearnotletter(){

let alphabet ="abcdefghijkmnopqstuvwxyz";

let startingPoint = alphabet.indexOf(arr[i]);


for (let i = 0; i < str.length + 1; i++) {
    if (str[i] !== alphabet[startingPoint + i]) {
        return alphabet[startingPoint + i]; 
}
}

return undefined;
}

