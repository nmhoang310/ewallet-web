import {withAuth} from 'next-auth/middleware';
import { getToken } from 'next-auth/jwt';
import { useSession, signIn, getSession, signOut } from 'next-auth/react';
import { NextResponse } from "next/server";
import jwt_decode  from 'jwt-decode';

export default withAuth(
    function middleware(req) {
      // if (
      //   req.nextUrl.pathname === "/transaction"
      // ) {
      // }
    },
    {
      callbacks: {
        authorized: ({req, token}) => {
        //   let { token } = params;
        const tokenValue = req.cookies.get("next-auth.session-token")?.value;
        //const tokenInSession = tokenValue ? jwt_decode(tokenValue || '{}') : new Object();
        // console.log('token:    s' + token)
        // console.log(tokenValue)
          return !!tokenValue;
        },
      },
      pages: {
        signIn: "/",
      },
    }
  );

// export default async function middleware(req) {
//     const session = await getToken({ req: req, secret: process.env.SECRET }); 
//     if (!session)
//         signIn('wso2is', { callbackUrl: '/' });
//     // else
//     //     return NextResponse.redirect(req.url)

// }

// export { default } from "next-auth/middleware";

export const config = { matcher: ["/wallet", "/wallet/:path*", "/transaction"] };
