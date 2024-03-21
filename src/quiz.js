class Quiz {
    // YOUR CODE HERE:
    //
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    moveToNextQuestion() {
        this.currentQuestionIndex += 1
    }

    shuffleQuestions() {
        let endPointer = this.questions.length - 1;
        let randomIndex;
        while (endPointer > 0) {
            randomIndex = Math.floor(Math.random() * endPointer);
            [this.questions[randomIndex], this.questions[endPointer]] = [this.questions[endPointer], this.questions[randomIndex]];
            endPointer--;
        }
    }

    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer)
            this.correctAnswers += 1;
    }

    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length ? true : false;
    }

    filterQuestionsByDifficulty(difficulty) {
        if (typeof difficulty === "number" && difficulty > 0 && difficulty <= 3)
            this.questions = this.questions.filter(question => question.difficulty === difficulty);
    }

    averageDifficulty() {
        const difficultyAverage = this.questions.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.difficulty;
        }, 0) / this.questions.length;
        return difficultyAverage;
    };
}