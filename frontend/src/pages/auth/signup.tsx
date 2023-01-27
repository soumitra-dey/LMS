import React, { useState } from 'react'
import {
    Box, Button, Text
} from '@chakra-ui/react';
import styles from '../../styles/signup.module.css'
import FormInput from '../../components/FormInput';

const form = [
    { label: 'Username', type: 'text', name: 'username' },
    { label: 'Email', type: 'text', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' }
]

export default function signup() {

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
        console.log(details);
    }

    return (
        <Box 
            bgImage='linear-gradient(black, white)'
            h='100vh'
            color='black'
            display='flex'
            flexDirection='column'
            justifyContent='center'
        >

            <Box id={styles['signup-form-parent']}>
                <Text fontSize='4xl'> Signup  </Text>
                <Text fontSize='2xl' as='i'> to start learning </Text>
                <form id={styles['signup-form']} onSubmit={(e) => handleSubmit(e)}>
                    {
                        form.map((ele, i) => <FormInput key={i} handleChange={handleChange} label={ele.label} type={ele.type} name={ele.name} />)
                    }
                    <Button
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
