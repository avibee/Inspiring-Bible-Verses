let btn = document.querySelector('#new-verse');
let quote = document.querySelector('.quote');
let bibleVerse = document.querySelector('.bible-verse');

const quotes = [{quote: `"I can do all this through him who gives me strength."`, bibleVerse: `Philippians 4:13`},
{quote: `"Take delight in the LORD, and he will give you the desires of your heart."`, bibleVerse: `Psalms 37:4`},
{quote: `"Commit to the LORD whatever you do, and he will establish your plans."`, bibleVerse: `Proverbs 16:33`},
{quote: `"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."`, bibleVerse: `Isaiah:41:10`},
{quote: `"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."`, bibleVerse: `Philippians 4:6`},
{quote: `"But blessed is the one who trusts in the LORD, whose confidence is in him."`, bibleVerse: `Jeremiah 17:7`},
{quote: `"Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go."`, bibleVerse: `Joshua 1:9`},
{quote: `"And we know that for those who love God all things work together for good, for those who are called according to His purpose."`, bibleVerse: `Revelation 21:4`},
{quote: `"Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain."`, bibleVerse: `1Corinthians 15:58`},
{quote: `"May the God of hope fill you with all joy and peace as you trust in Him, so that you may overflow with hope by the power of the Holy Spirit."`, bibleVerse: `Romans 15: 13`},
{quote: `"Because of the LORD’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness."`, bibleVerse: `Lamentations 3:22-23`},
{quote: `"Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; He will never leave you nor forsake you."`, bibleVerse: `Deuteronomy 31:6`},
{quote: `"For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life."`, bibleVerse: `John 3:16`},
{quote: `"The Lord directs the steps of the godly. He delights in every detail of their lives. Though they stumble, they will never fall, for the Lord holds them by the hand."`, bibleVerse: `Psalm 37:23-24`},
{quote: `"The Lord directs the steps of the godly. He delights in every detail of their lives. Though they stumble, they will never fall, for the Lord holds them by the hand."`, bibleVerse: `Romans 8:18`}];



btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    bibleVerse.innerText = quotes[random].bibleVerse;
})


