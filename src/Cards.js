import burchetta from './img/dishes/burchetta_s.jpeg';
import salad from './img/dishes/greekSalad_s.jpeg';
import macaroni from './img/dishes/macaroni_s.jpeg';

const Cards = () => {
    const cards = [
        {
            title: "Med Sushi",
            price: "$20.00",
            image: burchetta,
            desc: "This dish is very very very delicious. Much much much more than you would expect. You can die for it. This dish is made for special case in old days, but nowadays we can order this if you visit to Little Lemon."
        },
        {
            title: "Tempa Salad",
            price: "$100.00",
            image: salad,
            desc: "This dish is very very very delicious. Much much much more than you would expect. You can die for it. This dish is made for special case in old days, but nowadays we can order this if you visit to Little Lemon."
        },
        {
            title: "Fuji Macaroni",
            price: "$10.00",
            image: macaroni,
            desc: "This dish is very very very delicious. Much much much more than you would expect. You can die for it. This dish is made for special case in old days, but nowadays we can order this if you visit to Little Lemon."
        },
    ]
    return(
        <div className='specials'>
        {cards.map( (card,index)=>(
                <div className = "card" key={index} role="article">
                    <img src={card.image} alt={card.title}/>
                    <p className="desc">{card.desc}</p>
                    <div className="TitleAndPrice">
                        <h3 className="dishTitle">{card.title}</h3>
                        <h3 className="dishPrice">{card.price}</h3>
                    </div>
                </div>
                )
            )}
            </div>
    )
}
export default Cards;
