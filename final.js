// 1. Array of quotes (each as an object with text and author properties)
const quotes = [
    {
        text: "We're all gay. No? Everyone's a little gay, come on ladies. NOT THE FRENCH FLAG YEE!",
        author: "hermie0600"
    },
    {
        text: "I am evil! Oh wait actually its its the sun. Not yet, don't fear me yet",
        author: "Scott Smajor"
    },
    {
        text: "Not even close baby, TECHNOBLADE NEVER DIES.",
        author: "Technoblade"
        // Technoblade passed away in 2022, but his legacy lives on. o7 king.
    },
    {
        text: "With great power comes a great need to take a nap, wake me up later.",
        author: "Nico Di Angelo"
    },
    {
        text: "You drool when you sleep.",
        author: "Annabeth Chase"
        // From the Percy Jackson series by Rick Riordan, funny enough this is actually the start of a beautiful romantic relationship.
    },
    {
        text: "Let's go judge and criticize things other humans do, and then do the exact same thing ourselves.",
        author: "Rayla from The Dragon Prince"
    },
    {
        text: "Do you think God stays in heaven because he too lives in fear of what he's created here on earth?",
        author: "Steve Buscemi as Dr. Romero in 'Spy Kids 2'"
    },
    {
        text: "You could sooner divert a river from its course than deny my nature.",
        author: "Cat, lucentgallivanter’s Tumblr post"
    },
    {
        text: "You kneel before my throne unaware it was built on lies.",
        author: "Aplpaca, Tumblr"
    },
    {
        text: "Either Sonic is a God, or could kill God, and I do not care if there is a difference",
        author: "David Brian Gilbert, Unraveled: Every Sonic game is blasphemous"
    },
    {
        text: "Mabel: What time is it?? Dipper: Hold on, I'll check. [Starts playing Disco Girl on max volume from his cd player.] Stan: [Yelling from across the house] WHO IS LIVING THEIR 70S FANTASY AT 2 IN THE MORNING??? SHUT UP!! Dipper: It's 2AM.",
        author: "Gravity Falls" // my friend made me add this one
    },
    {
        text: "Love yourself to spite the world.",  
        author: "Biggest-Gaudiest-Patronuses, Tumblr"
    }

    
];
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById('quote-text').textContent = `"${randomQuote.text}"`;
    document.getElementById('quote-author').textContent = `- ${randomQuote.author}`;
}

document.getElementById('new-quote-btn').addEventListener('click', generateQuote);

generateQuote();
