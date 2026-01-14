import React from 'react';
import {
    Box,
    Drawer,
    DrawerContent,
    useDisclosure,
    useColorModeValue,
} from '@chakra-ui/react';
import SidebarContent from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bg = useColorModeValue('gray.50', 'bg.900');

    return (
        <Box minH="100vh" bg={bg}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}

            <Box ml={{ base: 0, md: 60 }} p="4">
                <Outlet />
            </Box>
        </Box>
    );
}
