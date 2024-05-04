function findDuplicates(arr: any[]): void {
    const duplicatesMap: Map<any, number> = new Map();
    for (const item of arr) {
        if (duplicatesMap.has(item)) {
            duplicatesMap.set(item, duplicatesMap.get(item)! + 1);
        } else {
            duplicatesMap.set(item, 1);
        }
    }
    duplicatesMap.forEach((count, item) => {
        if (count > 1) {
            console.log(`${item} is duplicated ${count} times`);
        }
    });
}
const array: any[] = [1, 2, 2, 3, 4, 4, 4, "apple", "banana", "banana", "apple", "banana"];
findDuplicates(array);