
import React from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    Checkbox,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Stack,
    Text,
    Textarea
} from '@chakra-ui/react';

const ContactForm = () => {
    return (
        <Card bg="white" borderRadius="xl" boxShadow="sm">
            <CardBody p={6}>
                <Text fontSize="sm" mb={6} fontWeight="medium">
                    You will receive response within 24 hours of time of submit.
                </Text>

                <Stack spacing={6}>
                    <HStack spacing={4} flexDir={{ base: 'column', md: 'row' }}>
                        <FormControl>
                            <FormLabel fontSize="xs" fontWeight="bold">Name</FormLabel>
                            <Input placeholder="James" />
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize="xs" fontWeight="bold">Surname</FormLabel>
                            <Input placeholder="Arthur" />
                        </FormControl>
                    </HStack>

                    <FormControl>
                        <FormLabel fontSize="xs" fontWeight="bold">Email</FormLabel>
                        <Input type="email" placeholder="name@mail.com" />
                    </FormControl>

                    <FormControl>
                        <FormLabel fontSize="xs" fontWeight="bold">Message</FormLabel>
                        <Textarea placeholder="Your Message" rows={4} />
                    </FormControl>

                    <Checkbox defaultChecked colorScheme="brand">
                        <Text fontSize="xs">I agree with <Box as="span" color="brand.500">Terms & Conditions.</Box></Text>
                    </Checkbox>

                    <Stack spacing={3}>
                        <Button bg="gray.200" color="gray.600" width="full" _hover={{ bg: "gray.300" }}>
                            Send a Message
                        </Button>
                        <Button width="full" variant="ghost" bg="gray.100" color="black" _hover={{ bg: "gray.200" }}>
                            Book a Meeting
                        </Button>
                    </Stack>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default ContactForm;
