import React from 'react'
import ThisCourseCover from '../../assets/Group_33.png'
const WhyCourses = () => {
    const array = [
        {
            important: 'Uyda non pishirishni o‘rganishni orzu qilasiz,',
            firstPart: '',
            secondPart: 'shunda sanoat do‘kon noni yoki qimmat novvoyxona noni o‘rniga o‘z qo‘lingiz bilan pishirilgan non iste’mol qilasiz',
        },
        {
            important: 'Uyda non pishirishni o‘rganishni orzu qilasiz,',
            firstPart: '',
            secondPart: 'shunda sanoat do‘kon noni yoki qimmat novvoyxona noni o‘rniga o‘z qo‘lingiz bilan pishirilgan non iste’mol qilasiz',
        },
        {
            important: 'Uyda non pishirishni o‘rganishni orzu qilasiz,',
            firstPart: '',
            secondPart: 'shunda sanoat do‘kon noni yoki qimmat novvoyxona noni o‘rniga o‘z qo‘lingiz bilan pishirilgan non iste’mol qilasiz',
        },
        {
            important: 'Uyda non pishirishni o‘rganishni orzu qilasiz,',
            firstPart: '',
            secondPart: 'shunda sanoat do‘kon noni yoki qimmat novvoyxona noni o‘rniga o‘z qo‘lingiz bilan pishirilgan non iste’mol qilasiz',
        },
        {
            important: 'Uyda non pishirishni o‘rganishni orzu qilasiz,',
            firstPart: '',
            secondPart: 'shunda sanoat do‘kon noni yoki qimmat novvoyxona noni o‘rniga o‘z qo‘lingiz bilan pishirilgan non iste’mol qilasiz',
        },
        {
            important: 'Uyda non pishirishni o‘rganishni orzu qilasiz,',
            firstPart: '',
            secondPart: 'shunda sanoat do‘kon noni yoki qimmat novvoyxona noni o‘rniga o‘z qo‘lingiz bilan pishirilgan non iste’mol qilasiz',
        },
    ]
  return (
    <div className='whyThisCourse'>
        <h1>Bizning <span>kurslarimiz</span> siz uchun, agar siz:</h1>
        <div className="steps">
            {
                array.map((item, index) => (
                    <div className='step-div' key={index}>
                        <div className="rad">
                            <p>
                                {index+1}
                            </p>
                        </div>
                        <div className="step-tex">
                            <p>{item.firstPart} <span>{item.important}</span> {item.secondPart}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="thisCourse-cover">
            <img src={ThisCourseCover} alt="cover" />
        </div>
    </div>
  )
}

export default WhyCourses