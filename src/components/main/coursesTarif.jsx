import { getDocs, query, where, collection, doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase'
import React, { useEffect, useState } from 'react'
import circleCheck from '../../assets/vectors/circle-check-big.svg'
import circleX from '../../assets/vectors/circle-x.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchTarifs } from "../../redux/slices/TarifsSlice";

const CoursesTarif = () => {
  // const texnikalar = [
  //   {
  //     texnika_name: 'Texnikalar',
  //     texnikalar_have: [
  //       {
  //         name: 'Hamirturish',
  //         have: true
  //       },
  //       {
  //         name: 'Livito madri hamirturish',
  //         have: true
  //       },
  //       {
  //         name: 'Hamirturish tayyorlash texnikasi',
  //         have: true
  //       },
  //       {
  //         name: 'Qoliplar va pishirish texnikasi',
  //         have: true
  //       },
  //       {
  //         name: 'Unlarning turlari',
  //         have: true
  //       },
  //       {
  //         name: 'Pechenye mahsulotlari videosi',
  //         have: true
  //       },
  //     ]
  //   },
  //   {
  //     texnika_name: 'Pishiriladigan nonlar',
  //     texnikalar_have: [
  //       {
  //         name: 'Anchan choyli tartin(non)',
  //         have: true
  //       },
  //       {
  //         name: 'Arpali non',
  //         have: true
  //       },
  //       {
  //         name: 'Ovsyankali non',
  //         have: true
  //       },
  //       {
  //         name: 'Undirilgan grechkali non',
  //         have: true
  //       },
  //       {
  //         name: 'Oddiy tartin(non)',
  //         have: true
  //       },
  //       {
  //         name: 'Bulochka sinnabon',
  //         have: true
  //       },
  //       {
  //         name: 'Fakochcha',
  //         have: true
  //       },
  //       {
  //         name: 'Hamirturishsiz non',
  //         have: true
  //       },
  //     ]
  //   },
  //   {
  //     texnika_name: 'Pishiriladigan pechenyelar',
  //     texnikalar_have: [
  //       {
  //         name: 'Kakaoli peryannik',
  //         have: true
  //       },
  //       {
  //         name: "O'rikli pechenye",
  //         have: true
  //       },
  //       {
  //         name: 'Xurmoli pechenye',
  //         have: true
  //       },
  //       {
  //         name: 'Shokoladli tart',
  //         have: true
  //       },
  //       {
  //         name: 'Arpali pechenye',
  //         have: true
  //       },
  //       {
  //         name: 'Fermentatsiyali pechenye',
  //         have: true
  //       },
  //       {
  //         name: 'Tvarojni',
  //         have: true
  //       },
  //       {
  //         name: 'Medovik',
  //         have: true
  //       },
  //       {
  //         name: 'Medovik',
  //         have: true
  //       },
  //       {
  //         name: 'Biskvit',
  //         have: true
  //       },
  //     ]
  //   },
  //   {
  //     texnika_name: 'Bonus',
  //     texnikalar_have: [
  //       {
  //         name: 'Tabiiy muzqaymoq kursi',
  //         have: true
  //       },
  //       {
  //         name: 'Yopiq telegram guruh',
  //         have: true
  //       },
  //       {
  //         name: 'Ustoza nazorati',
  //         have: true
  //       },
  //       {
  //         name: 'Ustoza bilan jonli efir',
  //         have: true
  //       },
  //       {
  //         name: 'Ustoza bilan jonli uchrashuv',
  //         have: true
  //       },
  //     ]
  //   }
  // ]

  // async function addUserDataByTarifId(tarifId, newUserData) {
  //   const usersCollection = collection(db, "tarifs");
  //   const q = query(usersCollection, where("tarif_id", "==", tarifId));

  //   try {
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach(async (docSnapshot) => {
  //       const userDocRef = doc(db, "tarifs", docSnapshot.id);
  //       await updateDoc(userDocRef, { techniques: newUserData });
  //       console.log("Данные успешно добавлены!");
  //     });
  //   } catch (e) {
  //     console.error("Ошибка добавления данных: ", e);
  //   }
  // }


  // const tarifId = 2; // тариф ID
  // addUserDataByTarifId(tarifId, texnikalar);

  const dispatch = useDispatch()
  const { data: tarifs, status: tarifsStatus, error: tarifsError } = useSelector(state => state.courses)
  const [sortedTarif, setSortedTarif] = useState([])
  useEffect(() => {
    dispatch(fetchTarifs())
    if (tarifsStatus === 'success') {
      const sort = [...tarifs].sort((a, b) => a.tarif_id - b.tarif_id)
      setSortedTarif(sort)
    }
  }, [dispatch, tarifs.length])

  return (
    <div className='coursesTarif'>
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
            <Link to='https://t.me/tubo_manager' target='__blank'>
              <button>Sotib Olish</button>
            </Link>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default CoursesTarif