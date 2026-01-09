
import React from 'react';
import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react';
import { FaBtc, FaRupeeSign } from 'react-icons/fa';

const transactions = [
    {
        id: "1",
        icon: FaRupeeSign,
        text: "INR Deposit",
        date: "2022-06-09 7:06 PM",
        amount: "+ ₹81,123.10",
        amountColor: "black" // or default
    },
    {
        id: "2",
        icon: FaBtc,
        text: "BTC Sell",
        date: "2022-05-27 12:32 PM",
        amount: "- 12.48513391 BTC",
        subAmount: "+ $81,123.10", // Screenshot detail
        amountColor: "black"
    },
    {
        id: "3",
        icon: FaRupeeSign,
        text: "INR Deposit",
        date: "2022-06-09 7:06 PM",
        amount: "+ ₹81,123.10",
        amountColor: "black"
    }
];

const TransactionItem = ({ icon, text, date, amount, subAmount }) => (
    <Flex justify="space-between" align="center" py={4}>
        <Flex gap={4} align="center">
            <Grid placeItems="center" bg="gray.100" boxSize={10} borderRadius="full">
                <Icon as={icon} />
            </Grid>
            <Stack spacing={0}>
                <Text fontSize="md" fontWeight="medium">{text}</Text>
                <Text fontSize="sm" color="gray.500">{date}</Text>
            </Stack>
        </Flex>
        <Stack spacing={0} align="end">
            <Text fontSize="md" fontWeight="medium">{amount}</Text>
            {subAmount && <Text fontSize="sm" color="gray.500">{subAmount}</Text>}
        </Stack>
    </Flex>
);

const RecentTransactions = () => {
    return (
        <Box bg="white" borderRadius="xl" p={6} boxShadow="sm" flex="1">
            <Text fontSize="sm" color="gray.500" mb={4}>Recent Transactions</Text>

            <Stack divider={<Divider />}>
                {transactions.map(item => (
                    <TransactionItem key={item.id} {...item} />
                ))}
            </Stack>

            <Button w="full" mt={6} variant="outline" colorScheme="gray">
                View All
            </Button>
        </Box>
    );
};

export default RecentTransactions;
