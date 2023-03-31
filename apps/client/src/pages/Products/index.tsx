import { Flex, Heading } from '@chakra-ui/react';

import ProductsTable from './components/ProductsTable';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';

export default function Products() {
  return (
    <Flex width="full" direction="column" p={8}>
      <Heading as="h1" size="lg" mb={8}>
        Products Page
      </Heading>

      <Flex direction="column">
        <Flex>
          <SearchProduct />
          <AddProduct />
        </Flex>

        <ProductsTable />
      </Flex>
    </Flex>
  );
}
