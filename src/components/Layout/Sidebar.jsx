
import React from 'react';
import { Box, HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { RxDashboard } from 'react-icons/rx';
import { TbArrowsDoubleNeSw } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
import { NavLink, useLocation } from 'react-router-dom';

const NavItem = ({ icon, text, to, onClose }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <NavLink to={to} onClick={onClose} style={{ textDecoration: 'none', width: '100%' }}>
            <HStack
                bg={isActive ? "gray.200" : "transparent"}
                color={isActive ? "gray.900" : "gray.500"}
                p={3}
                borderRadius="md"
                cursor="pointer"
                _hover={{ bg: "gray.100", color: "gray.900" }}
                transition="all 0.2s"
            >
                <Icon as={icon} boxSize={5} />
                <Text fontSize="md" fontWeight="medium">{text}</Text>
            </HStack>
        </NavLink>
    );
}

const Sidebar = ({ onClose }) => {
    return (
        <Box
            bg="white"
            boxShadow="sm"
            w={{ base: "full", lg: "256px" }}
            h="100vh"
            flexDir="column"
            justifyContent="space-between"
            p={4}
            display="flex"
        >
            <Box>
                <Heading fontSize="xl" color="brand.500" mb={8} px={3}>
                    @DOSOMECODING
                </Heading>

                <VStack spacing={2} align="stretch">
                    <NavItem icon={RxDashboard} text="Dashboard" to="/" onClose={onClose} />
                    <NavItem icon={TbArrowsDoubleNeSw} text="Transactions" to="/transactions" onClose={onClose} />
                </VStack>
            </Box>

            <Box>
                <NavItem icon={BiSupport} text="Support" to="/support" onClose={onClose} />
            </Box>
        </Box>
    );
};

export default Sidebar;
