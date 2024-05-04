function filterWordsStartingWithA(words: string[]): string[] {
    const wordsStartingWithA: string[] = [];
    for (let i = 0; i < words.length; i++) {
        const firstLetter = words[i][0].toLowerCase();
        if (firstLetter === 'a') {
            wordsStartingWithA.push(words[i]);
        }
    }
    return wordsStartingWithA;
}
const wordsArray: string[] = ["apple", "banana", "apricot", "grape", "avocado"];
const wordsStartingWithA = filterWordsStartingWithA(wordsArray);
console.log("Words starting with 'a':", wordsStartingWithA);
