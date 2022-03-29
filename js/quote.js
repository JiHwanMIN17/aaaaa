const quotes=[
    {
        quote:"Don't confuse a single failure with an eternal failure."
        ,author:"-F. Scott Fitzgerald",
    },
    {
        quote:"If you can't avoid it, enjoy it."
        ,author:"-Robert Elliot",
    },
    {
        quote:"세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다"
        ,author:"-헨렌켈러",
    },
    {
        quote:"실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다."
        ,author:"-하버트 개서",
    },
    {
        quote:" 절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다 ."
        ,author:"-론허바드",
    },
    {
        quote:". 고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다."
        ,author:"-베토벤",
    },
    {
        quote:".인생에 뜻을 세우는데 있어 늦은 때라곤 없다"
        ,author:"-볼드윈",
    },
    {
        quote:" 만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다"
        ,author:"에디슨",
    },
    {
        quote:"나이가 60이다 70이다 하는 것으로 그 사람이 늙었다 젊었다 할 수 없다. 늙고 젊은 것은 그 사람의 신념이 늙었느냐 젊었느냐 하는데 있다"
        ,author:"-맥아더",
    },
    {
        quote:"재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더많이 잃은 것이며, 용기를 잃은 사람은 모든것을 잃은 것이다. "
        ,author:"-세르반테스",
    },

];

const quote =document.querySelector("#quote span:first-child");
const author =document.querySelector("#quote span:last-child");

 console.log(quotes[Math.floor(Math.random()*quotes.length)])
// const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
// quote.innerText=todaysQuote.quote;
// author.innerText=todaysQuote.author;