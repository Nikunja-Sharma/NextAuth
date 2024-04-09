import React from 'react'
import { CardWrapper } from './CardWrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

const ErrorCard = () => {
  return (
    <CardWrapper
    backButtonHref='/auth/login'
    backButtonLabel='Login Here'
    headLabel='Something Want Wrong'

    >

        <div className='w-full flex justify-center items-center'>

            <ExclamationTriangleIcon className='text-destructive'/>
        </div>
    </CardWrapper>
  )
}

export default ErrorCard