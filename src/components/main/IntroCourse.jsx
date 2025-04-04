import React from 'react'
import CoverCourse from '../../assets/cover-course.png'
import { Link } from 'react-router-dom'
const IntroCourse = () => {
  const array = [
    {
      name: 'kulinariya1',
      img: CoverCourse,
      status: 'done'
    },
    {
      name: 'kulinariya2',
      img: CoverCourse,
      status: 'progress'
    },
    {
      name: 'kulinariya3',
      img: CoverCourse,
      status: 'done'
    },
    {
      name: 'kulinariya4',
      img: CoverCourse,
      status: 'progress4'
    },
    {
      name: 'kulinariyaaw dawsaw dawswad',
      img: CoverCourse,
      status: 'done'
    },
    {
      name: 'kulinariya5',
      img: CoverCourse,
      status: 'progress'
    },
  ]
  
  return (
    <div className='IntroCourse'>
        <h3>O'z qo'llaringiz bilan mazali sifatli non - bu orzu emas, balki haqiqat.</h3>
        <p>
            Buning uchun sizga faqat un, tuz va suv kerak bo'ladi. Hamma daho oddiy!
            Biz butun dunyo bo'ylab odamlarga xamirturushni olib tashlashni va oshxonamizda 
            sog'lom non pishirishni keraksiz xarajatlar va murakkab texnikalarsiz o'rgatamiz
        </p>
        <h5>Har bir stolda sog'lom non!</h5>
        <div className="courses">
          {
            [...array].sort((a, b) => {
              const sortOrder = { progress: 1, done: 2 }
              return (sortOrder[b.status] || 99) - (sortOrder[a.status] || 99)
            }).map((item, index) => (
                <Link to={`/courses/${item.name}`} className={`course-div ${item.status === 'progress' ? 'progress' : ''}`} key={index}>
                  <div className="course-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="name-course">
                    <p>{item.name}</p>
                  </div>
                  { item.status === 'progress' ? <div className="hide-progress">
                      <h5>Tez kunda: {item.name}</h5>
                    </div> : null }
                </Link>
            ))
          }
        </div>
        <Link to='/courses'>
          <button>Barchasini Ko'rish</button>
        </Link>
    </div>
  )
}

export default IntroCourse