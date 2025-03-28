import React from 'react'
import firstImage from '../../assets/noroot.png'
import secondImage from '../../assets/IMG_0701-2.jpg'
import thirdImage from '../../assets/noroot1.png'

const AboutPov = () => {
    return (
        <div className='AboutPov'>
            <h1>Kurs Boshlovchisi</h1>

            <div className="PovInfo">
                <div className="PovImage">
                    <div className="firstPovPart">
                        <img src={firstImage} alt="" />
                        <img src={secondImage} alt="" />
                    </div>
                    <div className="secondPovPart">
                        <img src={thirdImage} alt="" />
                    </div>
                </div>

                <div className='PovPrefers'>
                    <h3>Анна Ботти - основатель школы Оh my Bread и автор программы курса</h3>
                    <div className="prefers">
                        <ul>
                            <li>
                                <span>Руководитель и создатель онлайн-школы и сообщества </span>
                                Oh my Bread, где ежедневно находят поддержку и успешно прошли обучение свыше 20 000 участников
                            </li>     
                            <li>
                                <span>Пекарь с многолетним стажем</span>, специалист по выпечке на закваске с 2015 года.
                                <span> Разработала уникальную технологию</span>, которую широко применяют как домашние пекари, так и профессионалы на производствах и в ремесленных пекарнях.
                            </li>
                            <li>
                                <span>Создатель оригинальных рецептур Oh my Bread</span>, позволяющих печь хлеб на закваске самого высокого уровня.
                                <span> Стажировалась</span> выпечке хлеба в европейских <span>профессиональных ремесленных пекарнях</span>.
                            </li>     
                            <li>
                                <span>Участница мировых мастер-классов</span> и семинаров по хлебопечению у Francesco Carusi, Richard Bertinet, Stephano Parisi, Apollonia Poilane, Alberto Bernardi и многих других    
                            </li>     
                            <li>
                                <span>Дипломированный психолог и преподаватель</span> психологии, окончила МГУ им. М.В. Ломоносова.
                            </li>
                            <li>
                                <span>Мама </span> троих детей
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPov