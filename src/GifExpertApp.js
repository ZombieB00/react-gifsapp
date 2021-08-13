import React, { useState } from 'react'  // rafc
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One punch', 'One Piece', 'Naruto'];
    const [categories, setcategories] = useState(['One punch']);

    // const handleAdd = () => {
    //     // setcategories(['Hunter x Hunter', ...categories]);
    //     setcategories(cats => [...categories, 'Hunter x Hunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
            <hr/>

                {/* <button onClick={handleAdd}>Agregar</button> */}
            <ul>
                {
                    categories.map(category => <GifGrid key={category} category={category}/>)
                }
            </ul>
        </>
    )
}
