import type * as z from 'zod'

import type * as validators from '@/features/auth/validators'

export type Login = z.infer<typeof validators.login>
