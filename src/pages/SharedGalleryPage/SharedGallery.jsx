import React from 'react'
import GalleryHeader from '../../components/SharedGalleryComponents/GalleryHeader'
import SolarEquipmentGrid from '../../components/HomeComponents/SolarEquipmentGrid'
import { useLoaderData } from 'react-router'
import GalleryProduct from '../../components/SharedGalleryComponents/GalleryProduct'
import Cta from '../../components/HomeComponents/Cta'

export default function SharedGallery() {

  const data = useLoaderData()


  return (
    <div>

      <GalleryHeader />
      <GalleryProduct products={data} />
      <Cta></Cta>
      
    </div>
  )
}
