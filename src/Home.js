
import Hero from './Hero.js';
import Special from './Special.js';
import Cards from './Cards.js';
import Testimonial from './Testimonial.js';
import Comments from './Comments.js';
const Home = () => {
    return (
        <>
            <Hero/>
            <Special>
                <Cards/>
            </Special>
            <Testimonial>
                <Comments/>
            </Testimonial>
        </>

    )
};

export default Home;