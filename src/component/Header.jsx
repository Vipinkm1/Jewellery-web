import React, { useState } from 'react'
import { MdStorefront } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const [dropDownVisible, setDropDownVisible] = useState(false)
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
                            <p className='para1'>Account</p>
                        </Link>
                        <div className='center'>
                            <VscHeart className='nav-icon-size' />
                            <p className='para1'>Wishlist</p>
                        </div>
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
                        <div className='para2 line'>Men's Jewellery</div>
                    </div>
                    <div className=''>
                        <div className='para2 line'>Women Jewellery</div>
                    </div>
                    <div className=''>
                        <div className='para2 line'>Latest Collection</div>
                    </div>
                    <div className=''>
                        <div className='para2 line'>Gift Stores</div>
                    </div>
                    <div className=''>
                        <div className='para2 line'>More at Simmu</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header