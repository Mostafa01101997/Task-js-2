var quote = document.getElementById('paragraph');
var auterQute = document.getElementById('secondParagraph');

var quotes = [{
    quote: "Don’t gain the world and lose your soul, wisdom is better than silver or gold",
    source: "Bob Marley",

},
{
    quote: "Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things",
    source: "Kenneth Branagh",

},
{
    quote: "Don’t cry because it’s over, smile because it happened",
    source: "Ludwig Jacobowski",

},
{
    quote: "Do stuff. Be clenched, curious. Not waiting for inspiration’s .",
    source: "Susan Sontag",

},
{
    quote: "The only sin is ignorance",
    source: "Christopher Marlowe"
},
{
    quote: "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true",
    source: "Demosthenes"
},
{
    quote: "A lie can travel halfway around the world while the truth is putting on its shoes",
    source: "Mark Twain"
},
{
    quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people",
    source: "Eleanor Roosevelt"
},
{
    quote: "If you have a garden and a library, you have everything you need",
    source: "Marcus Tullius Cicero"
},
{
    quote: "Truth comes out in wine",
    source: "Pliny the Elder"
},
{
    quote: "Everything in the universe is within you. Ask all from yourself",
    source: "Rumi"
},
{
    quote: "When I get a little money I buy books; and if any is left I buy food and clothes",
    source: "Desiderius Erasmus"
}];

var random = Math.floor((Math.random() * quotes.length));
var lastRandom = 0;
function changeQuotes() {
    lastRandom = random;
    random = Math.floor(Math.random() * quotes.length);
    if (lastRandom == random) {
        random += 1;
    }
    quote.innerText = quotes[random].quote;
    auterQute.innerText = "--" + " " + quotes[random].source;
    console.log(random);

}

changeQuotes();