import React from 'react';
import {
    Box,
    Heading,
    List,
    ListItem,
    ListIcon,
    Text,
    Flex,
    Badge,
    Card,
    CardBody
} from '@chakra-ui/react';
import { MdCheckCircle, MdCancel, MdPending } from 'react-icons/md';

const transactions = [
    { id: 1, type: 'Buy', amount: '0.045 BTC', date: '2023-10-24 14:20', status: 'Completed', usd: '$2,100' },
    { id: 2, type: 'Receive', amount: '2.5 ETH', date: '2023-10-23 09:12', status: 'Completed', usd: '$4,200', from: '0x92...8a' },
    { id: 3, type: 'Sell', amount: '500 USDT', date: '2023-10-21 18:45', status: 'Pending', usd: '$500' },
    { id: 4, type: 'Buy', amount: '10 SOL', date: '2023-10-20 12:30', status: 'Failed', usd: '$350' },
];

export default function Transactions() {
    return (
        <Box>
            <Heading mb={6}>Transaction History</Heading>
            <Card>
                <CardBody>
                    <List spacing={3}>
                        {transactions.map((tx) => (
                            <ListItem key={tx.id} borderBottom="1px" borderColor="gray.700" pb={3} mb={3}>
                                <Flex justify="space-between" align="center">
                                    <Flex align="center">
                                        <ListIcon as={tx.status === 'Completed' ? MdCheckCircle : tx.status === 'Pending' ? MdPending : MdCancel} color={tx.status === 'Completed' ? 'green.500' : tx.status === 'Pending' ? 'yellow.500' : 'red.500'} fontSize="2xl" />
                                        <Box ml={3}>
                                            <Text fontWeight="bold">{tx.type} {tx.amount}</Text>
                                            <Text fontSize="sm" color="gray.500">{tx.date}</Text>
                                        </Box>
                                    </Flex>
                                    <Box textAlign="right">
                                        <Text fontWeight="bold">{tx.usd}</Text>
                                        <Badge colorScheme={tx.status === 'Completed' ? 'green' : tx.status === 'Pending' ? 'yellow' : 'red'}>{tx.status}</Badge>
                                    </Box>
                                </Flex>
                            </ListItem>
                        ))}
                    </List>
                </CardBody>
            </Card>
        </Box>
    );
}
