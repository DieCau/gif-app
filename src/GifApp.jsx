import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory ) => {
        
        setCategories([...categories, newCategory ])
    
    }



    return (
    <>
        <h1>GifApp</h1>
        
        <AddCategory 
            onNewCategory = { onAddCategory } 
        />

       
        { categories.map( (category) => (
                <GifGrid 
                    key={ category } 
                    category={ category } />
            )) 
        }

       
    </>
  )
}
