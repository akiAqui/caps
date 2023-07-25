import { useNavigate } from "react-router-dom";
import heroPic from "./img/pic/Mario_and_Adrian_a.jpg";
const Hero = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/reserve");
    }
    return (
        <div className='hero' role="banner">
            <div className="header">
                <div className="title">
                    <h1>Little Lemmon</h1>
                    <h2>- chicago</h2>
                </div>
                <div className="button" >
                    <button className="lm_button"
                            onClick={handleClick}>reserve</button>
                </div>
            </div>
            <p className="desc">
                    From 1999 we have been surving the best Japanese dishes
                    for a local community and global customers.
                </p>
                <div className="imageContainer">
                    <img alt="hero pic" src={heroPic} width='100%' />
                </div>
            </div>
            )
};

            export default Hero;
