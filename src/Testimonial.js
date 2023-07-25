const Testimonial = ({ children }) => {
    return (
        <div className="testimonial" role="complementary">
            <div className="header">
                <div className="title">
                    <h1>Testmonials</h1>
                </div>
                <div className="button">
                    <button className="lm_button">post</button>

                </div>

            </div>
            <div className="desc">
                These comment are posted by the customers. If you give us a usuful ideas, we give you a discount ticket at the end of month among the posts.
            </div>
            {children}
        </div>
    )

}
export default Testimonial;
