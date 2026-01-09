
import React from 'react';
import AppLayout from '../components/Layout/AppLayout';
import PortfolioSection from '../components/Dashboard/PortfolioSection';
import PriceSection from '../components/Dashboard/PriceSection';
import RecentTransactions from '../components/Dashboard/RecentTransactions';
import InfoCard from '../components/Dashboard/InfoCard';
import { Flex, Grid, GridItem } from '@chakra-ui/react';

const Dashboard = () => {
    return (
        <AppLayout>
            <PortfolioSection />

            <Flex gap={6} flexDirection={{ base: "column", xl: "row" }} mb={6}>
                <PriceSection />
                <RecentTransactions />
            </Flex>

            <Grid templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }} gap={6}>
                <GridItem>
                    <InfoCard
                        tagText="Loans"
                        tagBg="brand.500"
                        tagColor="white"
                        text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
                        inverted={false}
                    />
                </GridItem>
                <GridItem>
                    <InfoCard
                        tagText="Contact"
                        tagBg="white"
                        tagColor="brand.500"
                        text="Learn more about our real estate, mortgage, and corporate account services"
                        inverted={true}
                    />
                </GridItem>
            </Grid>
        </AppLayout>
    );
};

export default Dashboard;
