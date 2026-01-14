import React from 'react';
import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Switch,
    VStack,
    Divider,
    Button,
    Card,
    CardBody,
    Flex,
    Text,
    useColorMode
} from '@chakra-ui/react';

export default function Settings() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box maxW="3xl">
            <Heading mb={6}>Settings</Heading>

            <Card mb={6}>
                <CardBody>
                    <Heading size="md" mb={4}>Preferences</Heading>
                    <VStack spacing={4} align="stretch">
                        <Flex justify="space-between" align="center">
                            <Box>
                                <Text fontWeight="medium">Dark Mode</Text>
                                <Text fontSize="sm" color="gray.500">Switch between light and dark theme</Text>
                            </Box>
                            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
                        </Flex>
                        <Divider />
                        <Flex justify="space-between" align="center">
                            <Box>
                                <Text fontWeight="medium">Email Notifications</Text>
                                <Text fontSize="sm" color="gray.500">Receive trade alerts and news</Text>
                            </Box>
                            <Switch defaultChecked />
                        </Flex>
                    </VStack>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Heading size="md" mb={4}>Security</Heading>
                    <VStack spacing={4} align="stretch">
                        <Flex justify="space-between" align="center">
                            <Box>
                                <Text fontWeight="medium">Two-Factor Authentication</Text>
                                <Text fontSize="sm" color="gray.500">Add an extra layer of security</Text>
                            </Box>
                            <Button size="sm" colorScheme="brand">Enable</Button>
                        </Flex>
                        <Divider />
                        <Flex justify="space-between" align="center">
                            <Box>
                                <Text fontWeight="medium">Change Password</Text>
                                <Text fontSize="sm" color="gray.500">Last changed 3 months ago</Text>
                            </Box>
                            <Button size="sm" variant="outline">Update</Button>
                        </Flex>
                    </VStack>
                </CardBody>
            </Card>
        </Box>
    );
}
