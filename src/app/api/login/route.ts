// Next Imports
import { NextResponse } from 'next/server'

import { knex } from '@/utils/db_knex'

export async function POST(req: Request) {
  // Vars
  const { username, password } = await req.json()

  const user = await knex
    .select('person_firstname', 'person_lastname','person_id')
    .from('personal')
    .where({ person_username: username, person_password: password })
    .first()

  // const user = users.find(u => u.email === email && u.password === password)
  // let response: null | ResponseUser = null


  if (user) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { password: _, ...filteredUserData } = user

    // response = {
    //   ...filteredUserData
    // }

    return NextResponse.json(user)
  } else {
    // We return 401 status code and error message if user is not found
    return NextResponse.json(
      {
        // We create object here to separate each error message for each field in case of multiple errors
        message: ['Username or Password is invalid']
      },
      {
        status: 401,
        statusText: 'Unauthorized Access'
      }
    )
  }
}
