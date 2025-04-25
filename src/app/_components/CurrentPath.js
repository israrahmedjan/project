'use client';

import React from 'react'

import { usePathname } from 'next/navigation';

function CurrentPath() {
  const pathname = usePathname();

  console.log("Current route:", pathname); 

  return (
    <div>CurrentPath</div>
  )
}

export default CurrentPath