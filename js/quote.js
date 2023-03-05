const quotes = [
    {
        quote: '아무것도 안 하고 그저 보기만 하는 자를 구하는, 그런 세계는 어디에도 없다.',
        author: '- 💎🔶',
    },
    {
        quote: '자기 연민에 빠지면 인생은 끝없는 악몽이다.',
        author: '- 다자이 오사무',
    },
    {
        quote: '너는 꼭 언제나 만전을 다하여, 기회의 가장 앞줄에 있도록 해.',
        author: '- 작은 선생',
    },
    {
        quote: '걱정해서 걱정이 없어지면 걱정이 없겠네.',
        author: '- 티벳 속담',
    },
    {
        quote: '휴대폰좆빠지게본다고니인생이활짝피겠냐갈수록개같아질뿐이다느리지만확실한건공부다공부만이미래를바꾼다',
        author: '- 어떤 아저씨',
    },
    {
        quote: '두려우면 하지 말고 하게 되면 두려워 하지 말아라.',
        author: '- 몽골 속담',
    },
    {
        quote: '달을 향해 쏴라, 빗나가도 별이 될 것이다.',
        author: '- 레스 브라운',
    },
    {
        quote: '아무도 구석에서 울지 말라고 지구는 둥글게 만들어졌다.',
        author: '- 유심론',
    },
    {
        quote: '영광에 지름길은 없다.',
        author: '- 티키타카',
    },
    {
        quote: '알람은 배경처럼 울려오고 깨어나는 것은 깨어나는 이의 몫.',
        author: '- 누군가',
    },
    {
        quote: '나를 만들어 가는 건 매일매일 하는 행동이며 결과는 부산물일 뿐이야.',
        author: '- 키타',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
