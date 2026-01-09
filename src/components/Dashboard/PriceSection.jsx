
import React from 'react';
import {
    Box,
    Button,
    Flex,
    HStack,
    Icon,
    Image,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'; // Or similar for Buy/Sell
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: '7:15 PM', value: 20000 },
    { name: '8:55 PM', value: 25000 },
    { name: '10:35 PM', value: 22000 },
    { name: '12:15 AM', value: 30000 },
    { name: '1:55 AM', value: 28000 },
    { name: '3:35 AM', value: 35000 },
];

const CustomTab = ({ children }) => (
    <Tab
        fontSize="sm"
        p={2}
        borderRadius="md"
        _selected={{ bg: "gray.100", color: "black", fontWeight: "bold" }}
        color="gray.500"
    >
        {children}
    </Tab>
);

const PriceSection = () => {
    return (
        <Box bg="white" borderRadius="xl" p={6} boxShadow="sm" flex="2">
            <Flex justify="space-between" align="start">
                <Stack>
                    <Text fontSize="sm" color="gray.500">Current Price</Text>
                    <HStack align="end">
                        <Text fontSize="2xl" fontWeight="medium">₹26,670.25</Text>
                        <HStack color="green.500">
                            <Icon as={BsArrowUpRight} />
                            <Text fontSize="sm" fontWeight="medium">0.04%</Text>
                        </HStack>
                    </HStack>
                </Stack>

                <HStack>
                    <Button leftIcon={<Icon as={AiFillPlusCircle} />} size="sm" bg="brand.500" color="white" _hover={{ bg: "brand.600" }}>Buy</Button>
                    <Button leftIcon={<Icon as={AiFillMinusCircle} />} size="sm" bg="brand.500" color="white" _hover={{ bg: "brand.600" }}>Sell</Button>
                </HStack>
            </Flex>

            <Tabs variant="unstyled" align="end" mt={4}>
                <TabList bg="gray.50" p={1} borderRadius="md" display="inline-flex">
                    {["1H", "1D", "1W", "1M"].map((tab) => (
                        <CustomTab key={tab}>{tab}</CustomTab>
                    ))}
                </TabList>
            </Tabs>

            <Box mt={8} width="100%" height="200px">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#5f00d9" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#5f00d9" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#718096' }} />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#5f00d9" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
};

export default PriceSection;
