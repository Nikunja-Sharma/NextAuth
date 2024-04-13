import { LoginForm } from '@/components/auth/login-form'
import React, { Suspense } from 'react'
import { CardWrapper } from '@/components/auth/CardWrapper'
import { useSession } from 'next-auth/react';


const page = () => {
  
  return (
    <Suspense>

      <LoginForm/>
    </Suspense>
  )
}

export default page