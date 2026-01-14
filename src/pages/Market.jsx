import React from 'react';
import {
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Image,
    Text,
    Badge,
    Button
} from '@chakra-ui/react';

const coins = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$45,230.10', change: '+2.4%', cap: '$890B', img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025' },
    { name: 'Ethereum', symbol: 'ETH', price: '$2,890.45', change: '-1.2%', cap: '$320B', img: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025' },
    { name: 'Solana', symbol: 'SOL', price: '$125.40', change: '+5.6%', cap: '$45B', img: 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=025' },
    { name: 'Cardano', symbol: 'ADA', price: '$0.45', change: '-0.5%', cap: '$15B', img: 'https://cryptologos.cc/logos/cardano-ada-logo.svg?v=025' },
    { name: 'Ripple', symbol: 'XRP', price: '$0.62', change: '+0.1%', cap: '$34B', img: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=025' },
];

export default function Market() {
    return (
        <Box>
            <Heading mb={6}>Market Trends</Heading>
            <TableContainer bg="gray.800" borderRadius="xl" p={4}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Asset</Th>
                            <Th>Price</Th>
                            <Th>24h Change</Th>
                            <Th>Market Cap</Th>
                            <Th>Trade</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {coins.map((coin) => (
                            <Tr key={coin.symbol} _hover={{ bg: 'whiteAlpha.50' }}>
                                <Td>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <Image src={coin.img} boxSize="30px" />
                                        <Box>
                                            <Text fontWeight="bold">{coin.name}</Text>
                                            <Badge colorScheme="gray">{coin.symbol}</Badge>
                                        </Box>
                                    </Box>
                                </Td>
                                <Td fontWeight="medium">{coin.price}</Td>
                                <Td color={coin.change.startsWith('+') ? 'green.400' : 'red.400'}>{coin.change}</Td>
                                <Td>{coin.cap}</Td>
                                <Td>
                                    <Button size="sm" colorScheme="brand">Trade</Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}
