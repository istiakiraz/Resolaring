import React from 'react'
import RecyclingHeader from '../../components/RecyclingProcessComponents/RecyclingHeader'
import Member from '../../components/HomeComponents/Member'
import ClientReview from '../../components/HomeComponents/ClientReview'
import Cta from '../../components/HomeComponents/Cta'
import PanelsRecycled from '../../components/RecyclingProcessComponents/PanelsRecycled'

export default function RecyclingProcess() {
    return (
        <div>
            <RecyclingHeader></RecyclingHeader>
            <PanelsRecycled></PanelsRecycled>
            <Member></Member>
            <ClientReview></ClientReview>
            <Cta></Cta>

        </div>
    )
}
