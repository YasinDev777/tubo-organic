import React from 'react'
import CoverCourse from '../../assets/cover-course.png'
const IntroCourse = () => {
  const array = [
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'done'
    },
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'progress'
    },
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'progress'
    },
    {
      name: 'kulinariya',
      img: CoverCourse,
      status: 'progress'
    },
    {
      name: 'kulinariyaawdawsawdawswad',
      img: CoverCourse,
      status: 'progress'
    },
    {
      name: 'kulinariya',
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
            array.map((item, index) => (
              <div className='course-div' key={index}>
                <div className="course-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="name-course">
                  <p>{item.name}</p>
                </div>
                { item.status === 'progress' ? <div className="hide-progress">
                    <h5>Tez kunda: {item.name}</h5>
                  </div> : null }
              </div>
            ))
          }
        </div>
        <button>Barchasini Ko'rish</button>
    </div>
  )
}

export default IntroCourse