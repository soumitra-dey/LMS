import { Box, CircularProgress, CircularProgressLabel, Flex, Grid, Text } from "@chakra-ui/react";




export default function Classes() {


    return (
        <Box backgroundColor="gray.100" bgGradient={['linear(to-tr, teal.300, yellow.400)','linear(to-t, blue.200, teal.500)','linear(to-b, orange.100, purple.300)',]}>
            <Text fontSize="25px" padding="10px 100px" w="100%" fontFamily="itim" backgroundColor="white" borderBottom="2px solid cyan" color="">Assignments</Text>
            <Grid padding="20px 100px" templateColumns="repeat(3,1fr)" gap="30px">
                <Flex flexDir="column" fontFamily="ubuntu" gap="10px" borderTop="5px solid orange" padding="20px" borderRadius="10px" backgroundColor="white" boxShadow="lg">
                    <Flex justifyContent="space-between" fontSize="14px" borderBottom="1px dashed green">
                        <Text as="b" color="green">Albert</Text>
                        <Text>Starts in 40 mins</Text>
                    </Flex>
                    <Text fontSize="20px" color="blue.400" fontFamily="itim">CSS assignment</Text>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Subject</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">DSA</Text>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Time</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">12:30 p.m</Text>
                        </Flex>
                    </Flex>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Type</Text>
                            <Box w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Live</Box>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Status</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Present</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDir="column" fontFamily="ubuntu" gap="10px" borderTop="5px solid orange" padding="20px" borderRadius="10px" backgroundColor="white" boxShadow="lg">
                    <Flex justifyContent="space-between" fontSize="14px" borderBottom="1px dashed green">
                        <Text as="b" color="green">Albert</Text>
                        <Text>Starts in 40 mins</Text>
                    </Flex>
                    <Text fontSize="20px" color="blue.400" fontFamily="itim">CSS assignment</Text>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Subject</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">DSA</Text>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Time</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">12:30 p.m</Text>
                        </Flex>
                    </Flex>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Type</Text>
                            <Box w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Live</Box>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Status</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Present</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDir="column" fontFamily="ubuntu" gap="10px" borderTop="5px solid orange" padding="20px" borderRadius="10px" backgroundColor="white" boxShadow="lg">
                    <Flex justifyContent="space-between" fontSize="14px" borderBottom="1px dashed green">
                        <Text as="b" color="green">Albert</Text>
                        <Text>Starts in 40 mins</Text>
                    </Flex>
                    <Text fontSize="20px" color="blue.400" fontFamily="itim">CSS assignment</Text>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Subject</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">DSA</Text>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Time</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">12:30 p.m</Text>
                        </Flex>
                    </Flex>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Type</Text>
                            <Box w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Live</Box>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Status</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Present</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDir="column" fontFamily="ubuntu" gap="10px" borderTop="5px solid orange" padding="20px" borderRadius="10px" backgroundColor="white" boxShadow="lg">
                    <Flex justifyContent="space-between" fontSize="14px" borderBottom="1px dashed green">
                        <Text as="b" color="green">Albert</Text>
                        <Text>Starts in 40 mins</Text>
                    </Flex>
                    <Text fontSize="20px" color="blue.400" fontFamily="itim">CSS assignment</Text>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Subject</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">DSA</Text>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Time</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">12:30 p.m</Text>
                        </Flex>
                    </Flex>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Type</Text>
                            <Box w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Live</Box>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Status</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Present</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDir="column" fontFamily="ubuntu" gap="10px" borderTop="5px solid orange" padding="20px" borderRadius="10px" backgroundColor="white" boxShadow="lg">
                    <Flex justifyContent="space-between" fontSize="14px" borderBottom="1px dashed green">
                        <Text as="b" color="green">Albert</Text>
                        <Text>Starts in 40 mins</Text>
                    </Flex>
                    <Text fontSize="20px" color="blue.400" fontFamily="itim">CSS assignment</Text>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Subject</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">DSA</Text>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Time</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">12:30 p.m</Text>
                        </Flex>
                    </Flex>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Type</Text>
                            <Box w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Live</Box>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Status</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Present</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDir="column" fontFamily="ubuntu" gap="10px" borderTop="5px solid orange" padding="20px" borderRadius="10px" backgroundColor="white" boxShadow="lg">
                    <Flex justifyContent="space-between" fontSize="14px" borderBottom="1px dashed green">
                        <Text as="b" color="green">Albert</Text>
                        <Text>Starts in 40 mins</Text>
                    </Flex>
                    <Text fontSize="20px" color="blue.400" fontFamily="itim">CSS assignment</Text>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Subject</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">DSA</Text>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Time</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">12:30 p.m</Text>
                        </Flex>
                    </Flex>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Type</Text>
                            <Box w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Live</Box>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Status</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Present</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDir="column" fontFamily="ubuntu" gap="10px" borderTop="5px solid orange" padding="20px" borderRadius="10px" backgroundColor="white" boxShadow="lg">
                    <Flex justifyContent="space-between" fontSize="14px" borderBottom="1px dashed green">
                        <Text as="b" color="green">Albert</Text>
                        <Text>Starts in 40 mins</Text>
                    </Flex>
                    <Text fontSize="20px" color="blue.400" fontFamily="itim">CSS assignment</Text>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Subject</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">DSA</Text>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Time</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">12:30 p.m</Text>
                        </Flex>
                    </Flex>
                    <Flex gap="10px" fontSize="14px">
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Type</Text>
                            <Box w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Live</Box>
                        </Flex>
                        <Flex direction="column" alignItems="center" w="50%">
                            <Text w="100%" textAlign="center" backgroundColor="teal.500" color="white" borderRadius="5px 5px 0px 0px">Status</Text>
                            <Text w="100%" textAlign="center" backgroundColor="rgb(222, 248, 197)" padding="5px" as="b" borderRadius="0px 0px 5px 5px">Present</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Grid>
        </Box>
    )
}