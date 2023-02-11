import ChakraFormInput from '@/components/ChakraFormInput'
import { Box, Button, Flex, Input, Select, Text, Textarea } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../../styles/ChakraFormInput.module.css';

type detailsType = {
  instructor: string,
  assignments: string[],
  assignmentSubject: string,
  deadline: string
}

export default function assignments() {

  const [details, setDetails] = useState<detailsType>({
    instructor: '',
    assignments: [],
    assignmentSubject: '',
    deadline: ''
  })
  const [c, setC] = useState(3)
  const [a1, setA1] = useState('')
  const [a2, setA2] = useState('')
  const [a3, setA3] = useState('')

  const handleAdd = () => {
    setC(c => c - 1)
    console.log(c);
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setDetails({ ...details, [name]: value })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    details.assignments = []
    details.assignments.push(
      a1, a2, a3
    )
    console.log(details);
    setA1('')
    setA2('')
    setA3('')
  }
  const handleRemove = () => {
    setC(c => c + 1)
  }

  const handleAssignment = (id: Number, e: ChangeEvent<HTMLInputElement>) => {
    console.log(id, e.target.value);
    if (id === 1) {
      setA1(e.target.value)
    } else if (id === 2) {
      setA2(e.target.value)
    }
  }


  return (
    <Box pb='5vh'>

      <Text fontSize='2xl' p='20px' borderBottom='1px solid gray'>Upload assignments</Text>

      <form onSubmit={handleSubmit}>
        <Box className={styles.instructor_assignment}>
          <label>Instructor</label>
          <Input onChange={handleChange} name='instructor' placeholder={'Enter name'} />

          <label>Assignment Topic</label>
          <Input onChange={(e) => setA3(e.target.value)} placeholder={'Enter topic'} />

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

            <Button isDisabled={c === 1} onClick={handleAdd} bg='green' color='white'>ADD MORE</Button>
          </Flex>
        </Box>


        {
          c <= 2 && <ChakraFormInput id={1} handleAssignment={handleAssignment} handleRemove={handleRemove} />
        }
        {
          c <= 1 && <ChakraFormInput id={2} handleAssignment={handleAssignment} handleRemove={handleRemove} />
        }

      </form>
    </Box>
  )
}
