import React from 'react'
import Kangan from '../../assets/Jewellery/kangan.jpg'
import { useCart } from '../Context/Context'


const BlogDetail = () => {
  const {blogDetail} = useCart()

  const blogs = [
    {id: 1, img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-12/31/full/1735667841-3825.jpg?im=FitAndFill=(803,452)', hours:'5 Min', title: 'Business Standard wishes all its read a very happy new year' , createdDate: '01/01/2025', decription: 'Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!'},
    {id: 2, img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-11/15/full/1731646041-2347.jpg?im=FitAndFill=(826,465)', hours:'5 Min', title: 'Business Standard wishes all its read a very happy new year', createdDate: '01/01/2025',decription: 'Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!'},
    {id: 3, img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/08/full/1709915508-7284.jpg?im=FitAndFill=(328,185)', hours:'5 Min', title:'Business Standard wishes all its read a very happy new year' , createdDate: '01/01/2025', decription: 'Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!'},
    {id: 4, img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/03/full/1727944211-3529.jpg?im=FeatureCrop,size=(826,465)', hours:'5 Min', title:'Business Standard wishes all its read a very happy new year', createdDate: '01/01/2025', decription: 'Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!'},
    {id: 5, img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/02/full/1727890103-1766.jpg?im=FeatureCrop,size=(826,465)', hours:'5 Min', title:'Business Standard wishes all its read a very happy new year' , createdDate: '01/01/2025', decription: 'Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!'},
  ]
  return (
    <div className='page'>
      <div className='blog-detail-flex' >
        <div className='blog-detail-width'>
         <div className='blog-title'>{blogDetail.title}</div>
         <div className='createddate'>Posted Date:{blogDetail.createdDate}</div>
         <img src={blogDetail.img} className='blog-img-width mt-1'/>
         <div className='mt-1 para3'>Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!</div>
         <img src={Kangan} className='blog-img-width mt-1'/>
         <div className='mt-1 para3'>Business Standard extends its warmest wishes for a joyous and prosperous New Year to all its readers! May 2025 bring you success, happiness, and endless opportunities!</div>
        </div>
        <div className='blog-detail-width-1'>
         <div className='blog-title center'>Latest Blog</div>
         <div className='blog-detail-grid mt-2'>
        {blogs.map((item, id)=> (
          <div key={id} className='blogs-container mt-1' onClick={()=> {window.scrollTo({top: 0, behavior:'smooth'}); navigate('/blog-detail')}}>
            <img className='img-width-4 ' src={item.img} />
            <div className='createddate'>{item.createdDate} <span>{item.hours}</span></div>
            <div className='para5'>{item.title}</div>
            <div className='para3'>{item.decription.length > 20 ?`${item.decription.slice(0, 120)}...`: item.decription}</div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  )
}
export default BlogDetail