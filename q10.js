// Function to count occurrences of each unique word in a sentence
function countWordOccurrences(sentence) {
    // Split the sentence into words
    var words = sentence.toLowerCase().split(/\s+/);

    // Create a Map to store word occurrences
    var wordMap = new Map();

    
    words.forEach(function(word) {
        // Remove punctuation from the word
        var cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

        // Check if the word already exists in the Map
        if (wordMap.has(cleanWord)) {
            // If it exists, increment its occurrence count
            wordMap.set(cleanWord, wordMap.get(cleanWord) + 1);
        } else {
            // If it doesn't exist, set its occurrence count to 1
            wordMap.set(cleanWord, 1);
        }
    });

    return wordMap;
}

var sentence = "Hello world, hello there. How are you? Are you fine?";
var wordOccurrences = countWordOccurrences(sentence);
console.log("Word occurrences:", wordOccurrences);
