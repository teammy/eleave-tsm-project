'use client'

import { useState } from 'react'

import { Grid } from '@mui/material'

import EmployeeListTable from './EmployeeListTable'

const EmployeePage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <EmployeeListTable />
      </Grid>
    </Grid>
  )
}

export default EmployeePage
