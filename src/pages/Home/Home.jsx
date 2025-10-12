import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Counter from '../../components/HomeComponents/Counter'
import SolarEquipmentGrid from '../../components/HomeComponents/SolarEquipmentGrid'


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Counter></Counter>
      <SolarEquipmentGrid></SolarEquipmentGrid>
    </div>
  )
}
