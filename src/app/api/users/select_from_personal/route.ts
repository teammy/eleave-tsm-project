
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { knex } from '@/utils/db_knex'

export async function GET(req: NextRequest) {
  try {
    const hasMember = await knex.select(knex.raw('CONCAT(person_firstname, \' \',person_lastname) as "fullName"'),'cid').from('users').where({ office_id: 56 })

    return NextResponse.json(hasMember, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', code: 'INTERNAL_SERVER_ERROR' }, { status: 500 })
  }
}
