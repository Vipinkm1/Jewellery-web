import React, { useState } from 'react'
import ProductRing from '../../assets/Jewellery/jwe.jpg'
import Har from '../../assets/Jewellery/har.jpg'
import Har1 from '../../assets/Jewellery/har1.jpg'
import Kangan from '../../assets/Jewellery/kangan.jpg'
import Profile from '../../assets/Jewellery/33395.jpg'
import Star from '../../assets/Jewellery/star.png'
import { RxCross2 } from "react-icons/rx";

const Review = () => {
  const [reviewdetail, setReviewDetail] = useState(false)

  const productCart = [
    { id: 1, img: ProductRing, title: 'Infetech is a professional IT Company that always creates quality software for clients. If you are looking for a team of talent developers to find out the best IT solutions, Infetech is a company that your team should consider', profileImg: Profile, createdDate: "03/07/2001" },
    { id: 2, img: Har, title: 'Infetech is a professional IT Company that always creates quality software for clients. If you are looking for a team of talent developers to find out the best IT solutions, Infetech is a company that your team should consider', profileImg: Profile, createdDate: "03/07/2001" },
    { id: 3, img: Har1, title: 'Infetech is a professional IT Company that always creates quality software for clients. If you are looking for a team of talent developers to find out the best IT solutions, Infetech is a company that your team should consider', profileImg: Profile, createdDate: "03/07/2001" },
    { id: 4, img: Kangan, title: 'Infetech is a professional IT Company that always creates quality software for clients. If you are looking for a team of talent developers to find out the best IT solutions, Infetech is a company that your team should consider', profileImg: Profile, createdDate: "03/07/2001" },
  ]
  return (
    <>
      <div className=''>
        {reviewdetail && (
          <div className='review-detail-popup'>
            <div className='review-border'>
              <div className='title-flex'>
                <div className='nav-item'>
                  <img src={Profile} className='ratingdetailPrfile-pic' />
                  <p className='para3'>Vipin Kumar</p>
                </div>
                <RxCross2 className='cross-review-popup' onClick={() => setReviewDetail(false)} />
              </div>
              <div className='rating '>
                <img src={Star} style={{ width: '15px' }} />
                <img src={Star} style={{ width: '15px' }} />
                <img src={Star} style={{ width: '15px' }} />
                <img src={Star} style={{ width: '15px' }} />
              </div>
              <div className='review-description mt-1'>
                <p className='para3'>Infetech is a professional IT Company that always creates quality software for clients. If you are looking for a team of talent developers to find out the best IT solutions, Infetech is a company that your team should consider</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='page'>
        <div className='center heading-1'>Customer Review & Rating</div>
        <div className='product'>
          <div className='product-flex  '>
            {productCart.map((product) => (
              <div className='product-container' key={product.id}>
                <img
                  className="img-width-4"
                  src={product.img}
                />
                <p className='createddate'>Published Date:{product.createdDate}</p>
                <div className='title-flex'>
                  <div>
                    <img className='rating-profile' src={product.profileImg} style={{ width: '40px' }} />
                  </div>
                  <div className='rating'>
                    <img src={Star} style={{ width: '15px' }} />
                    <img src={Star} style={{ width: '15px' }} />
                    <img src={Star} style={{ width: '15px' }} />
                    <img src={Star} style={{ width: '15px' }} />
                  </div>
                </div>
                <p className='para3 mt-1'>{product.title.length > 120 ? <>{product.title.slice(0, 120)} <span className="read-more" onClick={() => setReviewDetail(true)}>... Read More</span></> : product.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Review