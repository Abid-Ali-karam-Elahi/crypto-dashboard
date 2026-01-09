
import React, { useState, useEffect } from 'react';
import { Box, Drawer, DrawerContent, DrawerOverlay, useDisclosure, Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const AppLayout = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const [title, setTitle] = useState("Dashboard");

    useEffect(() => {
        if (location.pathname === "/") setTitle("Dashboard");
        else if (location.pathname === "/transactions") setTitle("Transactions");
        else if (location.pathname === "/support") setTitle("Support");
    }, [location.pathname]);

    return (
        <Flex bg="gray.50" minH="100vh">
            {/* Desktop Sidebar */}
            <Box display={{ base: "none", lg: "block" }}>
                <Sidebar />
            </Box>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <Sidebar onClose={onClose} />
                </DrawerContent>
            </Drawer>

            {/* Main Content */}
            <Box flex="1" h="100vh" overflowY="auto">
                <TopBar title={title} onOpen={onOpen} />
                <Box px={{ base: 4, lg: 8 }} pb={8} maxW="1200px" mx="auto">
                    {children}
                </Box>
            </Box>
        </Flex>
    );
};

export default AppLayout;
