import { useState } from 'react';
import { Heading, Flex, Stack, Text } from '@chakra-ui/react';
import Card from '../../components/Card';

export default function Dashboard() {
  const [productCount, setProductCount] = useState(0);
  const [salesCount, setSalesCount] = useState('100');

  return (
    <Flex width="full" direction="column" p={4}>
      <Stack py={4} mb={6} spacing={0}>
        <Text size="sm" color="white">
          home/dashboard
        </Text>
        <Heading as="h1" size="lg" color="white" mt="0">
          Dashboard
        </Heading>
      </Stack>

      <Flex width="full" gap={4}>
        <Card
          header="Total Products"
          body={productCount.toString()}
          color="text-blue-500"
          borderColor="border-black"
        />
        <Card
          header="Total Sales"
          body={salesCount}
          color="text-green-500"
          borderColor="border-black"
        />
      </Flex>
    </Flex>
  );
}
