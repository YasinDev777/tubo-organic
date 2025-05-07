import React from 'react'
import circleCheck from '../../assets/vectors/circle-check-big.svg'
import circleX from '../../assets/vectors/circle-x.svg'

const CoursesTarif = () => {
  const array = [
    {
      tarif_name: 'standart',
      price: '499.000',
      texnikalar: [
        {
          texnika_name: 'Texnikalar',
          texnikalar_have: [
            {
              name: 'Hamirturish',
              have: true
            },
            {
              name: 'Livito madri hamirturish',
              have: false
            },
            {
              name: 'Hamirturish tayyorlash texnikasi',
              have: true
            },
            {
              name: 'Qoliplar va pishirish texnikasi',
              have: true
            },
            {
              name: 'Unlarning turlari',
              have: true
            }
          ]
        },
        {
          texnika_name: 'Pishiriladigan nonlar',
          texnikalar_have: [
            {
              name: 'Arpali non',
              have: true
            },
            {
              name: 'Ovsyankali non',
              have: true
            },
            {
              name: 'Undirilgan grechkali non',
              have: true
            },
            {
              name: 'Oddiy tartin(non)',
              have: true
            }
          ]
        }
      ],
    },
    {
      tarif_name: 'TUBO V.I.P',
      price: '1.199.000',
      texnikalar: [
        {
          texnika_name: 'Texnikalar',
          texnikalar_have: [
            {
              name: 'Hamirturish',
              have: true
            },
            {
              name: 'Livito madri hamirturish',
              have: false
            },
            {
              name: 'Hamirturish tayyorlash texnikasi',
              have: true
            },
            {
              name: 'Qoliplar va pishirish texnikasi',
              have: true
            },
            {
              name: 'Unlarning turlari',
              have: true
            }
          ]
        },
        {
          texnika_name: 'Pishiriladigan nonlar',
          texnikalar_have: [
            {
              name: 'Arpali non',
              have: true
            },
            {
              name: 'Ovsyankali non',
              have: true
            },
            {
              name: 'Undirilgan grechkali non',
              have: true
            },
            {
              name: 'Oddiy tartin(non)',
              have: true
            }
          ]
        }
      ],
    },
    {
      tarif_name: 'premium',
      price: '799.000',
      texnikalar: [
        {
          texnika_name: 'Texnikalar',
          texnikalar_have: [
            {
              name: 'Hamirturish',
              have: true
            },
            {
              name: 'Livito madri hamirturish',
              have: false
            },
            {
              name: 'Hamirturish tayyorlash texnikasi',
              have: true
            },
            {
              name: 'Qoliplar va pishirish texnikasi',
              have: true
            },
            {
              name: 'Unlarning turlari',
              have: true
            }
          ]
        },
        {
          texnika_name: 'Pishiriladigan nonlar',
          texnikalar_have: [
            {
              name: 'Arpali non',
              have: true
            },
            {
              name: 'Ovsyankali non',
              have: true
            },
            {
              name: 'Undirilgan grechkali non',
              have: true
            },
            {
              name: 'Oddiy tartin(non)',
              have: true
            }
          ]
        }
      ],
    },
  ]
  
  return (
    <div className='coursesTarif'>
      <div className="coursesTarif__text">
        <h1>MAVJUD <span>KURSLAR</span></h1>
        <p>Bir martta to’lab, umrbod sog’lom ovqatlaning!</p>
      </div>
      <div className="coursesTarif__tarifs">
        {
          array.map((item, index) => (
          <div className="coursesTarif__tarif" key={index}>
            <h1>{item.tarif_name}</h1>
            <div className="moduls">
              {
                item.texnikalar.map((itemT, index) => (
                  <div className="modul" key={index}>
                    <h5>{itemT.texnika_name}</h5>
                    <div className='what-have'>
                      {
                        itemT.texnikalar_have.map((itemH, index) => (
                          <p key={index}><img src={itemH.have ? circleCheck : circleX} alt="icon" /> {itemH.name}</p>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
            <span>{item.price} so'm</span>
            <button>Sotib Olish</button>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default CoursesTarif