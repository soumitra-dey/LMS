import { Divider, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/navbar.module.css'

type dataType = {
    name: string,
    href: string,
}

export default function NavbarButtons({ name, href }: dataType) {
    return (
        <Link href={href} className={styles.navbar_link}>
            <Text as='b' className={styles.navbar_text} fontSize='sm'>{name}</Text>
            <Divider className={styles.navbar_line} w='0px' opacity='none' borderColor='teal' />
        </Link>
    )
}
