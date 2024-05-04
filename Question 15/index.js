"use strict";
function countExceededAndBelow(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let exceededCount = 0;
    let belowCount = 0;
    for (const score of scores) {
        if (score > maxScore) {
            maxScore = score;
        }
        if (score < minScore) {
            minScore = score;
        }
    }
    for (const score of scores) {
        if (score > maxScore) {
            exceededCount++;
        }
        if (score < minScore) {
            belowCount++;
        }
    }
    console.log("Number of times score exceeded maximum:", exceededCount);
    console.log("Number of times score fell below minimum:", belowCount);
}
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countExceededAndBelow(scores);
