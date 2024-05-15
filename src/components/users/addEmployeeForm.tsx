import { Card, CardHeader, CardContent } from '@mui/material'

type Props = {}

const AddEmployeeForm = (props: Props) => {
  return (
    <>
      <Card>
        <CardHeader title='เพิ่มรายชื่อผู้ปฏิบัติงาน' />
        <CardContent>
          <div>Form</div>
        </CardContent>
      </Card>
    </>
  )
}

export default AddEmployeeForm
