import React from 'react'
import frame1 from '../../assets/Img/1.png'
import frame2 from '../../assets/Img/3.png'
import frame3 from '../../assets/Img/4.png'
import svg1 from '../svg/Group.svg'
import svg2 from '../svg/Group (1).svg'
import svg3 from '../svg/Group (2).svg'
import bgSvg from '../svg/home-bg-svg-2.svg'
import circleSvg from '../svg/circle-svg.svg'


export default function Benefits() {
    return (
        <section className='bg-primary-foreground py-20 relative overflow-hidden' >

            <img className="absolute  bottom-10  left-2 z-1" src={bgSvg} alt="bg svg" />
            <img className="absolute  top-10 right-2 z-1" src={bgSvg} alt="bg svg" />
            <img className="absolute  size-200 -top-22 right-125 z-1" src={circleSvg} alt="bg svg" />

            <div className='2xl:max-w-9/12 relative z-10 max-w-11/12 mx-auto py-20'>

                <h2 className="text-4xl font-bold mb-6 text-center">Benefits of Joining the Solar Revolution</h2>

                <div className='grid grid-cols-3 gap-10'>



                    <div className="relative h-50 w-full p-8 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl duration-600 ease-in-out cursor-grab">
                        {/* Bg img */}
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-700"
                            style={{
                                backgroundImage: `url(${frame3})`,
                                transform: 'rotate(180deg)',
                            }}
                        ></div>

                        {/* Content  */}
                        <div className="relative space-y-4">
                            <img src={svg1} alt="svg img" />
                            <h5 className="text-2xl font-bold">Save Money</h5>
                            <p className="text-sm text-gray-500">
                                Affordable second-hand solar equipment for your projects.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-50 w-full p-8 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl duration-600 ease-in-out cursor-grab">
                        {/* Bg img */}
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-700"
                            style={{
                                backgroundImage: `url(${frame2})`,
                                transform: 'rotate(180deg)',
                            }}
                        ></div>

                        {/* Content  */}
                        <div className="relative space-y-4">
                            <img src={svg2} alt="svg img" />
                            <h5 className="text-2xl font-bold">Reduce Waste</h5>
                            <p className="text-sm text-gray-500">
                                Help reduce e-waste by recycling old solar panels.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-50 w-full p-8 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl duration-600 ease-in-out cursor-grab">
                        {/* Bg img */}
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-700"
                            style={{
                                backgroundImage: `url(${frame1})`,
                                transform: 'rotate(180deg)',
                            }}
                        ></div>

                        {/* Content  */}
                        <div className="relative space-y-4">
                            <img src={svg3} alt="svg img" />
                            <h5 className="text-2xl font-bold">Promote Sustainability</h5>
                            <p className="text-sm text-gray-500">
                                Support green energy practices and protect the environment.
                            </p>
                        </div>
                    </div>



                </div>

            </div>
        </section>
    )
}
