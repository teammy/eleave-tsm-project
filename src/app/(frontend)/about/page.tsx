'use client'
import Button from '@mui/material/Button'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import CustomTextField from '@/@core/components/mui/TextField'

interface Inputs {
  username: string
  password: string
}

type FormProps = {
  username: string
  password: string
}

export default function Page() {
  const onSubmit = (data: Inputs) => {
    console.log(data) // Handle form submission
  }

  const form = useForm<Inputs>({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  // const handleSubmit = (event: any) => {
  //   // Handle form submission
  //   event.preventDefault()
  //   console.log('event', event)

  //   // Form submission logic
  // }

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CustomTextField label='username' {...form.register('username')} />
        <CustomTextField label='password' type='password' {...form.register('password')} />
        <Button variant='contained' type='submit'>
          Primardddy
        </Button>
      </form>
    </div>
  )
}
