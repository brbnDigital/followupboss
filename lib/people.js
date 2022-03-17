"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
const client_1 = require("./client");
class People {
    static async GetAll(options) {
        try {
            const { data } = await client_1.client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS,
                ...options
            }));
            return data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    /**
     * Search for contact with a name LIKE what is given.
     * Example, if you search for `drew`, it might return a contact like `Andrew`.
     * @param name
     * @param options
     * @returns
     */
    static async GetByName(name, options) {
        try {
            const { data } = await client_1.client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS,
                ...options,
                ...{ name }
            }));
            return data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    /**
     * Search for contact with a first name LIKE what is given.
     * Example, if you search for `drew`, it might return a contact like `Andrew`.
     * @param firstName
     * @param options
     * @returns
     */
    static async GetByFirstName(firstName, options) {
        try {
            const { data } = await client_1.client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS,
                ...options,
                ...{ firstName }
            }));
            return data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    /**
     * Search for contact with a last name LIKE what is given.
     * Example, if you search for `drew`, it might return a contact like `Andrew`.
     * @param lastName
     * @param options
     * @returns
     */
    static async GetByLastName(lastName, options) {
        try {
            const { data } = await client_1.client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS,
                ...options,
                ...{ lastName }
            }));
            return data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    /**
     * Search for a contact by email address.
     * @param email
     * @param options
     * @returns
     */
    static async GetByEmail(email, options) {
        try {
            const { data } = await client_1.client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS,
                ...options,
                ...{ email }
            }));
            return data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    /**
     * Search for a contact by phone number.
     * @param phone
     * @param options
     * @returns
     */
    static async GetByPhone(phone, options) {
        try {
            const { data } = await client_1.client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS,
                ...options,
                ...{ phone }
            }));
            return data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    /**
     * Search contacts that match one or more tags e.g.
     * Foo,Bar will match contacts with tags that include Foo OR Bar.
     * @param tags
     * @param options
     * @returns
     */
    static async GetByTags(tags, options) {
        try {
            const { data } = await client_1.client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS,
                ...options,
                ...{ tags: tags.join(",") }
            }));
            return data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
exports.People = People;
People.DEFAULT_GET_OPTIONS = {
    sort: "created",
    limit: "10",
    offset: "0",
    includeTrash: "false",
    includeUnclaimed: "false"
};
