import { useSession, signIn, getSession, signOut } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import jwt from 'jwt-decode';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import ButtonLogin from '@/components/ButtonLogin';

const inter = Inter({ subsets: ['latin'] });
// {session, tenant, host}
export default function Index() {
	// const [content, setContent] = useState(null)
	// const [id_token, setIDToken] = useState()

	// useEffect(() => {
	//     if (!session) {
	//         signIn("wso2is", { callbackUrl: "/" })
	//     } else {
			
	//         const { accessToken, idToken } = session
	//         setIDToken(idToken)
			
	//         const res = fetch(host + "/t/" + tenant + "/scim2/Me", {
	//             method: 'get',
	//             headers: new Headers({
	//                 "authorization": "Bearer " + accessToken
	//             })
	//         }).then(r => r.json().then(data => ({ status: r.status, body: data })))
	//             .then(res => {
	//                 setContent(res)
	//             }).catch(err => {
	//                 signOut({ callbackUrl: "/wallet" })
	//             })
	//     }

	// }, [])
	// if (session) {
	// 	console.log('...........................' + id_token)
	//     if (content) {
	//         return (
	//             <main style={{ width: "800px", marginLeft: "auto", marginRight: "auto" }}>
	//                 <p className="mt-2 text-5xl lg:text-3xl font-bold tracking-tight text-gray-900" style={{ marginTop: '70px', marginBottom: "50px", textAlign: 'center' }}>
	//                     Decoded Id Token
	//                 </p>

	//                 <div style={{ textAlign: 'center' }}>
	//                     <ButtonLogin
	//                         func={(e) => {
	//                             e.preventDefault()
	//                             signOut({ callbackUrl: "/" })
	//                         }}
	//                         style={{ marginTop: "30px", marginBottom: "40px" }}
	//                         primary>Logout</ButtonLogin>
	//                 </div>

	//             </main>
	//         )
	//     } else {
	//         return (
	//             <h1 className="mt-2 text-5xl lg:text-3xl font-bold tracking-tight text-gray-900" style={{ marginTop: '100px', textAlign: 'center' }}>
	//                 Loading...
	//             </h1>
	//         )
	//     }

	// } else {
	//     return (
	//         <h1 className='mt-2 text-5xl lg:text-3xl font-bold tracking-tight text-gray-900' style={{ marginTop: '100px', textAlign: 'center' }}>
	//             Access Denied! Redirecting to Login...
	//         </h1>
	//     )
	// }
	return (
		<main className={`container mx-auto min-h-screen py-28 px-36 ${inter.className}`}>
			<div className="z-2 w-full px-15 font-mono text-sm grid grid-cols-3 gap-3 flex space-x-4"></div>
		</main>
	);
}

// Export the `session` prop to use sessions with Server Side Rendering
// export async function getServerSideProps(context) {
//     return {
//         props: {
//             session: await getSession(context),
//             tenant: process.env.WSO2IS_TENANT_NAME,
//             host: process.env.WSO2IS_HOST
//         }
//     }
// }
