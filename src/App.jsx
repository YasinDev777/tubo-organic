import React, { useEffect, useMemo } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Login from './pages/Login'
import Courses from './pages/Courses'
import FullCourse from './pages/FullCourse'
import LogedInMain from './pages/LogedInMain'
import "./styles/App.scss"

const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.getItem('userData')
  }, [navigate])
  const isLogedIn = localStorage.getItem('userData')
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={isLogedIn ? <LogedInMain /> : <Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<FullCourse />} />
      </Routes>
    </div>
  )
}

export default App

// // Компонент, который будет перерендериваться, если переданная функция меняется
// const ListItem = memo(({ index, onClick }) => {
//   console.log("Rendering Item:", index);
//   return <div onClick={() => onClick(index)}>Item {index}</div>;
// });

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [list, setList] = useState(new Array(5000).fill(null).map((_, i) => i));

//   // Функция, которая будет передаваться в ListItem
//   const handleClick = useCallback((index) => {
//     console.log(`Item ${index} clicked`);
//   }, []);

//   // Без useCallback эта функция будет пересоздаваться при каждом рендере
//   return (
//     <>
//       <h1>Parent Render Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <div>
//         {list.map((index) => (
//           <ListItem key={index} index={index} onClick={handleClick} />
//         ))}
//       </div>
//     </>
//   );
// };


// export default App