import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className='fixed inset-0 bg-white flex items-center justify-center z-50'>
      <div className='flex flex-col items-center'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900'></div>
        <p className='mt-4 text-gray-600'>Loading...</p>
      </div>
    </div>
  )
}

export default Loading
