import React from 'react'
import Header from '../components/header'
import Table from '../components/table'

const orders = () => {
  return (
    <>
    <Header Title = "Orders" buttonTitle = "Add Orders"/>
    <Table/>
    </>
  )
}

export default orders