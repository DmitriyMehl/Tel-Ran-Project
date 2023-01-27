import React from 'react'
import Banner from '../../components/Banner'
import DiskountsForm from '../../components/DiscountsForm'
import Stock from '../../components/Stock'
import CategoriesPages from '../CategoriesPages'

export default function HomePages() {
  return (
    <div>
        <Banner />
        <CategoriesPages />
        <DiskountsForm />
        <Stock />
    </div>
  )
}
