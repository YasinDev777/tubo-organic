import React, { useState } from "react";
import calendarIcon from "../../assets/calendar.png";
import introImage from "../../assets/intro-img.png";

const Header = ({ position }) => {
    return (
        <header>
            <div className="header">
                <div className="intro">
                    <div className="intro-div">
                        <div className="ico">
                            <img src={calendarIcon} alt="icon of calendar" />
                        </div>
                        <h3>Hozirdan boshlang</h3>
                    </div>
                    <div className="intro-tex">
                        <div className="main-intro-tex">
                            <h1>
                                Kurs «<span>Tubo Organic</span>»
                            </h1>
                            <p>Asosiy xamirturushsiz non yopish</p>
                        </div>
                        <h3>Birinchi noningni atigi bir hafta ichida pishir!</h3>
                        <button className="intro-tex-btn">O'rganish</button>
                    </div>
                </div>
                <div className="intro-img">
                    <img
                        src={introImage}
                        alt="introImage"
                        style={{
                            left: `${position.x}%`,
                            top: `${position.y}%`,
                        }}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;