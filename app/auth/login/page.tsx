import { LoginForm } from '@/components/auth/login-form'
import React, { Suspense } from 'react'
import { CardWrapper } from '@/components/auth/CardWrapper'

const page = () => {
  return (
    <Suspense>

      <LoginForm/>
    </Suspense>
  )
}

export default page