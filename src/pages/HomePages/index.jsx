import React from 'react'
import Banner from '../../components/Banner'
import CategoriesCard from '../../components/CategoriesCard'
import DiskountsForm from '../../components/DiscountsForm'
import Stock from '../../components/Stock'
import CategoriesPage from '../CategoriesPages'

export default function HomePages() {
  return (
    <div>
        <Banner />
        <CategoriesPage />
        <DiskountsForm />
        <Stock />
    </div>
  )
}
