'use client'

import { useState } from 'react'

import { Card, Grid, CardHeader, CardContent, Divider, Button, Drawer } from '@mui/material'
import AddEmployeeForm from './addEmployeeForm'

type Props = {}

const EmployeePage = (props: Props) => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen)
  }

  return (
    <section>
      <Card>
        <CardHeader
          title='จัดการรายชื่อผู้ปฏิบัติงาน'
          action={
            <Button startIcon={<i className='tabler-plus' />} variant='contained' onClick={toggleDrawer(true)}>
              เพิ่มรายชื่อ
            </Button>
          }
        />
        <Drawer anchor='right' onClose={toggleDrawer(false)} open={openDrawer} variant='temporary'>
          <AddEmployeeForm />
        </Drawer>
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              CreateShiftForm
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </section>
  )
}

export default EmployeePage
