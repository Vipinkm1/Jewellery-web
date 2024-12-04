import React from 'react'
import { MdStorefront } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";


const Header = () => {
    return (
        
        <div className='page'>
            <div className='navbar'>
                <div className='navbar-container-1'>
                    <h2 className='logo'>Simmu</h2>
                    <div className='input-element'>
                        <input type='search' className='input-width' placeholder='Search ' />
                        <CiSearch className='search-icon' />
                    </div>
                    <div className='nav-item'>
                        <div className='center'>
                            <MdStorefront className='nav-icon-size' />
                            <p className='para1'>Store</p>
                        </div>
                        <div className='center'>
                            <VscAccount className='nav-icon-size' />
                            <p className='para1'>Account</p>
                        </div>
                        <div className='center'>
                            <VscHeart className='nav-icon-size' />
                            <p className='para1'>Wishlist</p>
                        </div>
                        <div className='center'>
                            <BsCart2 className='nav-icon-size' />
                            <p className='para1'>Store</p>
                        </div>
                    </div>
                </div>
                <div className='next-nav'>
                    <div className='flex-1'>
                        <div className='para1'>Shop by Categories</div>
                        <RiArrowDropDownLine className='size-1' />
                    </div>
                    <div className=''>
                        <div className='para1'>Men's Jewellery</div>
                    </div>
                    <div className=''>
                        <div className='para1'>Women Jewellery</div>
                    </div>
                    <div className=''>
                        <div className='para1'>Latest Collection</div>
                    </div>
                    <div className=''>
                        <div className='para1'>Gift Stores</div>
                    </div>
                    <div className=''>
                        <div className='para1'>More at Simmu</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header