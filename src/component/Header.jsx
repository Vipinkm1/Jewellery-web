import React, { useEffect, useState } from 'react'
import { MdStorefront } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, parsePath, useNavigate } from 'react-router-dom';
import { useCart } from './Context/Context';


const Header = () => {

    const { getTotalWishlist} = useCart(); 
   
    const [dropDownVisible, setDropDownVisible] = useState(false)
    const [mens, setMens] = useState(false)
    const [women, setWomen] = useState(false)
    
    
    const navigate = useNavigate()
    const handlehome = () => {
        navigate('/')
    }
    const handleOpen = () => {
        setDropDownVisible(true)
    }
    const handleMouseEnter = () => {
        setDropDownVisible(true)
    }
    const handleMouseLeave = () => {
        setDropDownVisible(false)
    }

    //  call userAuth from the localStorage 
     const [user, setUser] = useState(null)

     useEffect(()=> {
        const userAuth = localStorage.getItem('signup')
        if(userAuth){
            const parseAuth = JSON.parse(userAuth)
            setUser(parseAuth)
        }
       
     }, [])
    

    return (
        <div className=''>
            <div className='navbar'>
                <div className='navbar-container-1'>
                    <h2 onClick={handlehome} className='logo'>Simmu</h2>
                    <div className='input-element'>
                        <input type='search' className='input-width' placeholder='Search for Gold jewellery Diamond jewellery and more... ' />
                        <CiSearch className='search-icon' />
                    </div>
                    <div className='nav-item'>
                        <div className='center'>
                            <MdStorefront className='nav-icon-size' />
                            <p className='para1 '>Blog</p>
                        </div>
                        <Link to={'/signup'} className='center anchor'>
                            <VscAccount className='nav-icon-size' />
                            <p className='para1'>{user?.fullname || 'Account'}</p>
                        </Link>
                        <Link to={'/wishlist'} className='center anchor'>
                            <VscHeart className='nav-icon-size' />
                            {getTotalWishlist() > 0 && <span className='cart-count'>{getTotalWishlist()}</span>}
                            <p className='para1'>Wishlist</p>
                        </Link>
                        <div className='center'>
                            <BsCart2 className='nav-icon-size' />
                            <p className='para1'>Cart</p>
                        </div>
                    </div>
                </div>
                <div className='next-nav'>
                    <div className='flex-1'>
                        <div className='para2 line ' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} onClick={handleOpen}>Shop by Categories
                            <div className='category-border'>
                                {dropDownVisible && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item">All Categories</div>
                                        <div className="dropdown-item ">Earnings</div>
                                        <div className="dropdown-item">Rings</div>
                                        <div className="dropdown-item">Neckleces</div>
                                        <div className="dropdown-item">Chain</div>
                                        <div className="dropdown-item">Bangles</div>
                                        <div className="dropdown-item">Toy Rings</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <RiArrowDropDownLine className='size-1' />
                    </div>
                    <div className=''>
                        <Link to='/filter' className='para2 anchor line' onClick={()=> setMens(true)} onMouseEnter={()=> setMens(true)} onMouseLeave={()=> setMens(false)}>Men's Jewellery
                        <div className='category-border'>
                                {mens && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item">Earnings</div>
                                        <div className="dropdown-item">Rings</div>
                                        <div className="dropdown-item">Bracelets</div>
                                        <div className="dropdown-item">Chain</div>
                                        <div className="dropdown-item">Charms</div>
                                        <div className="dropdown-item">Pendants</div>
                                        <div className="dropdown-item">Groom Necklace</div>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                    <div className=''>
                        <Link to='/filter' className='para2 line anchor' onClick={()=> setWomen(true)} onMouseEnter={()=> setWomen(true)} onMouseLeave={()=> setWomen(false)} >Women Jewellery
                        <div className='category-border'>
                                {women && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item">All Categories</div>
                                        <div className="dropdown-item ">Earnings</div>
                                        <div className="dropdown-item">Rings</div>
                                        <div className="dropdown-item">Neckleces</div>
                                        <div className="dropdown-item">Chain</div>
                                        <div className="dropdown-item">Bracelets</div>
                                        <div className="dropdown-item">Nose Pin</div>
                                        <div className="dropdown-item">Bangles</div>
                                        <div className="dropdown-item">Anklets</div>
                                        <div className="dropdown-item">Mangalsutras</div>
                                        <div className="dropdown-item">Pendants</div>
                                     
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                    <div className=''>
                        <Link to='/filter' className='para2 line anchor'>Latest Collection</Link>
                    </div>
                    <div className=''>
                        <Link to='/filter' className='para2 line anchor'>Gift Stores</Link>
                    </div>
                    <div className=''>
                        <Link to='/filter' className='para2 line anchor'>More at Simmu</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header