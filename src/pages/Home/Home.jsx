import React from 'react'
import Hero from './HomeComponents/Hero'
import Counter from './HomeComponents/Counter'
import SolarEquipmentGrid from './HomeComponents/SolarEquipmentGrid'


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Counter></Counter>
      <SolarEquipmentGrid></SolarEquipmentGrid>
    </div>
  )
}
