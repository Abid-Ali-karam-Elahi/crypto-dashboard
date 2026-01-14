import React from 'react';
import {
    Box,
    SimpleGrid,
    Text,
    Heading,
    Card,
    CardBody,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    Flex,
    Icon,
    Tabs,
    TabList,
    Tab,
    HStack,
} from '@chakra-ui/react';
import { FiTrendingUp, FiTrendingDown, FiDollarSign, FiActivity } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Tue', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Wed', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Thu', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Fri', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Sat', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Sun', uv: 3490, pv: 4300, amt: 2100 },
];

export default function Dashboard() {
    return (
        <Box>
            <Heading mb={6} fontSize="2xl">Dashboard</Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
                <StatsCard title={'Total Balance'} stat={'$45,231.89'} icon={FiDollarSign} diff={12.5} />
                <StatsCard title={'Daily Profit'} stat={'+$2,345'} icon={FiTrendingUp} diff={5.4} />
                <StatsCard title={'Assets'} stat={'12'} icon={FiActivity} />
                <StatsCard title={'Loss'} stat={'-$120'} icon={FiTrendingDown} diff={-2.1} />
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
                <Card height="400px">
                    <CardBody display="flex" flexDirection="column">
                        <Flex justify="space-between" align="center" mb={4}>
                            <Heading size="md">Portfolio Overview</Heading>
                            <Tabs variant="solid-rounded" colorScheme="blue" size="sm" defaultIndex={1}>
                                <TabList>
                                    <Tab>1D</Tab>
                                    <Tab>1W</Tab>
                                    <Tab>1M</Tab>
                                    <Tab>1Y</Tab>
                                </TabList>
                            </Tabs>
                        </Flex>
                        <Box flex="1" width="100%" minH="0">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#2196f3" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#2196f3" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" stroke="#718096" />
                                    <YAxis stroke="#718096" />
                                    <Tooltip contentStyle={{ backgroundColor: '#1A202C', border: 'none' }} />
                                    <Area type="monotone" dataKey="uv" stroke="#2196f3" fillOpacity={1} fill="url(#colorUv)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </Box>
                    </CardBody>
                </Card>

                {/* Example Activity Layout */}
                <Card>
                    <CardBody>
                        <Heading size="md" mb={4}>Recent Activity</Heading>
                        <Box>
                            <ActivityRow name="Bitcoin" action="Buy" amount="+$12,400" date="2 mins ago" />
                            <ActivityRow name="Ethereum" action="Sell" amount="-$2,400" date="1 hour ago" />
                            <ActivityRow name="Solana" action="Buy" amount="+$400" date="3 hours ago" />
                            <ActivityRow name="Dogecoin" action="Buy" amount="+$50" date="5 hours ago" />
                        </Box>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Box>
    );
}

function StatsCard({ title, stat, icon, diff }) {
    return (
        <Card>
            <CardBody>
                <Flex justifyContent={'space-between'}>
                    <Box>
                        <Stat>
                            <StatLabel fontWeight={'medium'} isTruncated>
                                {title}
                            </StatLabel>
                            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                                {stat}
                            </StatNumber>
                            {diff && (
                                <StatHelpText>
                                    <StatArrow type={diff > 0 ? 'increase' : 'decrease'} />
                                    {diff}%
                                </StatHelpText>
                            )}
                        </Stat>
                    </Box>
                    <Box
                        my={'auto'}
                        color={'white'}
                        alignContent={'center'}
                    >
                        <Icon as={icon} w={6} h={6} color="brand.400" />
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    );
}

function ActivityRow({ name, action, amount, date }) {
    return (
        <Flex justify="space-between" align="center" py={3} borderBottomWidth={1} borderColor="gray.700">
            <Box>
                <Text fontWeight="bold">{name}</Text>
                <Text fontSize="sm" color="gray.500">{action}</Text>
            </Box>
            <Box textAlign="right">
                <Text fontWeight="bold" color={action === 'Buy' ? 'green.400' : 'red.400'}>{amount}</Text>
                <Text fontSize="sm" color="gray.500">{date}</Text>
            </Box>
        </Flex>
    )
}
