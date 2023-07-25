import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'


const Comments = () => {
    const comments = [
        {
            avatar: <span className="material-icons">face</span>,
            nickname: "Jondary Boshika",
            date: "(6/3/2023)",
            rating: 3.1,
            title: "It was nice!!!",
            comment: "The last time I visited to Little Lemon it was very crowdid, but everything was quick and delicious. I would like to visit again!!!!!",

        },
        {
            avatar: <span className="material-icons">face_4</span>,
            nickname: "PeroPero LOV3",
            date: "(6/3/2023)",
            rating: 3.3,
            title: "Next visit",
            comment: "The last time I visited to Little Lemon it was very crowdid, but everything was quick and delicious. I would like to visit again!!!!!",
        },
        {
            avatar: <span className="material-icons">face_2</span>,
            nickname: "HONGORI JINBURI",
            date: "(6/3/2023)",
            rating: 3.86,
            title: "Birthday special?",
            comment: "The last time I visited to Little Lemon it was very crowdid, but everything was quick and delicious. I would like to visit again!!!!!",
        },
    ];

    /*
    const calcRate = (rateNumber) => {
        const flooredRate = Math.floor(rateNumber);
        let rtn = new Array(flooredRate);
        rtn.fill(<FontAwesomeIcon icon={faStar} />);
        const delta = rateNumber - flooredRate;

        if ((delta >= 0.25) && (delta < 0.75)) {
            rtn.push(<FontAwesomeIcon icon={faStarHalf} />);
        } else if (delta >= 0.75) {
            rtn.push(<FontAwesomeIcon icon={faStar} />)
        }
        return rtn;
    }
*/
    const calcRate = (rateNumber) => {
        const flooredRate = Math.floor(rateNumber);
        let rtn = Array.from({ length: flooredRate }, (_, i) => <FontAwesomeIcon key={i} icon={faStar} />);
        const delta = rateNumber - flooredRate;

        if ((delta >= 0.25) && (delta < 0.75)) {
            rtn.push(<FontAwesomeIcon key={flooredRate} icon={faStarHalf} />);
        } else if (delta >= 0.75) {
            rtn.push(<FontAwesomeIcon key={flooredRate} icon={faStar} />);
        }
        return rtn;
    }


    return (

        <div className="comments">

            {comments.map((testimonial,index) => (
                <div className="card" role="article" key={index}>
                    <div className='header'>
                        <div className='title'>
                            {testimonial.title}
                        </div>
                        <div className="rating">
                            {calcRate(testimonial.rating)}
                        </div>
                    </div>
                    <div className="comment">{testimonial.comment}</div>

                    <div className="user">
                        <div className="avatar">{testimonial.avatar}</div>
                        <div className="nickname">{testimonial.nickname}</div>
                        <div className="date">{testimonial.date}</div>
                    </div>


                </div>
            ))}
        </div>

    )
}

export default Comments;
