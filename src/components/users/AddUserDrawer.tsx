'use client'

import React, { useState } from 'react'

import { Drawer, Button, IconButton, Typography, Divider, MenuItem, List } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'
import CustomAutocomplete from '@/@core/components/mui/Autocomplete'

// Types
import type { UserDataType } from '@/types/users/type'

type Props = {
  open: boolean
  handleClose: () => void
}

type SelectFullNameType = {
  cid: string
  fullName: string
}

const initialData = {
  fullname: '',
  ward_id: '',
  postion_id: '',
  phone_number: '',
  cost_work: 0,
  cost_ot: 0
}

const furnishingArray: SelectFullNameType[] = [
  { cid: '1', fullName: 'John Doe' },
  { cid: '2', fullName: 'Jane Doe' },
  { cid: '3', fullName: 'John Smith' },
  { cid: '4', fullName: 'Jane Smith' }
]

const OptionFullName = async () => {
  const res = await fetch(`${process.env.API_URL}/users/select_from_personal`)

  if (!res.ok) {
    throw new Error('Failed to fetch User List data')
  }

  return res.json()
}

const AddUserDrawer = ({ open, handleClose }: Props) => {
  // State
  const [formData, setFormData] = useState<UserDataType>(initialData)

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
            <CustomAutocomplete
              fullWidth
              options={furnishingArray}
              id='add-member-fullname'
              getOptionLabel={option => option.fullName || ''}
              renderInput={params => <CustomTextField placeholder='พิมพ์เพื่อค้นหา' {...params} label='ชื่อ-สกุล' />}
            />
            {/* <CustomTextField
              label='ชื่อ-สกุล'
              fullWidth
              type='search'
              placeholder='พิมพ์ชื่อเพื่อค้นหา'
              value={formData.fullname}
              onChange={e => setFormData({ ...formData, fullname: e.target.value })}
            /> */}

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
              label='เบอร์โทรศัพท์'
              type='number'
              fullWidth
              placeholder='กรอกเฉพาะตัวเลขเท่านั้น'
              value={formData.phone_number}
              onChange={e => setFormData({ ...formData, phone_number: e.target.value })}
            />
            <CustomTextField
              label='ค่าเวร'
              fullWidth
              type='number'
              value={formData.cost_work}
              onChange={e => setFormData({ ...formData, cost_work: Number(e.target.value) })}
            />
            <CustomTextField
              label='ค่า OT'
              fullWidth
              type='number'
              value={formData.cost_ot}
              onChange={e => setFormData({ ...formData, cost_ot: Number(e.target.value) })}
            />
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
