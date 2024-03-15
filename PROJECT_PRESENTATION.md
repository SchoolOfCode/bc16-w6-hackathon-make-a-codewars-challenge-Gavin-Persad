# Darts to finish

## Disney Ideation
    Dreams
    1.snooker scorer - take in array of coloured balls and work out the score of the run based on the points assigned to each ball
    2.darts to finish - is there a possible way to finish a game of darts with 3 darts from your current score
    3.how many subs left - the new substituion rule caused confusion in Arsenals champions league game on tuesday. Make an function to show how many subs and breaks in play are left
    4.poker, best possible hand - from the five community cards that are shown (this will be inputted as arrays), what is the best two cards you could have in your hand.

### Realist
    1. Too many variables (ie. fouls)
    2. possible
    3. too confusing to explain the problem to non football fans
    4. possible

### Critic
    1. too easy
    2. some knowledge of darts needed
    3. explaining would be to complex
    4. the solution could be complex

### Conclusion
    2. 3 Darts to finish is the Kata


## Early Feedback
I put the ideas to my team and they agreed that this will be a possible kata, however I will need to expain the scoring systems of darts in the kata description.
They think that this will be a simple problem to tackle.

## The Kata

Can you finish in three darts? When given your current score in darts, can you work out if it is possible to finish the game with three darts? In darts, you start with a score of 501. Each time you hit a board section, the score of that section is subtracted from your total score. You need to reach 0 first but cannot exceed it. Therefore, it is important to determine if you can finish the game from your current score. This is your aim. When given your current score, write a function that will either return the score (if it is a possible finish) or "No finish possible" (if you cannot finish). Additionally, your last dart must hit a double, bullseye or the outer bull. The inputted scores will be between 501 and 1.

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
| 20      | D20     | T20     |

## Test Cases

1. 501 should return "No finish possible"
2. 180 should return "No finish possible"
3. 181 should return "No finish possible"
4. 1 should return "No finish possible"
5. 2 should return 2
6. 179 should return "No finish possible"
7. 170 should return 170

## Plan
1. Create the required sheets and link them
2. Install required testing packages and create barebones test to ensure working
3. Create a test to check that the score of 501 returns "No finish possible"
4. make a function to return "No finish possible"
5. follow the TDD loop until the following has been checked
     - x incorrect test returnting "No finish possible"
     - y correct tests returning the current score
6. last feedback and ensuring the tests are solid. Allow testers to play
7. Final polishing and add instructions
8. Share Kata and finalise presentation
9. Upload to Code Wars
10. Enjoy a tea in my cool school of code mug

11. Stretch goal. Instead of returning the correct score, return the required sections that you need to hit to get to 0 points.

## Hackathon review

I was really pleased with how the hackathon turned out. Once I started testing, things just fell into place. By sticking to the TDD method, I made sure to thoroughly test the limits to guarantee accurate results. Unfortunately, I didn't manage to reach my stretch goal due to running out of time for a tricky next step. I believe the success of the hackathon was down to careful planning, both for the kata and project completion. I was also happy with the creative process during the Disney ideation phase, which helped me decide on the kata.

## My working solution

```javascript
function canIFinish(currentScore) {
    if (currentScore > 170) {
        return "No finish possible";
    } else {
        const noFinishPossible = [
            1, 159, 162, 163, 165, 166, 168, 169
        ];
        if (noFinishPossible.includes(currentScore)) {
            return "No finish possible";
        } else {
            return currentScore;
        }
    }
}






