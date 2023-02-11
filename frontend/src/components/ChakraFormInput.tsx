import { Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import styles from '../styles/ChakraFormInput.module.css'


export default function ChakraFormInput({ handleRemove, topic, description, index, assignmentSubject }:
    { handleRemove: Function, topic: string, description: string, index: number, assignmentSubject: string }) {



    return (<Flex flexDirection='column' gap='20px' className={styles.instructor_assignment}>
        <Text>{topic} </Text>
        <Text>{assignmentSubject} </Text>
        <Text>{description} </Text>
        <Button onClick={() => handleRemove(index)} bg='red' color='white'>Remove</Button>
    </Flex>
    )
}
