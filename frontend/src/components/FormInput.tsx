import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../styles/forminput.module.css'

type Props = {
    label: string
}

export default function FormInput({ label }: Props) {
    return (
        <Box m='10px' lineHeight='30px'>
            <Text color='gray' as='b' id={styles.formlabel}>{label}</Text>
            <input id={styles.forminput} />
        </Box>
    )
}
