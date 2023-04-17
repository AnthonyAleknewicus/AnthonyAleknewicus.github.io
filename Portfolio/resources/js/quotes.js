let quotes = [
    {
        'quoteText': "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        'quoteAuthor': "-Nelson Mandela"
    },
    {
        'quoteText': "The way to get started is to quit talking and begin doing.",
        'quoteAuthor': "-Walt Disney"
    },
    {
        'quoteText': "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        'quoteAuthor': "-Steve Jobs"
    },
    {
        'quoteText': "If life were predictable it would cease to be life, and be without flavor. ",
        'quoteAuthor': "-Eleanor Roosevelt"
    },
    {
        'quoteText': "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        'quoteAuthor': "-Oprah Winfrey"
    },
    {
        'quoteText': "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        'quoteAuthor': "-James Cameron"
    },
    {
        'quoteText': "Life is what happens when you're busy making other plans.",
        'quoteAuthor': "-John Lennon"
    },
    {
        'quoteText': "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        'quoteAuthor': "-Mother Teresa"
    },
    {
        'quoteText': "When you reach the end of your rope, tie a knot in it and hang on.",
        'quoteAuthor': "-Franklin D. Roosevelt"
    },
    {
        'quoteText': "Always remember that you are absolutely unique. Just like everyone else.",
        'quoteAuthor': "-Margaret Mead"
    },
    {
        'quoteText': "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        'quoteAuthor': "-Robert Louis Stevenson"
    },
    {
        'quoteText': "The future belongs to those who believe in the beauty of their dreams.",
        'quoteAuthor': "-Eleanor Roosevelt"
    },
    {
        'quoteText': "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        'quoteAuthor': "-Benjamin Franklin"
    },
    {
        'quoteText': "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        'quoteAuthor': "-Hellen Keller"
    },
    {
        'quoteText': "It is during our darkest moments that we must focus to see the light.",
        'quoteAuthor': "-Aristotle"
    },
    {
        'quoteText': "Whoever is happy will make others happy too.",
        'quoteAuthor': "-Anne Frank"
    },
    {
        'quoteText': "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        'quoteAuthor': "-Ralph Waldo Emerson"
    },
    {
        'quoteText': "You will face many defeats in life, but never let yourself be defeated.",
        'quoteAuthor': "-Maya Angelou"
    },
    {
        'quoteText': "In the end, it's not the years in your life that count. It's the life in your years.",
        'quoteAuthor': "-Abraham Lincoln"
    },
    {
        'quoteText': "Never let the fear of striking out keep you from playing the game.",
        'quoteAuthor': "-Babe Ruth"
    },
    {
        'quoteText': "Life is either a daring adventure or nothing at all.",
        'quoteAuthor': "-Hellen Keller"
    },
    {
        'quoteText': "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        'quoteAuthor': "-Thomas A. Edison"
    },
    {
        'quoteText': "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        'quoteAuthor': "-Dr. Suess"
    },
    {
        'quoteText': "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        'quoteAuthor': "-Oscar Wilde"
    },
    {
        'quoteText': "The only impossible journey is the one you never begin.",
        'quoteAuthor': "-Tony Robbins"
    },
    
];

const getRandomQuote = () => {
    let randQuoteGen = quotes[Math.floor(Math.random() * quotes.length)];
    return randQuoteGen;
}
// Get Elements From HTML
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Function To Update The Quote Displayed On Page
const updateQuote = () => {
    const randomQuote = getRandomQuote();
    quoteText.textContent = randomQuote.quoteText;
    quoteAuthor.textContent = randomQuote.quoteAuthor;
}

// Call the updateQuote function when the page loads
updateQuote();

// Click Event Listener Added to Button to Generate
newQuoteBtn.addEventListener('click', updateQuote);