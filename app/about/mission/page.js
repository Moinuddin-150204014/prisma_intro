import Button from '@/app/components/Button'
import React from 'react'
import thumb from '@/public/images/thumb.jpg'
import Image from 'next/image'

function Mission() {
  return (
    <main className="mt-10">
      <div>About Mission</div>
      <Image src={thumb} alt="Thumb image"/>
      <Button />
    </main>
  )
}

export default Mission