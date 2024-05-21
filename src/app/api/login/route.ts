// Next Imports
import { NextResponse } from 'next/server'

import { knex } from '@/utils/db_knex'

export async function POST(req: Request) {
  // Vars
  const { username, password } = await req.json()

  const user = await knex('personal')
    .leftJoin('level','personal.person_id','level.person_id')
    .leftJoin('position','personal.position_id','position.position_id')
    .leftJoin('office_sit','level.ward_id','office_sit.ward_id')
    .leftJoin('duty','level.duty_id','duty.duty_id')
    .leftJoin('faction','level.faction_id','faction.faction_id')
    .select('personal.person_firstname', 'personal.person_lastname','personal.person_id','personal.person_tel','position.position_id','position.position_name','office_sit.ward_id','office_sit.ward_name','duty.duty_id','duty.duty_name','faction.faction_id','faction.faction_name')
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
