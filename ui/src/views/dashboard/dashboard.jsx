import { useState, useEffect } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container,
    Box,
    Heading,
} from "@chakra-ui/react";
import { getTransactions } from "../../services/pocketbase";

export const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTransactions();
            setData(data.items);
        };
        fetchData();
    }, []);

    return (
        <Container>
            <Heading marginTop={"12"}>Dashboard</Heading>
            <Box
                marginTop="12"
                maxW="xlg"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
            >
                <TableContainer>
                    <Table variant="striped" colorScheme="teal">
                        <TableCaption>Transactions to verify</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>User ID</Th>
                                <Th>Transaction ID</Th>
                                <Th>Is verified?</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((tx) => {
                                return (
                                    <Tr key={tx.id}>
                                        <Td>{tx.user_id}</Td>
                                        <Td>{tx.tx_hash}</Td>
                                        <Td>{`${tx.is_verified}`}</Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
};
