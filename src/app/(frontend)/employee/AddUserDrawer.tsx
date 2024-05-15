'use client'

import React, { useState } from 'react'

import { Drawer, Button, IconButton, Typography, Divider, MenuItem } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'

// Types
import type { FormAddUserDataType } from '@/types/employees/type'

type Props = {
  open: boolean
  handleClose: () => void
}

const initialData = {
  fullname: '',
  ward_id: '',
  postion_id: '',
  phone_number: '',
  cost_work: 0,
  cost_ot: 0
}

const AddUserDrawer = ({ open, handleClose }: Props) => {
  // State
  const [formData, setFormData] = useState<FormAddUserDataType>(initialData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleClose()
    setFormData(initialData)
    console.log('Form Data:', formData)
  }

  const handleReset = () => {
    handleClose()
    setFormData(initialData)
  }

  return (
    <>
      <Drawer open={open} anchor='right' onClose={handleClose}>
        <div className='flex items-center justify-between p1b-5 pli-6'>
          <Typography variant='h6'>เพิ่มรายชื่อผู้ปฏิบัติงาน</Typography>
          <IconButton onClick={handleClose}>
            <i className='tabler-x text-textPrimary' />
          </IconButton>
        </div>
        <Divider />
        <div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-6'>
            <CustomTextField
              label='Full Name'
              fullWidth
              placeholder='John Doe'
              value={formData.fullname}
              onChange={e => setFormData({ ...formData, fullname: e.target.value })}
            />

            <CustomTextField
              select
              fullWidth
              id='country'
              value={formData.postion_id}
              onChange={e => setFormData({ ...formData, postion_id: e.target.value })}
              label='เลือกตำแหน่ง'
              inputProps={{ placeholder: 'Country' }}
            >
              <MenuItem value='UK'>UK</MenuItem>
              <MenuItem value='USA'>USA</MenuItem>
              <MenuItem value='Australia'>Australia</MenuItem>
              <MenuItem value='Germany'>Germany</MenuItem>
            </CustomTextField>
            <CustomTextField
              label='Contact'
              type='number'
              fullWidth
              placeholder='(397) 294-5153'
              value={formData.phone_number}
              onChange={e => setFormData({ ...formData, phone_number: e.target.value })}
            />
            <CustomTextField
              select
              fullWidth
              id='select-role'
              value={formData.cost_work}
              onChange={e => setFormData({ ...formData, cost_work: Number(e.target.value) })}
              label='Select Role'
            >
              <MenuItem value='350'>350</MenuItem>
              <MenuItem value='850'>850</MenuItem>
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              id='select-plan'
              value={formData.cost_ot}
              onChange={e => setFormData({ ...formData, cost_ot: Number(e.target.value) })}
              label='Select Plan'
              inputProps={{ placeholder: 'Select Plan' }}
            >
              <MenuItem value='350'>350</MenuItem>
              <MenuItem value='850'>850</MenuItem>
            </CustomTextField>
            <div className='flex items-center gap-4'>
              <Button variant='contained' type='submit'>
                เพิ่มผู้ปฏิบัติงาน
              </Button>
              <Button variant='tonal' color='error' type='reset' onClick={() => handleReset()}>
                ยกเลิก
              </Button>
            </div>
          </form>
        </div>
      </Drawer>
    </>
  )
}

export default AddUserDrawer
