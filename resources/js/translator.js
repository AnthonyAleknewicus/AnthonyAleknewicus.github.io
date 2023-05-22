// Get the output element
const outputElement = document.getElementById('translation');

// Get the symbol buttons
const symbolButtons = document.getElementsByClassName('button');

// Adding Event Listeners to each symbol button
for (let i = 0; i < symbolButtons.length; i++) {
    symbolButtons[i].addEventListener('click', function() {
        const symbol = this.id; // Get the symbol from the button ID
        const letter = getCorrespondingLetter(symbol); // Replace this with your own logic to get the corresponding English letter
        outputElement.textContent += letter; // Append the letter to the output
    });
}

// Function to get the corresponding English letter for a symbol
function getCorrespondingLetter(symbol) {
   // Replace this with your own logic to map symbols to English letters
  // Example mapping: A -> A, B -> B, C -> C, etc.
  const symbolToLetterMap = {
    'letter-a': 'A',
    'letter-b': 'B',
    'letter-c': 'C',
    'letter-d': 'D',
    'letter-e': 'E',
    'letter-f': 'F',
    'letter-g': 'G',
    'letter-h': 'H',
    'letter-i': 'I',
    'letter-j': 'J',
    'letter-k': 'K',
    'letter-dash': '-',
    'letter-l': 'L',
    'letter-m': 'M',
    'letter-n': 'N',
    'letter-o': 'O',
    'letter-p': 'P',
    'letter-period': '.',
    'letter-q': 'Q',
    'letter-r': 'R',
    'letter-s': 'S',
    'letter-t': 'T',
    'letter-u': 'U',
    'letter-exclamation': '!',
    'letter-v': 'V',
    'letter-w': 'W',
    'letter-x': 'X',
    'letter-y': 'Y',
    'letter-z': 'Z',
    'letter-question': '?',
    'letter-one': '1',
    'letter-two': '2',
    'letter-three': '3',
    'letter-four': '4',
    'letter-five': '5',
    'letter-six': '6',
    'letter-seven': '7',
    'letter-eight': '8',
    'letter-nine': '9',
    'letter-zero': '0'
  }

  if (symbolToLetterMap.hasOwnProperty(symbol)) {
    return symbolToLetterMap[symbol];
  } else {
    return ''; // Return an empty string if the symbol doesn't have a corresponding letter
  }
};

// Get the clear button
const clearButton = document.getElementById('clear-button');

// Add click event listener to the clear button
clearButton.addEventListener('click', function() {
  outputElement.textContent = ''; // Clear the output
});