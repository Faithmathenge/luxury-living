const pi=3.142

function area( r) {
return pi _ r _ r
}

function perimeter(r) {
return 2 _ pi _ r
}

function cicre(r) {
const area = areaCircle(r);
const perimeter= perimeterCircle(r)
console.log(`for a circle of r $(r) area $`)
}

let clicked =0;

function increment(){
clicked = clicked + 1
console.log("clicked value is ", clicked)
}

function decrementt(){
clicked = clicked - 1
console.log("clicked value is ", clicked)
}

function updateClickValue(){
document.getElementById("click_value"). innertext = clicked;
}
