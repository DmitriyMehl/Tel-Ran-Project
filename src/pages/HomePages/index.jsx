import React from 'react'
import Banner from '../../components/Banner'
import DiskountsForm from '../../components/DiscountsForm'
import Stock from '../../components/Stock'
import CategoriesHomePages from "../CategoriesHomePages"

export default function HomePages() {
  return (
    <div>
        <Banner />
        <CategoriesHomePages />
        <DiskountsForm />
        <Stock />
    </div>
  )
}
