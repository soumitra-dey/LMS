import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from '../styles/forminput.module.css'

type Props = {
    label: string,
    type: string,
    name: string,
    handleChange: Function
}


export default function FormInput({ label, type, name, handleChange }: Props) {

    const [labelStyle, setLabelStyle] = useState({
        top: '10px',
        fontSize: 'large'
    })

    const handleblur = (val: string) => {
        if (!val) {
            setLabelStyle({ top: '10px', fontSize: 'large' })
        }
    }

    return (
        <Box m='10px' lineHeight='30px' position='relative' >
            <Text
                onClick={() => setLabelStyle({ top: '-18px', fontSize: 'medium' })}
                color='gray'
                as='b'
                id={styles.formlabel}
                style={labelStyle}
            >
                {label}
            </Text>
            <input
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                name={name}
                autoComplete='none'
                type={type}
                onBlur={(e) => handleblur(e.target.value)}
                onFocus={() => setLabelStyle({ top: '-18px', fontSize: 'medium' })}
                className={styles.forminput}
            />
        </Box>
    )
}
