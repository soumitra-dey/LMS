import { Button, Flex, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import styles from '../styles/ChakraFormInput.module.css'


export default function ChakraFormInput() {



    return (<Flex flexDirection='column' gap='20px' className={styles.instructor_assignment}>
        <label>Assignment Topic</label>
        <Input placeholder={'Enter topic'} />
        <Textarea placeholder='Enter details' />
        <Button onClick={() => {}} bg='red' color='white'>Remove</Button>
    </Flex>
    )
}
