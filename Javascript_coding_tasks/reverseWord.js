function reverseWordsInSentence(sentence) {
    let reversedSentence = ''; // Initialize the result string
    let currentWord = ''; // Initialize a variable to store the current word

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Check if the character is a space or the end of the sentence
        if (char === ' ' || i === sentence.length - 1) {
            // If it's the end of a word, reverse it and add it to the result string
            if (i === sentence.length - 1) {
                currentWord += char;
            }
            for (let j = currentWord.length - 1; j >= 0; j--) {
                reversedSentence += currentWord[j];
            }

            // If it's not the end of the sentence, add a space to the result string
            if (i !== sentence.length - 1) {
                reversedSentence += ' ';
            }

            // Reset the currentWord for the next word
            currentWord = '';
        } else {
            currentWord += char;
        }
    }

    return reversedSentence;
}

const sentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(sentence);
console.log(reversedSentence);
