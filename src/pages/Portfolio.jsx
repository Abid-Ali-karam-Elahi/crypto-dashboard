import React from 'react';
import {
    Box,
    Heading,
    SimpleGrid,
    Card,
    CardBody,
    Text,
    Progress,
    Stack,
    Flex
} from '@chakra-ui/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
    { name: 'Bitcoin', value: 45 },
    { name: 'Ethereum', value: 30 },
    { name: 'Stablecoins', value: 15 },
    { name: 'Altcoins', value: 10 },
];
const COLORS = ['#2196f3', '#90caf9', '#64b5f6', '#1e88e5'];

export default function Portfolio() {
    return (
        <Box>
            <Heading mb={6}>Your Portfolio</Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
                <Card>
                    <CardBody>
                        <Heading size="md" mb={6}>Asset Allocation</Heading>
                        <Box height="300px">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </Box>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Heading size="md" mb={6}>Holdings</Heading>
                        <Stack spacing={5}>
                            {data.map((item, idx) => (
                                <Box key={item.name}>
                                    <Flex justify="space-between" mb={1}>
                                        <Text fontWeight="medium">{item.name}</Text>
                                        <Text fontWeight="bold">{item.value}%</Text>
                                    </Flex>
                                    <Progress value={item.value} size="sm" colorScheme="brand" borderRadius="full" />
                                </Box>
                            ))}
                        </Stack>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Box>
    );
}
