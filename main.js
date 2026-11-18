// function PowerA234(a,b,c){
//     if (a !== undefined && b !== undefined && c !== undefined) {
//         return [a**2,a**3,a**4,b**2,b**3,b**4,c**2,c**3,c**4];
//     }else if (a !== undefined && b !== undefined) {
//         return [a**2,a**3,a**4,b**2,b**3,b**4];
//     }else{
//         return [a**2,a**3,a**4];
//     }  
// }

// console.log(PowerA234(2,3,5)); 
//3
// function mean(a,b,c,d){
//     if (a !== undefined && b !== undefined && c !== undefined && d !== undefined) {
//         let l = {
//             "O'rta arifmetiklar": [a+b/2,a+c/2,a+d/2],
//             "O'rta geometriklar": [Math.sqrt(a*b),Math.sqrt(a*c),Math.sqrt(a*d)]
//         }
//         return l;
//     }else if (a !== undefined && b !== undefined && c !== undefined) {
//         let l = {
//             "O'rta arifmetiklar": [a+b/2,a+c/2],
//             "O'rta geometriklar": [Math.sqrt(a*b),Math.sqrt(a*c)]
//         }
//         return l;
//     }
//     else if (a !== undefined && b !== undefined) {
//         let l = {
//             "O'rta arifmetiklar": [a+b/2],
//             "O'rta geometriklar": [Math.sqrt(a*b)]}
//         return l;
//     }
//     else{
//         return "Eng kamida ikkita son kiriting";
//     }
// }

// console.log(mean(2,4,6,8));
//4
// function triangle(a){
//     let c = {
//         "Perimetr": 3*a,
//         "Yuzasi": (Math.sqrt(3)/4)*a**2
//     }
//     return c;
// }

// console.log(triangle(4));
//5
// function RectPS(x1,x2,y1,y2){
//     let perimeter = 2*(Math.abs(x2-x1) + Math.abs(y2-y1));
//     let area = Math.abs(x2-x1) * Math.abs(y2-y1);
//     let javob = {
//         "Perimetr": perimeter,
//         "Yuzasi": area
//     }
//     return javob;
// }

// console.log(RectPS(1,4,2,5));
//6
function DigitCountSum(a){
    let matn = String(a);
    let count = matn.length;
    let sum = 0;
    for (let i = 0; i < matn.length; i++) {
        sum += parseInt(matn[i]);
    }
    let javob = {
        "Raqamlar soni": count,
        "Raqamlar yig'indisi": sum
    }
    return javob;
}
console.log(DigitCountSum(1234567890));



