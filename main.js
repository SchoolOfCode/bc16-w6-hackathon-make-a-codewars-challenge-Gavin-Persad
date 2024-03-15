/* ## The Kata

Can you finish in three darts? When given your current score in darts, can you work out if it is possible to finish the game with three darts? In darts, you start with a score of 501. Each time you hit a board section, the score of that section is subtracted from your total score. You need to reach 0 first but cannot exceed it. Therefore, it is important to determine if you can finish the game from your current score. This is your aim. When given your current score, write a function that will either return the score (if it is a possible finish) or "No finish possible" (if you cannot finish). Additionally, your last dart must hit a special section (any double, triple, bullseye, or outer bull). The inputted scores will be between 501 and 1.

### Sections of the dart board

| Singles | Doubles | Triples | Centre |
| ------- | ------- | ------- | -------- |
| 1       | D1      | T1      | 50 (bullseye) |
| 2       | D2      | T2      | 25 (outer bull) |
| 3       | D3      | T3      |
| 4       | D4      | T4      |
| 5       | D5      | T5      |
| 6       | D6      | T6      |
| 7       | D7      | T7      |
| 8       | D8      | T8      |
| 9       | D9      | T9      |
| 10      | D10     | T10     |
| 11      | D11     | T11     |
| 12      | D12     | T12     |
| 13      | D13     | T13     |
| 14      | D14     | T14     |
| 15      | D15     | T15     |
| 16      | D16     | T16     |
| 17      | D17     | T17     |
| 18      | D18     | T18     |
| 19      | D19     | T19     |
| 20      | D20     | T20     | */

export function canIFinish(currentScore) {
    // Array of possible dart finishes
    const finishes = [
        170, 167, 164, 161, 160, 158, 157, 156, 155, 154, 153, 152, 151, 150,
        149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136,
        135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122,
        121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108,
        107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92,
        91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74,
        73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60
    ];

    // Find the highest finish less than or equal to the current score
    for (let i = 0; i < finishes.length; i++) {
        if (finishes[i] <= currentScore) {
            return finishes[i];
        }
    }

    return "No finish possible";
}