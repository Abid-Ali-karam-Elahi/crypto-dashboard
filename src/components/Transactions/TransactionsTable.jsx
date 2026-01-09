
import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Tag,
    Text,
    Stack,
    Box,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    HStack,
    Button,
    Icon
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const tableData = [
    {
        id: "HD82NA2H",
        date: "2023-06-20",
        time: "07:00 PM",
        type: "INR Deposit",
        subType: "E-Transfer",
        amount: "+ ₹81,123.10",
        status: "Pending",
    },
    {
        id: "HD82NA2H",
        date: "2023-06-18",
        time: "07:00 PM",
        type: "INR Widthdraw",
        subType: "Wire Transfer",
        amount: "- ₹81,123.10",
        status: "Processing",
    },
    {
        id: "HD82NA2H",
        date: "2023-06-18",
        time: "07:00 PM",
        type: "Buy",
        subType: "",
        amount: "12.48513391 BTC",
        subAmount: "- $81,123.10",
        status: "Cancelled",
    },
    {
        id: "HD82NA2H",
        date: "2023-06-18",
        time: "07:00 PM",
        type: "Sell",
        subType: "",
        amount: "- 0.36401628 BTC",
        subAmount: "+ $19,378.84",
        status: "Completed",
    },
    {
        id: "HD82NA2H",
        date: "2023-06-18",
        time: "07:00 PM",
        type: "BTC Deposit",
        subType: "",
        amount: "+ 4.13946104 BTC",
        subAmount: "+ $37,929.31",
        status: "Completed",
    },
    {
        id: "HD82NA2H",
        date: "2023-06-18",
        time: "07:00 PM",
        type: "BTC Widthdraw",
        subType: "",
        amount: "- 10.00000000 BTC",
        subAmount: "- $62,017.58",
        status: "Completed",
    },
];

const statusColorMap = {
    Pending: "gray",
    Processing: "yellow",
    Cancelled: "red",
    Completed: "green",
};

const TransactionsTable = () => {
    return (
        <TableContainer>
            <Table variant="simple" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Date & Time</Th>
                        <Th>Type</Th>
                        <Th>Amount</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tableData.map((row, index) => (
                        <Tr key={index}>
                            <Td fontSize="sm" fontWeight="medium">{row.id}</Td>
                            <Td>
                                <Stack spacing={0}>
                                    <Text fontSize="sm" fontWeight="medium">{row.date}</Text>
                                    <Text fontSize="xs" color="gray.500">{row.time}</Text>
                                </Stack>
                            </Td>
                            <Td>
                                <Stack spacing={0}>
                                    <Text fontSize="sm" fontWeight="medium">{row.type}</Text>
                                    <Text fontSize="xs" color="gray.500">{row.subType}</Text>
                                </Stack>
                            </Td>
                            <Td>
                                <Stack spacing={0}>
                                    <Text fontSize="sm" fontWeight="medium">{row.amount}</Text>
                                    <Text fontSize="xs" color="gray.500">{row.subAmount}</Text>
                                </Stack>
                            </Td>
                            <Td>
                                <Tag colorScheme={statusColorMap[row.status]} borderRadius="full">
                                    {row.status}
                                </Tag>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TransactionsTable;
