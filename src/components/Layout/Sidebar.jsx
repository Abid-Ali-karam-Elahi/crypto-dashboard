import React from 'react';
import {
    Box,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Text,
    VStack,
    Divider,
} from '@chakra-ui/react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import {
    FiHome,
    FiTrendingUp,
    FiPieChart,
    FiDollarSign,
    FiRefreshCw,
    FiSettings,
    FiHelpCircle,
    FiLogOut
} from 'react-icons/fi';

const LinkItems = [
    { name: 'Dashboard', icon: FiHome, path: '/dashboard' },
    { name: 'Market', icon: FiTrendingUp, path: '/market' },
    { name: 'Portfolio', icon: FiPieChart, path: '/portfolio' },
    { name: 'Transactions', icon: FiDollarSign, path: '/transactions' },
    { name: 'Exchange', icon: FiRefreshCw, path: '/exchange' },
    { name: 'Settings', icon: FiSettings, path: '/settings' },
    { name: 'Support', icon: FiHelpCircle, path: '/support' },
];

const SidebarContent = ({ ...props }) => {
    const location = useLocation();
    const bg = useColorModeValue('white', 'gray.900');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    return (
        <Box
            transition="3s ease"
            bg={bg}
            borderRight="1px"
            borderRightColor={borderColor}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...props}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    CryptoApp
                </Text>
            </Flex>
            <VStack spacing={1} align="stretch">
                {LinkItems.map((link) => (
                    <NavItem key={link.name} icon={link.icon} path={link.path} isActive={location.pathname === link.path}>
                        {link.name}
                    </NavItem>
                ))}
                <Divider my={4} />
                <NavItem icon={FiLogOut} path="/" color="red.400">
                    Sign Out
                </NavItem>
            </VStack>
        </Box>
    );
};

const NavItem = ({ icon, children, path, isActive, color, ...rest }) => {
    const activeBg = useColorModeValue('brand.100', 'whiteAlpha.200');
    const activeColor = useColorModeValue('brand.900', 'white');

    return (
        <Link
            as={RouterLink}
            to={path}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                bg={isActive ? activeBg : 'transparent'}
                color={isActive ? activeColor : color || 'inherit'}
                _hover={{
                    bg: activeBg,
                    color: activeColor,
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: activeColor,
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

export default SidebarContent;
