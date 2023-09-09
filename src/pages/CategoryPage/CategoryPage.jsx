import { useState } from 'react'
import Category from "../../../models/category.cjs"


export default function CategoryPage({ categories }){

    const categories = categories.map((category) => {
        return (
            <div>
                <h1>{category.name}</h1>
            </div>
        )
    })



    return(
        <>
            <h1></h1>
        </>
    )
}