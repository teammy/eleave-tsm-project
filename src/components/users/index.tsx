import { Grid } from '@mui/material'

import UserListTable from './UserListTable'
import type { UserDataType } from '@/types/users/type'

const UserList = ({ userData }: { userData?: UserDataType[] }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UserListTable tableData={userData} />
      </Grid>
    </Grid>
  )
}

export default UserList
