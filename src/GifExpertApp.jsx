import {useState} from 'react'
import AddCategory  from './components/AddCategory'

import './App.css'
import GifGrid from './components/GifGrid'

function GifExpertApp() {
  
  const [ categories, setCategories ] = useState([''])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;  
    setCategories([...categories, newCategory])

  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={(value) => onAddCategory(value)}
       />

       {
        categories.map( (category ) => (
          <GifGrid 
            key={category}
            category={category}
          />
        ))
       }
    </>
  )
}

export default GifExpertApp
