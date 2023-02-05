import ChakraFormInput from '@/components/ChakraFormInput'
import { Box, Button, Flex, Input, Select, Text, Textarea } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../../styles/ChakraFormInput.module.css';

export default function assignments() {

  const [details, setDetails] = useState({
    instructor: '',
    assignments: [],
    assignmentSubject: '',
    deadline: ''
  })
  const [add, setAdd] = useState<number[]>([]);

  const handleAdd = () => {
    setAdd([...add, add.length + 1])
  }
  const handleRemove = (id: number) => {
    let temp = add.filter((ele, i) => i !== id)
    setAdd(temp)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setDetails({ ...details, [name]: value })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(details);
  }

  return (
    <Box pb='5vh'>

      <Text fontSize='2xl' p='20px' borderBottom='1px solid gray'>Upload assignments</Text>

      <form onSubmit={handleSubmit}>
        <Box className={styles.instructor_assignment}>
          <label>Instructor</label>
          <Input onChange={handleChange} name='instructor' placeholder={'Enter name'} />

          <label>Assignment Topic</label>
          <Input placeholder={'Enter topic'} />

          <br />
          <br />

          <Textarea placeholder='Enter details' />

          <label>Assignment Subject</label>
          <Select onChange={handleChange} name='assignmentSubject' placeholder='Select subject'>
            <option value='coding'>Coding</option>
            <option value='dsa'>DSA</option>
            <option value='csbt'>CSBT</option>
          </Select>

          <br />
          <Flex gap='10px' justifyContent='flex-end'>
            <Button bg='red' color='white' type='submit'>SUBMIT</Button>

            <Button isDisabled={add.length >= 3} onClick={handleAdd} bg='green' color='white'>ADD MORE</Button>
          </Flex>
        </Box>

        {
          add.map((ele, i) => {
            return <ChakraFormInput handleRemove={handleRemove} key={i} id={i} />
          })
        }

      </form>
    </Box>
  )
}
