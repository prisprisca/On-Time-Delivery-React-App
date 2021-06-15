import React, {useState} from 'react'
import "../style/Testimonial.css"


function Testimonial() {
    const quotes = {
        0: {
            client: "Prissy, Acerm Co",
            quote: "Best service! My parcel was delivered on time. Will surely reccomend others"
        },
        1: {
            client: "Meddie, LLT Co",
            quote: "None of my goods was damaged in trasit. they are very careful with handling them"
        },
        2: {
            client: "Pacy, Hark Org",
            quote: "They provide express delivery service at an affordable price"
        },
        3: {
            client: "Lucy, Harmbag Co",
            quote: "I got my delivery on time. So good at this"
        } 

    }

    const [current] = useState(quotes[0])
    
    const handleSetClick = () => {
        console.log("hello")
    //    setCurrent(quotes[event.target.getAttribute("data-quote")])
    //    setActive(event.target.getAttribute("data-quote"))
    }
    return (
        <div className="quoter" >
            <h1>Testimonials</h1>
            <p>{current.quote}</p>
            <p>{current.client}</p>
            <div className="quote-object">
                {Object.keys(quotes).map(index => (
                    <span className="quotee"
                     onClick={event => handleSetClick(event)}
                    data-quote={index}
                    key={index} />
                ))}
            </div>
            
        </div>
    )
}

export default Testimonial
