import { log } from 'console'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { authType } from './NavbarButtons'

export default function PrivateRoutes({ children }: any) {

    const { isAuth } = useSelector((s: authType) => s.auth)
    const router = useRouter()

    useEffect(() => {
        if (!isAuth && router.pathname !== '/auth/signup') {
            router.push('/auth/login')
        }
    }, [])

    return children

}
