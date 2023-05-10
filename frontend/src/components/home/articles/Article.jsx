import React from 'react'

const Article = ({article}) => {
  return (
    <div className='border-[1px] block w-full my-2 p-2'>
      <h2 className='font-bold text-[#ed4387] text-[1.3rem]'>{article?.title} <span>By:-</span></h2>
      <p className='font-bold text-[#626062] opacity-100'>{article?.description}</p>
      <img src={article?.urlToImage} alt="img.png" className='w-full object-contain h-[200px] text-left'/>
      <p>{article?.content}</p>
      <a href={article?.url} target='new' className='text-[#4888e8] hover:text-[#418bfa]'>Read more...</a>
    </div>
  )
}

export default Article
