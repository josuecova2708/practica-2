import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'
import GetPhotos from './components/GetPhotos'


function App() {
  const [initialValue, setInitialValue] = useState("")  
  const [searchTerm, setSearchTerm] = useState("") 
  

  const getValue = (e) => {
    setSearchTerm("")
    setInitialValue(e.target.value)
  }

  
  const handleSearch = (searchValue) => {
    setInitialValue("")
    setSearchTerm(searchValue)   }

  return (
    <>
      <div className='container bg-black min-h-screen flex-col flex items-center'>
        <h1 className='text-white text-center text-5xl font-serif pt-4'>Galería de Fotos</h1>

        
        <Search onSearch={handleSearch} />

        <div className='buttons_container flex flex-wrap gap-11 justify-center mt-8 w-full'>
          <button value="Dogs" onClick={getValue} className='w-12 h-8 bg-slate-400 text-white'>Dogs</button>
          <button value="Cats" onClick={getValue} className='w-12 h-8 bg-slate-400 text-white'>Cats</button>
          <button value="soccer" onClick={getValue} className='w-12 h-8 bg-slate-400 text-white'>Soccer</button>
          <button value="sky" onClick={getValue} className='w-12 h-8 bg-slate-400 text-white'>Sky</button>
        </div>

       
        <GetPhotos category={searchTerm || initialValue} />
      </div>
    </>
  )
}




export default App
