import { Divider, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/navbar.module.css'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'

type dataType = {
    name: string,
    href: string,
    instructor: string
}

export type authType = {
    auth: {
        token: string,
        isAuth: boolean,
    }
}


export default function NavbarButtons({ name, href, instructor }: dataType) {

    const { token } = useSelector((s: authType) => s.auth);
    const router = useRouter()

    const handleClick = async () => {
        const { role }: any = await jwt.decode(token);

        if (role === 'instructor') {
            router.push(instructor);
        } else {
            router.push(href)
        }
    }

    return (
        <Link onClick={handleClick} href={''} className={styles.navbar_link}>
            <Text as='b' className={styles.navbar_text} fontSize='sm'>{name}</Text>
            <Divider className={styles.navbar_line} w='0px' opacity='none' borderColor='teal' />
        </Link>
    )
}
