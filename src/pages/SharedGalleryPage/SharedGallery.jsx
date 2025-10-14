import React from 'react'
import GalleryHeader from '../../components/SharedGalleryComponents/GalleryHeader'
import SolarEquipmentGrid from '../../components/HomeComponents/SolarEquipmentGrid'
import { useLoaderData } from 'react-router'

export default function SharedGallery() {

  const data = useLoaderData()


  return (
    <div>
        <GalleryHeader/>
        <SolarEquipmentGrid products={data} />
    </div>
  )
}
