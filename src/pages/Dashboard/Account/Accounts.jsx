import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function Accounts() {

  const [showPass, setShowPass] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        alert('password are not same')
    }

  return (
   <div className="w-11/12 mx-auto  bg-white ">
   
                           <div className="flex justify-between items-center mb-6">
                               <h2 className="text-2xl lg:text-3xl font-semibold">Account</h2>
                               <div className="space-x-3">
                                   <Button className='cursor-pointer rounded-full duration-300 ease-in-out' variant="outline">Discard</Button>
                                   <Button className="bg-[#b45c3d] cursor-pointer rounded-full duration-300 ease-in-out hover:bg-[#6c3825] text-white">
                                       Update Info
                                   </Button>
                               </div>
                           </div>
                           <p className="text-gray-500 mb-10">
                               View and edit your personal info below.
                           </p>
   
   
                           <section className="border-t pt-8 mb-10">
                               <h3 className="text-lg font-semibold mb-1">Display info</h3>
                               <p className="text-sm text-gray-500 mb-6">
                                   This information will be visible to all members of this site.
                               </p>
                               <div className="grid md:grid-cols-2 gap-6 items-center">
                                   <div>
                                       <label className="text-sm text-gray-600">Display Name</label>
                                       <Input placeholder="John Doe" className="mt-1" />
                                       <label className="text-sm text-gray-600 mt-4 block">Title</label>
                                       <Input placeholder="Businessman" className="mt-1" />
                                   </div>
                                   <div className="flex flex-col items-center md:items-end">
                                       <div className="text-sm text-gray-500 mb-2">Profile Image</div>
                                       <img
                                           src="https://i.ibb.co.com/xqhSpk1S/business-man-banner-concept-with-copy-space-1.png"
                                           alt="Profile"
                                           className="w-20 h-20 rounded-full object-cover border"
                                       />
                                   </div>
                               </div>
                           </section>
   
                           {/* personal */}
                           <section className="border-t pt-8 mb-10">
                               <h3 className="text-lg font-semibold mb-1">Personal info</h3>
                               <p className="text-sm text-gray-500 mb-6">
                                   Update your personal information.
                               </p>
                               <div className="grid md:grid-cols-2 gap-6">
                                   <div>
                                       <label className="text-sm text-gray-600">First name</label>
                                       <Input placeholder="John" className="mt-1" />
                                   </div>
                                   <div>
                                       <label className="text-sm text-gray-600">Last name</label>
                                       <Input placeholder="Doe" className="mt-1" />
                                   </div>
                                   <div className="md:col-span-2">
                                       <label className="text-sm text-gray-600">Phone</label>
                                       <Input placeholder="+8801760000000" className="mt-1" />
                                   </div>
                               </div>
   
                               <div className="flex justify-end mt-8 space-x-3">
                                   <Button className='cursor-pointer rounded-full duration-300 ease-in-out' variant="outline">Discard</Button>
                                   <Button className="bg-[#b45c3d] cursor-pointer rounded-full duration-300 ease-in-out hover:bg-[#6c3825] text-white">
                                       Save Changes
                                   </Button>
                               </div>
                           </section>
   
                           {/* Login Info */}
                           <section className="border-t pt-8 mb-10">
                               <h3 className="text-lg font-semibold mb-1">Login info</h3>
                               <p className="text-sm text-gray-500 mb-6">
                                   View and update your login email and password.
                               </p>
                               <div className="space-y-4">
   
                                   {/* email dialog */}
                                   <div>
                                       <p className="text-gray-700 text-sm">
                                           Login email: <span className="font-medium">demo@gmail.com</span>
                                       </p>
   
                                        <Dialog>
                                           <DialogTrigger><button className="hover:underline cursor-pointer text-sm mt-1">Change Email</button></DialogTrigger>
                                           <DialogContent>
                                               <DialogHeader>
   
                                                   <form className='mt-4'
                                                       onSubmit={handleSubmit(onSubmit)}
                                                   >
                                                       <h4 className='font-semibold text-2xl' >Change login email</h4>
                                                       <p className='text-gray-500 mb-2' >This will be your new login email.</p>
                                                       <div className="mb-1 sm:mb-2">
                                                           {/* name */}
                                                           <div className="mb-4 relative">
                                                              
                                                               <input
                                                                   placeholder="If you used Google or Facebook to log in, use this new email to continue logging in that way."
                                                                   {...register("name", { required: true })}
                                                                   type="text"
                                                                   className={`pl-10 flex-grow w-full h-12  transition duration-200 bg-gray-100 border rounded-xl appearance-none
                                                               ${errors.name ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
                                                               focus:outline-secondary focus:shadow-outline`}
                                                                   name="name"
                                                               />
   
   
                                                           </div>
                                                           {/* email */}
                                                           <div className="mb-4 relative">
                                                               <label className='text-sm'>New email</label>
                                                               <input
                                                                   placeholder="johndoe@gmail.com"
                                                                   {...register("email", { required: true })}
                                                                   type="email"
                                                                   className={`pl-10 flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border rounded-xl appearance-none
                                                               ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
                                                               focus:outline-secondary focus:shadow-outline`}
                                                                   name="email"
                                                               />
   
   
                                                           </div>
                                                           {/* email */}
                                                           <div className="mb-4 relative">
                                                               <label className='text-sm'>Confirm new email</label>
                                                               <input
                                                                   placeholder="johndoe@gmail.com"
                                                                   {...register("ConfirmEmail", { required: true })}
                                                                   type="email"
                                                                   className={`pl-10 flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border rounded-xl appearance-none
                                                               ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
                                                               focus:outline-secondary focus:shadow-outline`}
                                                                   name="ConfirmEmail"
                                                               />
   
   
                                                           </div>
   
                                                        
                                                           {/* pass 2 */}
                                                           <div className="mb-4 relative">
                                                               <div className='flex justify-between mb-2 items-center'>
                                                                   <label className='text-sm'>Your Password</label>
                                                               </div>
                                                               <input
                                                                   placeholder="**********"
                                                                   {...register("password", { required: true })}
                                                                   type={showPass ? "text" : "password"}
                                                                   className={`pl-10 flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border rounded-xl appearance-none
                                                               ${errors.password2 ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
                                                               focus:outline-secondary focus:shadow-outline`}
                                                                   name="password2"
                                                               />
   
                                                               <button
                                                                   type="button"
                                                                   onClick={() => {
                                                                       setShowPass(!showPass);
                                                                   }}
                                                                   className="btn btn-xs absolute top-10  right-6"
                                                               >
                                                                   {showPass ? (
                                                                       <FaEyeSlash color="gray" size={22} />
                                                                   ) : (
                                                                       <FaEye color="gray" size={22} />
                                                                   )}
                                                               </button>
   
                                                               {/* remember */}
                                                               <div className="flex items-center mt-4 justify-between">
                                                                   <label className="flex items-center gap-2 text-sm">
                                                                     
                                                                       <span className='text-sm hover:underline duration-300 ease-in-out cur '>
                                                                           I agree to the terms & policy
                                                                       </span>
                                                                   </label>
   
                                                               </div>
                                                           </div>
                                                       </div>
   
                                                       <div className="mt-4  sm:mb-4">
   
                                                           <button className='bg-yellow-400 duration-500 text-black text-sm py-3 cursor-pointer flex gap-2 items-center rounded-full font-medium hover:bg-yellow-500 px-50' type="submit">
                                                               Sign Up
                                                           </button>
                                                       </div>
                                                   </form>
                                               </DialogHeader>
                                           </DialogContent>
                                       </Dialog>
   
                                   </div>
                                   <div>
                                       <p className="text-gray-700 text-sm">
                                           Password: <span className="font-medium">••••••••</span>
                                       </p>
                                       {/* pass dialog */}
                                       <Dialog>
                                           <DialogTrigger><button className="hover:underline cursor-pointer text-sm mt-1">Change Password</button></DialogTrigger>
                                           <DialogContent>
                                               <DialogHeader>
   
                                                   <form className='mt-4'
                                                       onSubmit={handleSubmit(onSubmit)}
                                                   >
                                                       <h4 className='font-semibold text-2xl' >Change password</h4>
                                                       <p className='text-gray-500 mb-2' >This will be your new login password.</p>
                                                       <div className="mb-1 sm:mb-2">
                                                           
   
                                                        
                                                           {/* pass 1 */}
                                                           <div className="mb-4 relative">
                                                               <div className='flex justify-between mb-2 items-center'>
                                                                   <label className='text-sm'>Your Password</label>
                                                               </div>
                                                               <input
                                                                   placeholder="**********"
                                                                   {...register("password", { required: true })}
                                                                   type={showPass ? "text" : "password"}
                                                                   className={`px-4 flex-grow w-full h-12  transition duration-200 bg-gray-100 border rounded-xl appearance-none
                                                               ${errors.password2 ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
                                                               focus:outline-secondary focus:shadow-outline`}
                                                                   name="password2"
                                                               />
   
                                                               <button
                                                                   type="button"
                                                                   onClick={() => {
                                                                       setShowPass(!showPass);
                                                                   }}
                                                                   className="btn btn-xs absolute top-10  right-6"
                                                               >
                                                                   {showPass ? (
                                                                       <FaEyeSlash color="gray" size={22} />
                                                                   ) : (
                                                                       <FaEye color="gray" size={22} />
                                                                   )}
                                                               </button>
   
                                                           </div>
                                                           {/* pass 2 */}
                                                           <div className="mb-4 relative">
                                                               <div className='flex justify-between mb-2 items-center'>
                                                                   <label className='text-sm'>New Password</label>
                                                               </div>
                                                               <input
                                                                   placeholder="**********"
                                                                   {...register("password", { required: true })}
                                                                   type={showPass ? "text" : "password"}
                                                                   className={`flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border rounded-xl appearance-none
                                                               ${errors.password2 ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
                                                               focus:outline-secondary focus:shadow-outline`}
                                                                   name="password2"
                                                               />
   
                                                               <button
                                                                   type="button"
                                                                   onClick={() => {
                                                                       setShowPass(!showPass);
                                                                   }}
                                                                   className="btn btn-xs absolute top-10  right-6"
                                                               >
                                                                   {showPass ? (
                                                                       <FaEyeSlash color="gray" size={22} />
                                                                   ) : (
                                                                       <FaEye color="gray" size={22} />
                                                                   )}
                                                               </button>
   
                                                               {/* remember */}
                                                               <div className="flex items-center mt-4 justify-between">
                                                                   <label className="flex items-center gap-2 text-sm">
                                                                     
                                                                       <span className='text-sm hover:underline duration-300 ease-in-out cur '>
                                                                           I agree to the terms & policy
                                                                       </span>
                                                                   </label>
   
                                                               </div>
                                                           </div>
                                                       </div>
   
                                                       <div className="mt-4  sm:mb-4">
   
                                                           <button className='bg-yellow-400 duration-500 text-black text-sm py-3 cursor-pointer flex gap-2 items-center rounded-full font-medium hover:bg-yellow-500 px-50' type="submit">
                                                               Sign Up
                                                           </button>
                                                       </div>
                                                   </form>
                                               </DialogHeader>
                                           </DialogContent>
                                       </Dialog>
   
                                   </div>
                               </div>
                           </section>
   
                           {/* Visibility & Privacy */}
                           <section className="border-t pt-8">
                               <h3 className="text-lg font-semibold mb-1">Visibility and privacy</h3>
                               <p className="text-sm text-gray-500 mb-6">
                                   Update your personal information.
                               </p>
   
                               <Accordion type="single" collapsible className="space-y-3">
                                   <AccordionItem value="profile-url">
                                       <AccordionTrigger className='cursor-pointer' >Profile URL</AccordionTrigger>
                                       <AccordionContent>
                                           <p className="text-sm text-gray-500 mb-2">
                                               https://resolaring.es/myprofile/iraz-demo
                                           </p>
                                           <Button variant="outline" size="sm">
                                               Copy URL
                                           </Button>
                                       </AccordionContent>
                                   </AccordionItem>
   
                                   <AccordionItem value="privacy-policy">
                                       <AccordionTrigger className='cursor-pointer' >Privacy Policy</AccordionTrigger>
                                       <AccordionContent>
                                           <p className="text-sm text-gray-500">
                                               Manage your profile visibility and social aspects of your
                                               account. Make edits to this profile.
                                           </p>
                                       </AccordionContent>
                                   </AccordionItem>
   
                                   <AccordionItem value="blocked-members">
                                       <AccordionTrigger className='cursor-pointer' >Blocked Members</AccordionTrigger>
                                       <AccordionContent>
                                           <p className="text-sm text-gray-500">
                                               You haven't blocked anyone.
                                           </p>
                                       </AccordionContent>
                                   </AccordionItem>
                               </Accordion>
                           </section>
                       </div>
  )
}
