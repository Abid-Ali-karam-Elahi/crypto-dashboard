
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



export default TopBar;
