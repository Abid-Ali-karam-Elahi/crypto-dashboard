import React from 'react';
import {
    Box,
    Heading,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    SimpleGrid,
    Card,
    CardBody
} from '@chakra-ui/react';

export default function Support() {
    return (
        <Box>
            <Heading mb={6}>Help & Support</Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Box>
                    <Heading size="md" mb={4}>Frequently Asked Questions</Heading>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left" fontWeight="medium">
                                        How do I verify my account?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} color="gray.400">
                    Go to Settings > Verification and upload your ID document. Review takes 24-48 hours.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left" fontWeight="medium">
                                        What are the withdrawal limits?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} color="gray.400">
                                Standard accounts can withdraw up to 2 BTC per day. Verified Plus accounts have unlimited withdrawals.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left" fontWeight="medium">
                                        How to secure my wallet?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} color="gray.400">
                                Enable 2FA in Settings, never share your recovery phrase, and use a strong password.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

                <Box>
                    <Heading size="md" mb={4}>Contact Us</Heading>
                    <Card>
                        <CardBody>
                            <FormControl mb={4}>
                                <FormLabel>Subject</FormLabel>
                                <Input placeholder="Issue with transaction" />
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Message</FormLabel>
                                <Textarea placeholder="Describe your issue..." />
                            </FormControl>
                            <Button colorScheme="brand">Submit Ticket</Button>
                        </CardBody>
                    </Card>
                </Box>
            </SimpleGrid>
        </Box>
    );
}
