import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (target) => {
        setInputValue(target.value)
        if(inputValue.trim().length <= 1) return;
    }

    const onSubmit = (event) => {
      event.preventDefault();

      setInputValue('')
      onNewCategory(inputValue.trim())

    }

    return ( 

        <form  onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}

                />
        </form>
     );
}
 
export default AddCategory;