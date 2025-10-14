import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Counter from '../../components/HomeComponents/Counter'
import SolarEquipmentGrid from '../../components/HomeComponents/SolarEquipmentGrid'
import Faq from '../../components/HomeComponents/Faq'
import Work from '../../components/HomeComponents/Work'
import Member from '../../components/HomeComponents/Member'
import Benefits from '../../components/HomeComponents/Benefits'
import ClientReview from '../../components/HomeComponents/ClientReview'
import Cta from '../../components/HomeComponents/Cta'
import { useLoaderData } from 'react-router'


export default function Home() {

  const data = useLoaderData()

  return (
    <div>
      <Hero/>
      <Counter></Counter>
      <SolarEquipmentGrid products={data}  ></SolarEquipmentGrid>
      <Faq></Faq>
      <Work></Work>
      <Member></Member>
      <Benefits></Benefits>
      <ClientReview></ClientReview>
      <Cta></Cta>
    </div>
  )
}
