'use client'

import { useEffect, useState, useMemo } from 'react'

import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Import
import {
  Card,
  CardHeader,
  Button,
  Typography,
  Chip,
  Checkbox,
  IconButton,
  TablePagination,
  MenuItem
} from '@mui/material'

// Custom Imports
import type { ColumnDef } from '@tanstack/react-table'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'

import AddUserDrawer from './AddUserDrawer'
import CustomTextField from '@/@core/components/mui/TextField'
import TablePaginationComponent from '@/components/TablePaginationComponent'

// type import
import type { UserDataType } from '@/types/users/type'
import EmployeeFilters from './UserFilters'

type UserTypeWithAction = UserDataType & {
  action?: string
}

const columnHelper = createColumnHelper<UserTypeWithAction>()

const UserListTable = ({ tableData }: { tableData?: UserDataType[] }) => {
  // State
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [data, setData] = useState(...[tableData])

  const columns = useMemo<ColumnDef<UserTypeWithAction, any>[]>(
    () => [
      columnHelper.accessor('fullname', {
        header: 'User',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <div className='flex flex-col'>
              <Typography color='text.primary' className='font-medium'>
                {row.original.fullname}
              </Typography>
              <Typography variant='body2'>{row.original.fullname}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('postion_id', {
        header: 'ตำแหน่ง',
        cell: ({ row }) => (
          <div className='flex items-center gap-2'>
            <Typography className='capitalize' color='text.primary'>
              {row.original.postion_id}
            </Typography>
          </div>
        )
      }),
      columnHelper.accessor('phone_number', {
        header: 'เบอร์โทร',
        cell: ({ row }) => (
          <Typography className='capitalize' color='text.primary'>
            {row.original.phone_number}
          </Typography>
        )
      }),
      columnHelper.accessor('cost_work', {
        header: 'ค่าเวร',
        cell: ({ row }) => <Typography>{row.original.cost_work}</Typography>
      }),
      columnHelper.accessor('cost_ot', {
        header: 'ค่าโอที',
        cell: ({ row }) => <Typography>{row.original.cost_ot}</Typography>
      }),
      columnHelper.accessor('action', {
        header: 'Action',
        cell: () => (
          <div className='flex items-center'>
            <IconButton>
              <i className='tabler-trash text-[22px] text-textSecondary' />
            </IconButton>
            <IconButton>
              <i className='tabler-edit text-[22px] text-textSecondary' />
            </IconButton>
          </div>
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: data as UserDataType[],
    columns,
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <>
      <Card>
        <CardHeader title='รายชื่อผู้ปฏิบัติงาน' className='pbe-4' />
        {/* <EmployeeFilters setData={setData} tableData={tableData} /> */}
        <div className='flex justify-between flex-col items-start md:flex-row md:items-center p-6 border-bs gap-4'>
          <CustomTextField
            select
            value={table.getState().pagination.pageSize}
            onChange={e => table.setPageSize(Number(e.target.value))}
            className='is-[70px]'
          >
            <MenuItem value='10'>10</MenuItem>
            <MenuItem value='25'>25</MenuItem>
            <MenuItem value='50'>50</MenuItem>
          </CustomTextField>
          <div className='flex flex-col sm:flex-row is-full sm:is-auto items-start sm:items-center gap-4'>
            <Button
              variant='contained'
              startIcon={<i className='tabler-plus' />}
              onClick={() => setAddUserOpen(!addUserOpen)}
              className='is-full sm:is-auto'
            >
              เพิ่มชื่อผู้ปฏิบัติงาน
            </Button>
          </div>
        </div>
        <TablePagination
          component={() => <TablePaginationComponent table={table} />}
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => {
            table.setPageIndex(page)
          }}
        />
      </Card>
      <AddUserDrawer open={addUserOpen} handleClose={() => setAddUserOpen(!addUserOpen)} />
    </>
  )
}

export default UserListTable
