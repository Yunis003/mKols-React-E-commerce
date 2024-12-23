import React from 'react'
import './main.css'
import Category from '../Category/Category'
import Flashsales from '../Flashsales/Flashsales'
import BrowseCategory from '../BrowseCategory/BrowseCategory'
import BestSellingProducts from '../BestSellingProducts/BestSellingProducts'
import Marketing from '../Marketing/Marketing'
import NewArrival from '../NewArrival/NewArrival'
export default function Main() {
  return (
    <div className='mainAll'>
      <Category/>
      <Flashsales/>
      <BrowseCategory/>
      <BestSellingProducts/>
      <Marketing/>
      <NewArrival/>
    </div>
  )
}
