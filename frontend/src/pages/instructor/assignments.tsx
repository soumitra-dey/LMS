import ChakraFormInput from '@/components/ChakraFormInput'
import { Box, Button, Flex, Input, Select, Text, Textarea } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../../styles/ChakraFormInput.module.css';

type detailsType = {
  instructor: string,
  assignments: { topic: string, description: string }[],
  assignmentSubject: string,
  deadline: string
}
let obj = { topic: "", description: "" };

export default function assignments() {

  const [details, setDetails] = useState<detailsType>({
    instructor: '',
    assignments: [],
    assignmentSubject: '',
    deadline: ''
  })


  const handleAdd = () => {
    setDetails({ ...details, assignments: [...details.assignments, obj] });
    obj = { topic: obj.topic, description: obj.description };
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDetails({ ...details, assignments: [...details.assignments, obj] });
    console.log(details)
  }
  const handleRemove = (index: number) => {
    setDetails({ ...details, assignments: details.assignments.filter((e, i) => i !== index) })
  }


  return (
    <Box pb='5vh'>

      <Text fontSize='2xl' p='20px' borderBottom='1px solid gray'>Upload assignments</Text>

      <form onSubmit={handleSubmit}>
        <Box className={styles.instructor_assignment}>
          <label>Instructor</label>
          <Input onChange={handleChange} name='instructor' placeholder={'Enter name'} />

          <label>Assignment Topic</label>
          <Input onChange={(e) => obj.topic = e.target.value} name='topic' placeholder={'Enter topic'} />

          <br />
          <br />

          <Textarea placeholder='Enter details' onChange={(e) => obj.description = e.target.value} name='description' />

          <label>Assignment Subject</label>
          <Select onChange={handleChange} name='assignmentSubject' placeholder='Select subject'>
            <option value='coding'>Coding</option>
            <option value='dsa'>DSA</option>
            <option value='csbt'>CSBT</option>
          </Select>

          <br />
          <Flex gap='10px' justifyContent='flex-end'>
            <Button bg='red' color='white' type='submit'>SUBMIT</Button>

            <Button isDisabled={details.assignments.length > 2} onClick={handleAdd} bg='green' color='white'>ADD MORE</Button>
          </Flex>
        </Box>

        {
          details.assignments.map((e, i) => (
            <ChakraFormInput key={i} handleRemove={handleRemove} assignmentSubject={details.assignmentSubject}
              index={i} {...e}  ></ChakraFormInput>
          ))
        }

      </form>
    </Box>
  )
}
