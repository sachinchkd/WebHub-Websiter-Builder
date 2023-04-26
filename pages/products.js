import React from 'react'
import Header from '../components/header'
import Table from '../components/table'
import Link from 'next/link'
import Router from 'next/router'

const products = () => {

  const handleClick = () =>{
    Router.push('/addproduct');
  }

  return (
    <>
    

      <Header Title = "Products" buttonTitle = "Add Products" onClick={handleClick}/>
    
      
    <Table/>
    </>
    
    
  )
}

export default products