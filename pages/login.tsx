import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Login() {

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-400 h-screen flex flex-row">
        <div className=" w-full p-3 max-w-lg rounded-lg pt-72">
          <form className=''>
            <div className="flex flex-col align-middle flex-wrap gap-2">
              <label className="text-center">Username: </label>
              <input name="username"></input>
              <label className="text-center">Password: </label>
              <input name="password"></input>
              <button className="bg-green-400 rounded-md">Login</button>
              <span className='hover: cursor-pointer'>Already signed in?</span>
            </div>
          </form>
        </div>
        <div className="border-l-2"></div>
        <div className=" m-auto bg-slate-800 p-3 max-w-sm rounded-lg">
         <img className='' src="/hmm.jpg"></img>
        </div>
      </main>
    </>
  )
}
