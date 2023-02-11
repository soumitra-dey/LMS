import { Button, Flex, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import styles from '../styles/ChakraFormInput.module.css'


export default function ChakraFormInput({ id, handleRemove, handleAssignment }: { id: number, handleRemove: Function, handleAssignment: Function }) {



    return (<Flex flexDirection='column' gap='20px' className={styles.instructor_assignment}>
        <label>Assignment Topic</label>
        <Input onChange={(e) => handleAssignment(id, e)} placeholder={'Enter topic'} />
        <Textarea placeholder='Enter details' />
        <Button onClick={() => handleRemove()} bg='red' color='white'>Remove</Button>
    </Flex>
    )
}
