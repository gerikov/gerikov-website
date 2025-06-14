import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className='fixed inset-0 bg-background flex items-center justify-center z-50'>
      <div className='flex flex-col items-center'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary'></div>
        <p className='mt-4 text-text-alter'>Loading...</p>
      </div>
    </div>
  )
}

export default Loading
