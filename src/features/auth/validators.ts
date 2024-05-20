import * as z from 'zod'

export const login = z.object({
  username: z.string().min(1,{ message: 'กรุณากรอกผู้ใช้งานให้ถูกต้อง'}),
  password: z.string().min(3,{ message: 'กรุณากรอกรหัสผ่านอย่างน้อย 3 ตัวอักษร'})
})
