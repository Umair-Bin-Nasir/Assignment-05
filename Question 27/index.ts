function formatNames(names: string[]): string {
    if (names.length === 0) {
        return "";
    } else if (names.length === 1) {
        return names[0];
    } else if (names.length === 2) {
        return names.join(" and ");
    } else {
        const lastTwoNames = names.slice(-2).join(" and ");
        const remainingNames = names.slice(0, -2).join(", ");
        return `${remainingNames}, ${lastTwoNames}`;
    }
}
const namesArray: string[] = ["Alice", "Bob", "Charlie", "David"];
const formattedString = formatNames(namesArray);
console.log("Formatted names:", formattedString);