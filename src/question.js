class Question {
    // YOUR CODE HERE:
    //
    constructor(text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }

    shuffleChoices() {
        let endPointer = this.choices.length - 1;
        let randomIndex;
        while (endPointer > 0) {
            randomIndex = Math.floor(Math.random() * endPointer);
            [this.choices[randomIndex], this.choices[endPointer]] = [this.choices[endPointer], this.choices[randomIndex]];
            endPointer--;
        }
    }
}


