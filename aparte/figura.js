function triangulo(alto) {
    s = "";
    for (let i = 0; i <= alto; i++) {
        for (let j = 1; j <= i; j++) {
            s = s + "*";
        }
        s = s + "\n";
    }
    return s;
}

console.log(triangulo(8));