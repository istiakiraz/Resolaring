import React from 'react'
import ProductPagesHeader from '../../components/ProductPagesComponents/ProductPagesHeader'
import Product from '../../components/ProductPagesComponents/Product'
import { useLoaderData } from 'react-router';

export default function Marketplace() {

const data = useLoaderData();


  return (
    <div>
        <ProductPagesHeader></ProductPagesHeader>
        <Product allProducts={data}  ></Product>
    </div>
  )
}
