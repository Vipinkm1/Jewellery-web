import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../Context/Context'


const Blogs = () => {
  const {BlogDetail} = useCart()


  //  show blog detail

  const handleBlogDetail = (item) => {
    BlogDetail(item)
    window.scrollTo({top: 0, behavior: 'smooth'})
    navigate('/blog-detail')
  }
  const blogs = [
    {id: 1, img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-12/31/full/1735667841-3825.jpg?im=FitAndFill=(803,452)', hours:'5 Min', title: 'Business Standard wishes all its read a very happy new year' , createdDate: '01/01/2025', decription: 'Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!'},
    {id: 2, img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-11/15/full/1731646041-2347.jpg?im=FitAndFill=(826,465)', hours:'5 Min', title: 'Business Standard wishes all its read a very happy new year', createdDate: '01/01/2025',decription: 'Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!'},
    {id: 3, img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/08/full/1709915508-7284.jpg?im=FitAndFill=(328,185)', hours:'5 Min', title:'Business Standard wishes all its read a very happy new year' , createdDate: '01/01/2025', decription: 'Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!'},
    {id: 4, img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/03/full/1727944211-3529.jpg?im=FeatureCrop,size=(826,465)', hours:'5 Min', title:'Business Standard wishes all its read a very happy new year', createdDate: '01/01/2025', decription: 'Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!'},
    {id: 5, img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/02/full/1727890103-1766.jpg?im=FeatureCrop,size=(826,465)', hours:'5 Min', title:'Business Standard wishes all its read a very happy new year' , createdDate: '01/01/2025', decription: 'Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!'},
  ]
  const navigate = useNavigate()
   
  return (
    <div className='page'>
      <div className='center heading-1'>Our Blog</div>
      {/* <div className='mt-1'>
        <input type='text' placeholder='search here' className='input-width-4'/>
      </div> */}
      {/*  blog components */}
      <div className='blog-grid mt-2'>
        {blogs.map((item, id)=> (
          <div key={id} className='blogs-container' >
            <img className='img-width-4' src={item.img}  onClick={()=> handleBlogDetail(item)}/>
            <div className='createddate'>{item.createdDate} <span>{item.hours}</span></div>
            <div className='para5'>{item.title}</div>
            <div className='para3'>{item.decription.length > 20 ?`${item.decription.slice(0, 120)}...`: item.decription}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs