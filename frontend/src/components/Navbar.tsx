import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, HStack, Img, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import NavbarButtons, { authType } from './NavbarButtons';
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { bindActionCreators } from 'redux';
import { authActionCreators } from '@/redux/auth';
import jwt from "jsonwebtoken";

const navData = [
    { name: 'Lectures', href: '/lms/lectures', instructor: '/instructor/lectures' },
    { name: 'Assignments', href: '/lms/assignments', instructor: '/instructor/assignments' },
    { name: 'Discussion', href: '', instructor: '' },
    { name: 'Announcements', href: '', instructor: '' },
]

export default function Navbar() {

    const [burger, setBurger] = useState(false);
    const [profile, setProfile] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const { token } = useSelector((s: authType) => s.auth);
    const [username, setUsername] = useState('')

    const { userLogout } = bindActionCreators(authActionCreators, dispatch);

    useEffect(() => {
        userCreds()
    })


    const userCreds = async () => {
        let temp: any = jwt.decode(token)
        if (temp)
            setUsername(temp?.username || "");
    }

    const handleClick = () => {
        userLogout();
        setProfile(!profile)
        router.push('/auth/login')
    }

    if (router.pathname === "/auth/login" || router.pathname === "/auth/signup") {
        return <></>;
    }

    return (
        <Flex
            id={styles.navbar}
            justifyContent='space-between'
            alignItems='center'
            p='5px'
            w='100%'
            position='relative'
        >

            <HStack gap='20px' ml='20px'>
                <Link href='/'><Img w='90px' h='30px' src='https://i.imgur.com/2JGjNmH.png' /></Link>
                <HStack gap='20px' id={styles.nav_button_container}>
                    {
                        navData.map((ele, i) => {
                            return <NavbarButtons key={i} name={ele.name} href={ele.href} instructor={ele.instructor} />
                        })
                    }
                </HStack>
            </HStack>

            <Box mr='20px'>
                <Box id={styles.nav_profile} >
                    <Text onClick={() => setProfile(!profile)} cursor='pointer' fontSize='md'>{username}</Text>
                    {
                        profile && <Box id={styles.nav_profile_child}>
                            <Link href=''><Text color='gray'>Profile</Text></Link>
                            <Button onClick={handleClick} bg='red' color='white'>Logout</Button>
                        </Box>
                    }
                </Box>

                <Button onClick={() => setBurger(!burger)} id={styles.nav_burger} size='xs'>
                    {
                        !burger ? <GiHamburgerMenu /> : <RxCross2 />
                    }
                </Button>

                <VStack id={styles.responsive_menu}
                    bg='white'
                    transition='0.5s'
                    left={burger ? '0' : '-100vw'}
                >
                    {
                        navData.map((ele, i) => {
                            return <Box
                                onClick={() => setBurger(false)}
                                cursor='pointer'
                                width='0px'
                                key={i}
                                p='10px'
                                bg='#e1ddf8'
                                color='black' w='100%' >
                                <NavbarButtons name={ele.name} href={ele.href} instructor={ele.instructor} />
                            </Box>
                        })
                    }
                </VStack>

            </Box>

        </Flex >
    )
}
