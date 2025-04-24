import React from 'react'

function Loading() {
  return (
    <>
 <div className="flex flex-col items-center justify-center space-y-2">
  <div className="w-8 h-8 border-4 border-t-transparent border-secondary rounded-full animate-spin"></div>
  <div className="text-secondary text-sm font-medium">Loading...</div>
</div>


    </>
  )
}

export default Loading