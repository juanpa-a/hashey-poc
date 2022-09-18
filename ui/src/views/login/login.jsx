import { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { login } from "../../services/pocketbase";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Login = ({ onResponse }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    const [payload, setPayload] = useState({
        email: "",
        password: "",
    });

    const setValue = (key) => (val) =>
        setPayload({ ...payload, [key]: val.target.value });

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <Stack
                        spacing={4}
                        p="1rem"
                        backgroundColor="whiteAlpha.900"
                        boxShadow="md"
                    >
                        <FormControl>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<CFaUserAlt color="gray.300" />}
                                />
                                <Input
                                    type="email"
                                    placeholder="email address"
                                    onChange={setValue("email")}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    color="gray.300"
                                    children={<CFaLock color="gray.300" />}
                                />
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    onChange={setValue("password")}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleShowClick}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormHelperText textAlign="right">
                                <Link>forgot password?</Link>
                            </FormHelperText>
                        </FormControl>
                        <Button
                            borderRadius={0}
                            type="submit"
                            variant="solid"
                            colorScheme="teal"
                            width="full"
                            onClick={() => {
                                login(payload, onResponse);
                            }}
                        >
                            Login
                        </Button>
                    </Stack>
                </Box>
            </Stack>
            <Box>
                New to us?{" "}
                <Link color="teal.500" href="#">
                    Sign Up
                </Link>
            </Box>
        </Flex>
    );
};
