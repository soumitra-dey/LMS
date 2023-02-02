import React, { useState } from 'react'
import {
    Box, Button, Text, useToast
} from '@chakra-ui/react';
import styles from '../../styles/signup.module.css'
import FormInput from '../../components/FormInput';
import { userLogin } from '@/redux/auth/auth.actions';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const form = [
    { label: 'Email', type: 'text', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' }
]

export default function signup() {

    const dispatch = useDispatch();
    const toast = useToast();
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [details, setDetails] = useState({
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
            userLogin(details, dispatch).then((r) => {
                toast({
                    title: r ? 'Login successful!' : 'Wrong credentials!',
                    position: 'top',
                    status: r ? 'success' : 'error',
                    duration: 4000,
                    isClosable: true,
                })
                r && router.push('/')
            }).finally(() => setLoading(false))
        } else {
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
                <Text fontSize='2xl' as='i'> Pursue your dream career </Text>
                <form id={styles['signup-form']} onSubmit={(e) => handleSubmit(e)}>
                    <Text color='black' textShadow={'2px 2px 4px #000000'} fontSize='4xl'> Login  </Text>
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
                    >Login</Button>
                </form>
            </Box>

        </Box >
    )
}
