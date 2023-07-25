import pic from './img/pic/restauranfood.jpg';

const About = () =>{
    return(
        <div className="about" role="article">
            <div className="header">
                <div className="title">
                    <h1>About</h1>
                </div>
            </div>
            <div className="desc" role="main">
                    Mario, the shef of Little Lemon comes from
                    the world of Super Mario - Nintendo Game.
                    He still is fighting with NPC characters from morning
                    until mid-night. Actually he is not cocking
                    any dishes in the Little Lemon. Are you surprised?
                    Yes, the reality is always like that. Not less than expectation
                    but more than your imagination.

                    Now you are wondering who is Adrian who is on the Hero Area
                    picture. The game player? The game developper? or  WHO?

                    Adrian comes from Adrianus which means the person
                    who comes from Adriatic Sea. But He is a Japanese.
                    The true-blue japanese man!

                    He is generated by Mario and AI.

                    Actually Mario is a kind of AI and he needed
                    someone who can work with him at the restaurant.
            </div>
            <div className="imgContainer">
                <img src={pic} alt='toppicture'/>
            </div>
        </div>
    )
}

export default About;