import React, { useState } from 'react'
import {
    Box, Button, Text, useToast
} from '@chakra-ui/react';
import styles from '../../styles/signup.module.css'
import FormInput from '../../components/FormInput';
import { userSignup } from '@/redux/auth/auth.actions';
import { useRouter } from 'next/router';

const form = [
    { label: 'Username', type: 'text', name: 'username' },
    { label: 'Email', type: 'text', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' }
]


export default function signup() {


    const toast = useToast();
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [details, setDetails] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (name: string, value: string) => {
        setDetails({ ...details, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        if (details.email && details.password && details.password) {
            userSignup(details).then((r) => {
                toast({
                    title: r ? 'Signup successful!' : 'User already exists!',
                    position: 'top',
                    status: r ? 'success' : 'error',
                    duration: 4000,
                    isClosable: true,
                })
                r && router.push('/auth/login')
            }).finally(() => setLoading(false))
        } else {
            setLoading(false)
            toast({
                title: 'Please fill all the details!',
                position: 'top',
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
    }

    return (
        <Box
            bgGradient={['linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)',]}
            h='100vh'
            color='black'
            display='flex'
            flexDirection='column'
            justifyContent='center'
        >

            <Box id={styles['signup-form-parent']}>
                <Text fontSize='2xl' as='i'> Start learning now. </Text>
                <form id={styles['signup-form']} onSubmit={(e) => handleSubmit(e)}>
                    <Text color='black' textShadow={'2px 2px 4px #000000'} fontSize='4xl'> Signup  </Text>
                    {
                        form.map((ele, i) => <FormInput key={i} handleChange={handleChange} label={ele.label} type={ele.type} name={ele.name} />)
                    }
                    <Button
                        isLoading={loading}
                        loadingText='submitting'
                        type='submit'
                        id={styles['register-button']}
                        color='white'
                        bg='blackAlpha.800'
                        transition={'0.4s'}
                        position='absolute'
                        bottom='0px'
                    >Register</Button>
                </form>
            </Box>

        </Box >
    )
}
