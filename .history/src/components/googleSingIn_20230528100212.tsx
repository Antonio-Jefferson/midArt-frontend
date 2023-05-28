'use client'

import Link from 'next/link'
import Image from 'next/image'
import { stringify } from 'querystring'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

export default async function GoogleSignIn() {
  function loginGoogle() {
    const url = process.env.NEXT_PUBLIC_GOOGLE_URI

    const params = {
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      access_type: process.env.NEXT_PUBLIC_ACCESS_TYPE,
      response_type: process.env.NEXT_PUBLIC_RESPONSE_TYPE,
      propt: process.env.NEXT_PUBLIC_PROPT,
      scope: process.env.NEXT_PUBLIC_SCOPE,
    }

    const query = stringify(params)
    return `${url}?${query}`
  }

  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  if (code) {
    console.log(code)
    const urlWithQuery = `http://localhost:5000/auth/google?code=${code}`
    await axios.get(urlWithQuery)
  }
 return (
    <>
      <div>
        <Link href={''}>
            <Image />
        </Link>
      </div>
    </>
 )
};
