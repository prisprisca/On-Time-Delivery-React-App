import React from 'react'
import "../style/Services.css"

function Services({ id, title, image}) {
    return (
        <div className="services">
            <div className="service-info">
                <strong>{title}</strong>
            </div>
            <img src={image} alt="deliveries" />
            
        </div>
    )
}

export default Services
