
import React from 'react';
import { Box, Tag, Text } from '@chakra-ui/react';

const InfoCard = ({ imgUrl, text, tagText, inverted, tagColor, tagBg }) => {
    return (
        <Box
            bg={inverted ? "brand.500" : "white"}
            borderRadius="xl"
            p={6}
            boxShadow="sm"
            bgImage={imgUrl}
            bgSize="cover"
            bgRepeat="no-repeat"
            color={inverted ? "white" : "black"}
        >
            <Tag
                bg={tagBg || (inverted ? "white" : "brand.500")}
                color={tagColor || (inverted ? "brand.500" : "white")}
                borderRadius="full"
                mb={4}
            >
                {tagText}
            </Tag>
            <Text fontSize="lg" fontWeight="medium" maxW="400px" lineHeight="1.4">
                {text}
            </Text>
        </Box>
    );
};

export default InfoCard;
