const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"
import { useState, useEffect} from 'react'

export default function QuoteGenerator(){

    const [quote, setQuote] = useState({})

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote)
    }

    

    return (
        <div>
            <h2>Quote: {quote.text} - {quote.author}</h2>
            <button onClick={fetchQuote}>Get quote using handler</button>
            
        </div>
    )
}