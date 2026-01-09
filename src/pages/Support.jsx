
import React from 'react';
import AppLayout from '../components/Layout/AppLayout';
import ContactForm from '../components/Support/ContactForm';
import InfoCard from '../components/Dashboard/InfoCard';
import { Box, Flex, Icon, Stack, Text, Heading } from '@chakra-ui/react';
import { IoMdMail } from 'react-icons/io'; // Mail icon
import { BsChatFill } from 'react-icons/bs'; // Chat icon

const Support = () => {
    return (
        <AppLayout>
            <Flex gap={6} flexDirection={{ base: "column", xl: "row" }} mt={6}>
                {/* Left Column: Info Text */}
                <Stack spacing={10} flex={1}>
                    <Box>
                        <Icon as={IoMdMail} boxSize={6} color="brand.500" mb={4} />
                        <Heading fontSize="3xl" mb={4}>Contact Us</Heading>
                        <Text fontSize="md" color="gray.500">
                            Have a question or just want to know more? Feel free to reach out to us.
                        </Text>
                    </Box>

                    <Box>
                        <Icon as={BsChatFill} boxSize={6} color="brand.500" mb={4} />
                        <Heading fontSize="3xl" mb={4}>Live Chat</Heading>
                        <Text fontSize="md" color="gray.500">
                            Don't have time to wait for the answer? Chat with us now.
                        </Text>
                    </Box>
                </Stack>

                {/* Right Column: Cards */}
                <Stack spacing={6} flex={1}>
                    <ContactForm />
                    <InfoCard
                        inverted={true}
                        tagText="Chatbot"
                        text="Chat with us now"
                    />
                </Stack>
            </Flex>
        </AppLayout>
    );
};

export default Support;
