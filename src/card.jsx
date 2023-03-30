function Card({ card }) {
    let n = 8
    if(card.price < n){
        return (
            <div className="card">
                <img src={card.image} alt="" />
                <h1>{card.title}</h1>
                <h1 className="h1">{card.price}</h1>
                <p>{card.description}</p>
                <h3>{card.category}</h3>
                <h4>{card.rating.rate}</h4>
                <h4>{card.rating.count}</h4>
            </div>
        )
    }
}
export default Card