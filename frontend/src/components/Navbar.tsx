import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Flex, HStack, Img, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import NavbarButtons from './NavbarButtons';
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

const navData = [
    { name: 'Lectures', href: '' },
    { name: 'Assignments', href: '' },
    { name: 'Discussion', href: '' },
    { name: 'Announcements', href: '' },
]

export default function Navbar() {

    const [burger, setBurger] = useState(false);

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
                            return <NavbarButtons key={i} name={ele.name} href={ele.href} />
                        })
                    }
                </HStack>
            </HStack>

            <Box mr='20px'>
                <Box id={styles.nav_profile} >
                    <Text as='b' fontSize='sm'>Subhankar Roy</Text>
                </Box>

                <Button onClick={() => setBurger(!burger)} id={styles.nav_burger} size='xs'>
                    {
                        !burger ? <GiHamburgerMenu /> : <RxCross2 />
                    }
                </Button>

                <VStack id={styles.responsive_menu} bg='white' transition='0.5s' left={burger ? '0' : '-2000px'}>
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
                                <NavbarButtons name={ele.name} href={ele.href} />
                            </Box>
                        })
                    }
                </VStack>

            </Box>

        </Flex >
    )
}
