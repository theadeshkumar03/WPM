import { comma } from "postcss/lib/list"; // This import seems unused and can be removed.

const fallbackQuotes = [
    "The only way to do great work is to love what you do.",
    "Innovation distinguishes between a leader and a follower.",
    "Stay hungry, stay foolish.",
    "Think different.",
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The best way to predict the future is to create it.",
    "Everything you've ever wanted is on the other side of fear.",
    "The only impossible journey is the one you never begin."
];

export async function fetchRandomQuote() {
    try {
        const response = await fetch('https://baconipsum.com/api/?type=meat&paras=1&format=text');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const quote = await response.text(); // Use text() for plain text response
        return quote;
    } catch (error) {
        console.error('Error fetching quote:', error);
        // Return a random fallback quote if fetching fails
        return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    }
}