const quotes = [
    {
        Name: "Mother Teresa",
        Quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
    },
    {
        Name: "Franklin D. Roosevelt",
        Quote: "When you reach the end of your rope, tie a knot in it and hang on."
    },
    {
        Name: "Margaret Mead",
        Quote: "Always remember that you are absolutely unique. Just like everyone else."
    },
    {
        Name: "Robert Louis Stevenson",
        Quote: "Don't judge each day by the harvest you reap but by the seeds that you plant."
    },
    {
        Name: "Eleanor Roosevelt",
        Quote: "The future belongs to those who believe in the beauty of their dreams."
    },
    {
        Name: "Oprah Winfrey",
        Quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    },
    {
        Name: "James Cameron", 
        Quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
    },
    {
        Name: "John Lennon", 
        Quote: "Life is what happens when you're busy making other plans."
    },
    {
        Name: "Mother Teresa", 
        Quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."},
    {
        Name: "Franklin D. Roosevelt", 
        Quote: "When you reach the end of your rope, tie a knot in it and hang on."},
    {
        Name: "Margaret Mead", 
        Quote: "Always remember that you are absolutely unique. Just like everyone else."},
    {
        Name: "Robert Louis Stevenson", 
        Quote: "Don't judge each day by the harvest you reap but by the seeds that you plant."},
    {
        Name: "Eleanor Roosevelt", 
        Quote: "The future belongs to those who believe in the beauty of their dreams."},
    {
        Name: "Benjamin Franklin", 
        Quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."},
    {
        Name: "Helen Keller", 
        Quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."},
    {
        Name: "Aristotle", 
        Quote: "It is during our darkest moments that we must focus to see the light."},
    {
        Name: "Anne Frank", 
        Quote: "Whoever is happy will make others happy too."},
    {
        Name: "Ralph Waldo Emerson", 
        Quote: "Do not go where the path may lead, go instead where there is no path and leave a trail."
    },
]

const body = document.querySelector('body')
const button = document.querySelector('button')
const container = document.querySelector('div')
const blockquote = document.querySelector('blockquote')
const quoteAuthor = document.querySelector('#quoteAuthor')
const quote = document.querySelector('#quote')

const combinations1 = ['#d72631', '#a2d5c6', '#077b8a', '#5c3c92']
const combinations2 = ['#e2d810', '#d9138a', '#12a4d9', '#322e2f']
const combinations3 = ['#cf1578', '#e8d21d', '#039fbe', '#b20238']
const combinations4 = ['#e75874', '#be1558', '#fbcbc9', '#322514']
const combinations5 = ['#1e3d59', '#f5f0e1', '#ff6e40', '#ffc13b']
const combinations6 = ['#26495c', '#c4a35a', '#c66b3d', '#e5e5dc']
const combinations7 = ['#316879', '#f47a60', '#7fe7dc', '#ced7d8']
const combinations8 = ['#d902ee', '#ffd79d', '#f162ff', '#320d3e']

const colors = [combinations1, combinations2, combinations3, combinations4, combinations5, combinations6, combinations7, combinations8]

button.addEventListener('click', changeColorAndDisplayQuote)

function changeColorAndDisplayQuote() {
    let number = Math.floor(Math.random() * quotes.length)
    let random = Math.floor(Math.random() * colors.length)
    quoteAuthor.innerHTML = quotes[number].Name
    quote.innerHTML = quotes[number].Quote
    body.style.backgroundColor = colors[random][0]
    container.style.backgroundColor = colors[random][1]
    blockquote.style.backgroundColor = colors[random][1]
    blockquote.style.borderLeftColor = colors[random][3]
    btn.style.backgroundColor = colors[random][2]
    btn.style.color = colors[random][3]
    container.style.color = colors[random][3]
}
