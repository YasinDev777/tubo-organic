import React from 'react'
import CoverCourse from '../assets/coverBigCourse.webp'
import { Link } from 'react-router-dom'

const Courses = () => {
  const array = [
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'done',
      price: '2 000 000',
      halfPrice: '1 000 000'
    },
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'progress',
      price: '2 000 000',
      halfPrice: '1 000 000'
    },
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'progress',
      price: '2 000 000',
      halfPrice: '1 000 000'
    },
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'progress',
      price: '2 000 000',
      halfPrice: '1 000 000'
    },
    {
      name: 'kulinariya awdawsa wdaw swad',
      img: CoverCourse,
      status: 'progress',
      price: '2 000 000',
      halfPrice: '1 000 000'
    },
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'progress',
      price: '2 000 000',
      halfPrice: '1 000 000'
    },
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'progress',
      price: '2 000 000',
      halfPrice: '1 000 000'
    },
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'progress',
      price: '2 000 000',
      halfPrice: '1 000 000'
    },
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'progress',
      price: '2 000 000',
      halfPrice: '1 000 000'
    },
  ]

  return (
    <div className='courses-div'>
      {
        array.map((item, index) => (
          <div className="div-courses" key={index}>
            <div className="main-course-img">
              <Link to={`/courses/${item.name}`}>
                <img src={item.img} alt={item.name} />
              </Link>
            </div>
            <h1>{item.name}</h1>
            <div className="main-course-info">
              <div className="price">
                <p className='method-pay'>Kurs narxi</p>
                <p>{item.price} so'm</p>
              </div>
              <div className="half-price">
                <p className='method-pay'>Muddatli to'lov</p>
                <p>{item.halfPrice} so'm oy</p>
              </div>
            </div>
            <Link to={`/courses/${item.name}`}>
              <button>Batafsil</button>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Courses