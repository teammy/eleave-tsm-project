import { useState, useEffect } from 'react'

import { CardContent, Grid, MenuItem } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'

import type { UserDataType } from '@/types/users/type'

const UserFilters = ({ setData, tableData }: { setData: any; tableData?: UserDataType[] }) => {
  const [role, setRole] = useState<UserDataType['postion_id']>('')

  // useEffect(() => {
  //   const filterdData = tableData?.filter(user => {
  //     if (role && user.postion_id !== role) return false

  //     return true
  //   })

  //   setData(filterdData)
  // }, [role, tableData, setData])

  return (
    <>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <CustomTextField
              select
              fullWidth
              id='select-role'
              value={role}
              onChange={e => setRole(e.target.value)}
              SelectProps={{ displayEmpty: true }}
            >
              <MenuItem value=''>Select Role</MenuItem>
              <MenuItem value='admin'>Admin</MenuItem>
              <MenuItem value='author'>Author</MenuItem>
              <MenuItem value='editor'>Editor</MenuItem>
              <MenuItem value='maintainer'>Maintainer</MenuItem>
              <MenuItem value='subscriber'>Subscriber</MenuItem>
            </CustomTextField>
          </Grid>
        </Grid>
      </CardContent>
    </>
  )
}

export default UserFilters
