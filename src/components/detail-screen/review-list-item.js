import {Link} from "react-router-dom";


const ReviewListItem = ({review}) => {
  return(
      <tr className='row'>
          <div className="p-3 col-3">

              <img className="wd-rounded-corners" width="50" height="50" src={review.profilePicture}/>
              <Link className="ps-3" to={`#`}>Link to profile</Link>

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