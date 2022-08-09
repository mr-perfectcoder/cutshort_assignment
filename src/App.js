import Step1 from './Pages/Step1'
import Step2 from './Pages/Step2'
import Step3 from './Pages/Step3'
import Stepper from './components/Stepper'
import Step4 from './Pages/Step4'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
function App() {
  return (
    <div className='min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto'>
        <Header />
        <Stepper />
        <Routes>
          <Route path='/' element={<Step1 />} />
          <Route path='step2' element={<Step2 />} />
          <Route path='step3' element={<Step3 />} />
          <Route path='step4' element={<Step4 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
