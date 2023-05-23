//condition ? trueExpression : falseExpression

const score = 90;
let scoreRating

if (score > 80) {
    scoreRating = "excelent";

} else {
    scoreRating = "do better";
}

console.log(scoreRating);

scoreRating = score > 80 ? "excelent" : "do better";
console.log(scoreRating);
