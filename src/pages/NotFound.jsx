import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="brand-header">
          <h1 className="logo-text">Tubo Organic</h1>
          <div className="leaf-decoration">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="var(--main-color)"/>
              <path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z" fill="var(--util-main-color)"/>
              <path d="M12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9Z" fill="var(--borderOf-main-color)"/>
            </svg>
          </div>
        </div>

        <div className="error-message">
          <h2 className="error-code">404</h2>
          <h3 className="error-title">Sahifa topilmadi</h3>
          <p className="error-description">
            Kechirasiz, siz qidirgan sahifa mavjud emas yoki o'chirilgan bo'lishi mumkin.
          </p>
        </div>

        <div className="action-buttons">
          <Link to="/" className="home-button">
            Bosh sahifaga qaytish
          </Link>
          <Link to="/courses" className="courses-button">
            Kurslarga o'tish
          </Link>
        </div>

        <div className="organic-decoration">
          <div className="leaf leaf-1"></div>
          <div className="leaf leaf-2"></div>
          <div className="leaf leaf-3"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;