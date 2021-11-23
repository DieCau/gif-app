import React, { useState } from 'react'
import AddCategory from './AddCategory'
const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HunterXHunter'] )
    // }



    return (
        <>
            <h2>GifApp</h2>
            <AddCategory />
            <hr />

     

            <ol>
            
            {
                categories.map( category => {
                    return <li key={ category }>{ category }</li>
                })
            }
            
            </ol>
        </>
    )
}

export default GifApp
