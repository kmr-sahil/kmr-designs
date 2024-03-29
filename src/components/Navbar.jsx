import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='flex justify-between items-center'>

          <Image src={'/logo.png'} width={38} height={10} alt='logo' />

          <Link href={'facebook.com'} className='btn-primary'>Book a Call</Link>

      </nav>
  )
}

export default Navbar