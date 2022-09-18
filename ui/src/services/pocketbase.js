import PocketBase from "pocketbase";
import { API_URL } from "../constants";

const client = new PocketBase(API_URL);

// (Optionally) authenticate

export const login = (payload, callback) =>
    client.admins.authViaEmail(payload.email, payload.password).then(callback);

export const getTransactions = async () => {
    return client.records.getList("transaction", 1, 50, {
        filter: 'created >= "2022-01-01 00:00:00"',
    });
};
