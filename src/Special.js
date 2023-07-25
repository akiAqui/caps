import { useNavigate } from "react-router-dom";

const Special = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reserve");
}
  return (

    <div className="special" role="main">
      <div className="header">
        <div className="title">
          <h1>This Week Special</h1>
        </div>
        <div className="button">
          <button className="lm_button"
                  onClick={handleClick}>reserve</button>
        </div>
      </div>
      <div className="desc">
        Little Lemon is providing weekly special menu for  every two weeks. Please enjoy the seasonal flavours.
      </div>
      {props.children}
    </div>


  )
}

export default Special;
