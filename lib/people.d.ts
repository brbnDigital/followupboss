export declare class People {
    private static DEFAULT_GET_OPTIONS;
    static GetAll(options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE>;
    /**
     * Search for contact with a name LIKE what is given.
     * Example, if you search for `drew`, it might return a contact like `Andrew`.
     * @param name
     * @param options
     * @returns
     */
    static GetByName(name: string, options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE>;
    /**
     * Search for contact with a first name LIKE what is given.
     * Example, if you search for `drew`, it might return a contact like `Andrew`.
     * @param firstName
     * @param options
     * @returns
     */
    static GetByFirstName(firstName: string, options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE>;
    /**
     * Search for contact with a last name LIKE what is given.
     * Example, if you search for `drew`, it might return a contact like `Andrew`.
     * @param lastName
     * @param options
     * @returns
     */
    static GetByLastName(lastName: string, options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE>;
    /**
     * Search for a contact by email address.
     * @param email
     * @param options
     * @returns
     */
    static GetByEmail(email: string, options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE>;
    /**
     * Search for a contact by phone number.
     * @param phone
     * @param options
     * @returns
     */
    static GetByPhone(phone: string, options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE>;
    /**
     * Search contacts that match one or more tags e.g.
     * Foo,Bar will match contacts with tags that include Foo OR Bar.
     * @param tags
     * @param options
     * @returns
     */
    static GetByTags(tags: string[], options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE>;
}
