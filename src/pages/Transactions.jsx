
import React from 'react';
import AppLayout from '../components/Layout/AppLayout';
import {
    Box,
    Button,
    Card,
    Flex,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tag
} from '@chakra-ui/react';
import { AiOutlineDownload } from 'react-icons/ai'; // Export icon
import { BsSearch } from 'react-icons/bs';
import TransactionsTable from '../components/Transactions/TransactionsTable';

const Transactions = () => {
    const tabs = [
        { name: "All", count: 349 },
        { name: "Deposit", count: 114 },
        { name: "Withdraw", count: 55 },
        { name: "Trade", count: 50 },
    ];

    return (
        <AppLayout>
            <Flex justify="end" mb={4} mt={3}>
                <Button leftIcon={<Icon as={AiOutlineDownload} />} bg="brand.500" color="white" _hover={{ bg: "brand.600" }}>
                    Export CSV
                </Button>
            </Flex>

            <Card borderRadius="xl" boxShadow="sm">
                <Tabs>
                    <Flex
                        justify="space-between"
                        align={{ base: "start", md: "center" }}
                        flexDir={{ base: "column", md: "row" }}
                        p={4}
                        borderBottomWidth="1px"
                        borderColor="gray.100"
                        gap={4}
                    >
                        <TabList borderBottom="none" overflowX="auto" w="full">
                            {tabs.map(tab => (
                                <Tab key={tab.name} _selected={{ color: "brand.900", borderBottomColor: "brand.500" }} color="gray.500" pb={4}>
                                    {tab.name} <Tag ml={2} size="sm" borderRadius="full" colorScheme="gray">{tab.count}</Tag>
                                </Tab>
                            ))}
                        </TabList>

                        <InputGroup maxW={{ base: "full", md: "300px" }} size="sm">
                            <InputLeftElement pointerEvents="none">
                                <Icon as={BsSearch} color="gray.400" />
                            </InputLeftElement>
                            <Input type="text" placeholder="Search by ID or destination" variant="outline" />
                        </InputGroup>
                    </Flex>

                    <TabPanels>
                        <TabPanel p={0} overflowX="auto">
                            <TransactionsTable />
                        </TabPanel>
                        <TabPanel><TransactionsTable /></TabPanel>
                        <TabPanel><TransactionsTable /></TabPanel>
                        <TabPanel><TransactionsTable /></TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </AppLayout>
    );
};

export default Transactions;
