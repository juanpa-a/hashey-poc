import { useState, useEffect } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Login } from "./views/login/login";
import { Dashboard } from "./views/dashboard/dashboard";

export default () => {
    const [auth, setAuth] = useState();

    return (
        <ChakraProvider>
            {auth ? <Dashboard /> : <Login onResponse={setAuth} />}
        </ChakraProvider>
    );
};
