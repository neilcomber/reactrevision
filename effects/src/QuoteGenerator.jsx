const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"
import { useState, useEffect} from 'react'

export default function QuoteGenerator(){

    const [quote, setQuote] = useState({text: "", author: ""})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetchQuote()
    }, [])

    async function fetchQuote() {  
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote)
        setIsLoading(false)
    }

    

    return (
        <div>
            <p className="loader" style={{opacity: isLoading ? 1 : 0 }}>'Loading....'</p>
            <h2>Quote: {quote.text} - {quote.author}</h2>
            <button onClick={fetchQuote}>Get quote using handler</button>
            
        </div>
    )
}