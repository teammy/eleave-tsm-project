// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

const verticalMenuData = (): VerticalMenuDataType[] => [
  {
    label: 'สร้างตารางเวร',
    href: '/create-shift',
    icon: 'tabler-calendar-plus'
  },
  {
    label: 'แก้ไขตารางเวร',
    href: '/edit-shift',
    icon: 'tabler-table-options'
  },
  {
    label: 'ตารางเวรปัจจุบัน',
    href: '/current-shift',
    icon: 'tabler-table-row'
  },
  {
    label: 'ตารางเวรย้อนหลัง',
    href: '/recent-shift',
    icon: 'tabler-rotate-2'
  },
  {
    label: 'อนุมัติการแลกเวร',
    href: '/approve-shift',
    icon: 'tabler-copy-check'
  },
  {
    label: 'สร้างรายชื่อผู้ปฏิบัติงาน',
    href: '/create-employee',
    icon: 'tabler-users-plus'
  }
]

export default verticalMenuData
