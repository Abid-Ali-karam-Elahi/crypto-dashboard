
import React from 'react';
import {
    Box,
    HStack,
    Heading,
    Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure
} from '@chakra-ui/react';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const TopBar = ({ title, onOpen }) => {
    return (
        <Box bg="white" w="full" px={4} py={3} mb={4} boxShadow="sm" display={{ base: "block", lg: "none" }}>
            <HStack justify="space-between">
                <IconButton
                    icon={<Icon as={FaBars} />}
                    aria-label="Open Menu"
                    variant="ghost"
                    onClick={onOpen}
                    display={{ base: "flex", lg: "none" }}
                />

                <Heading fontSize="xl">{title}</Heading>

                <Icon as={FaUserCircle} boxSize={8} cursor="pointer" />
            </HStack>
        </Box>
    );
};

// Actually, looking at the desktop design, the TopBar seems to be present there too, 
// just not as a white strip? Or maybe it is?
// Screenshot 1: "Dashboard" text is just floating. The profile icon is there.
// If I use a white strip on mobile, that's fine.
// But on desktop, the user wants it to look like the screenshot.
// Screenshot 1: "Dashboard" is big text. Profile icon is top right. No background strip visible? 
// Or maybe the whole background is white and the gray is a card container?
// No, the sidebar is white. The rest is gray.
// The "Dashboard" title is on the gray background.
// The Profile icon is on the gray background.
// I will adjust TopBar to be transparent on desktop.

export default TopBar;
