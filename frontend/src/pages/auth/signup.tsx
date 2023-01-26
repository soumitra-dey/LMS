import React from 'react'
import {
    Box
} from '@chakra-ui/react';
import styles from '../../styles/signup.module.css'
import FormInput from '../../components/FormInput';

const form = [
    { label: 'Username' },
    { label: 'Email' },
    { label: 'Password' }
]

export default function signup() {
    return (
        <Box
            bgImage='linear-gradient(black, white)'
            h='100vh'
            color='black'
            display='flex'
            flexDirection='column'
            justifyContent='center'
        >
            
            <form id={styles['signup-form']}>
                {
                    form.map((ele, i) => <FormInput label={ele.label} />)
                }
            </form>

        </Box >
    )
}
