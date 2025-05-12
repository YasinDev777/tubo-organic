import React, { useEffect, useState } from 'react'
import circleCheck from '../../assets/vectors/circle-check-big.svg'
import circleX from '../../assets/vectors/circle-x.svg'
import { useDispatch, useSelector } from "react-redux";
import { fetchTarifs } from "../../redux/slices/TarifsSlice";
import BuyPopUp from "../BuyPopUp";

const CoursesTarif = () => {
  const dispatch = useDispatch()
  const { data: tarifs, status: tarifsStatus, error: tarifsError } = useSelector(state => state.tarifs)
  const [sortedTarif, setSortedTarif] = useState([])
  const [activePopUp, setActivePopUp] = useState(false)
  useEffect(() => {
    dispatch(fetchTarifs())
    if (tarifsStatus === 'success') {
      const sort = [...tarifs].sort((a, b) => a.tarif_id - b.tarif_id)
      setSortedTarif(sort)
    }
  }, [dispatch, tarifs.length])

  return (
    <div className='coursesTarif'>
      <BuyPopUp active={activePopUp} setIsActive={setActivePopUp} />
      <div className="coursesTarif__text">
        <h1>MAVJUD <span>KURSLAR</span></h1>
        <p>Bir martta to’lab, umrbod sog’lom ovqatlaning!</p>
      </div>
      <div className="coursesTarif__tarifs">
        {
          sortedTarif.map((item, index) => (
          <div className="coursesTarif__tarif" key={index}>
            <h1>{item.tarif_name}</h1>
            <div className="moduls">
              {
                item.techniques.map((itemT, index) => (
                  <div className="modul" key={index}>
                    <h5>{itemT.texnika_name}</h5>
                    <div className='what-have'>
                      {
                        itemT.texnikalar_have.map((itemH, index) => (
                          <p key={index}><img src={itemH.have ? circleCheck : circleX} loading='lazy' alt="icon" /> {itemH.name}</p>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
            <span>{item.price} so'm</span>
              <button onClick={() => setActivePopUp(!activePopUp)}>Sotib Olish</button>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default CoursesTarif