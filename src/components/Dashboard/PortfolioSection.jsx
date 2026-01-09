
import React from 'react';
import { HStack, Stack, Icon, Text, Tag, Button, Flex } from '@chakra-ui/react';
import { AiOutlineInfoCircle } from 'react-icons/ai'; // Info icon
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'; // Deposit/Withdraw icons presumably, or standard arrows

const PortfolioSection = () => {
    return (
        <HStack
            bg="white"
            borderRadius="xl"
            p={6}
            align={{ base: "flex-start", xl: "center" }} // Stack on mobile vertically or keep horizontal if fits
            flexDir={{ base: "column", lg: "row" }}
            spacing={{ base: 4, lg: 16 }}
            justify="space-between"
            mb={6}
            boxShadow="sm"
        >
            {/* Total Portfolio Value */}
            <Stack>
                <HStack color="gray.500">
                    <Text fontSize="sm">Total Portfolio Value</Text>
                    <Icon as={AiOutlineInfoCircle} />
                </HStack>
                <Text fontSize="2xl" fontWeight="medium">₹ 112,312.24</Text>
            </Stack>

            {/* Wallet Balances */}
            <Stack>
                <Text fontSize="sm" color="gray.500">Wallet Balances</Text>
                <HStack spacing={4}>
                    <HStack>
                        <Text fontSize="2xl" fontWeight="medium">22.39401000</Text>
                        <Tag colorScheme="gray">BTC</Tag>
                    </HStack>
                    <HStack>
                        <Text fontSize="2xl" fontWeight="medium">₹ 1,300.00</Text>
                        <Tag colorScheme="gray">INR</Tag>
                    </HStack>
                </HStack>
            </Stack>

            {/* Buttons */}
            <HStack>
                <Button leftIcon={<Icon as={MdArrowDownward} />} bg="brand.500" color="white" _hover={{ bg: "brand.600" }}>
                    Deposit
                </Button>
                <Button leftIcon={<Icon as={MdArrowUpward} />} bg="brand.500" color="white" _hover={{ bg: "brand.600" }}>
                    Withdraw
                </Button>
            </HStack>
        </HStack>
    );
};

export default PortfolioSection;
