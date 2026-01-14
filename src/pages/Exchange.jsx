import React from 'react';
import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    VStack,
    Card,
    CardBody,
    Text,
    Flex,
    Icon
} from '@chakra-ui/react';
import { FiRefreshCw } from 'react-icons/fi';

export default function Exchange() {
    return (
        <Box maxW="md" mx="auto" mt={10}>
            <Heading mb={6} textAlign="center">Swap Tokens</Heading>
            <Card>
                <CardBody>
                    <VStack spacing={4}>
                        <FormControl>
                            <FormLabel>From</FormLabel>
                            <Flex gap={2}>
                                <Input placeholder="0.00" type="number" size="lg" />
                                <Select width="120px" size="lg" defaultValue="BTC">
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                    <option value="USDT">USDT</option>
                                </Select>
                            </Flex>
                            <Text fontSize="sm" color="gray.500" mt={1}>Balance: 0.45 BTC</Text>
                        </FormControl>

                        <Icon as={FiRefreshCw} boxSize={6} color="brand.400" />

                        <FormControl>
                            <FormLabel>To</FormLabel>
                            <Flex gap={2}>
                                <Input placeholder="0.00" type="number" size="lg" />
                                <Select width="120px" size="lg" defaultValue="ETH">
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                    <option value="USDT">USDT</option>
                                </Select>
                            </Flex>
                        </FormControl>

                        <Button w="full" colorScheme="brand" size="lg" mt={4}>
                            Swap Now
                        </Button>
                    </VStack>
                </CardBody>
            </Card>
        </Box>
    );
}
