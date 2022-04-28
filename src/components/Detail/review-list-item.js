import { Link } from "react-router-dom";


const ReviewListItem = ({ review }) => {
    return (
        <tr className='row'>
            <div className="p-3 col-3">

                <img className="wd-rounded-corners" width="50" height="50" src={review.profilePicture} alt="img" />
                <Link className="ps-3" to={`/profile/${review.user}`}>Link to profile</Link>

                <div className="wd-bolded-font wd-font-white">
                    {review.user}
                </div>
            </div>

            <div className="pt-4 col-9 wd-font-style">
                "{review.review}"
            </div>


        </tr>
    )
}

export default ReviewListItem;