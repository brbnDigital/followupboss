import { client } from "./client"

export class People {

    private static DEFAULT_GET_OPTIONS: Partial<PEOPLE_GET_OPTIONS> = {
        sort: "created",
        limit: "10",
        offset: "0",
        includeTrash: "false",
        includeUnclaimed: "false"
    }

    public static async GetAll(options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE> {

        try {

            const { data } = await client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS, 
                ...options}
            ))

            return data as PEOPLE_GET_RESPONSE

        } catch(error) {

            return Promise.reject(error)

        }

    }

    /**
     * Search for contact with a name LIKE what is given. 
     * Example, if you search for `drew`, it might return a contact like `Andrew`.
     * @param name 
     * @param options 
     * @returns 
     */

    public static async GetByName(name: string, options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE> {

        try {

            const { data } = await client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS, 
                ...options, 
                ...{ name }
            }))

            return data as PEOPLE_GET_RESPONSE

        } catch(error) {

            return Promise.reject(error)

        }

    }


    /**
     * Search for contact with a first name LIKE what is given. 
     * Example, if you search for `drew`, it might return a contact like `Andrew`.
     * @param firstName
     * @param options 
     * @returns 
     */

    public static async GetByFirstName(firstName: string, options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE> {

        try {

            const { data } = await client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS, 
                ...options, 
                ...{ firstName }
            }))

            return data as PEOPLE_GET_RESPONSE

        } catch(error) {

            return Promise.reject(error)

        }

    }


    /**
     * Search for contact with a last name LIKE what is given. 
     * Example, if you search for `drew`, it might return a contact like `Andrew`.
     * @param lastName
     * @param options 
     * @returns 
     */

    public static async GetByLastName(lastName: string, options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE> {

        try {

            const { data } = await client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS, 
                ...options, 
                ...{ lastName }
            }))

            return data as PEOPLE_GET_RESPONSE

        } catch(error) {

            return Promise.reject(error)

        }

    }


    /**
     * Search for a contact by email address.
     * @param email 
     * @param options 
     * @returns 
     */

    public static async GetByEmail(email: string, options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE> {

        try {

            const { data } = await client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS, 
                ...options, 
                ...{ email }
            }))

            return data as PEOPLE_GET_RESPONSE

        } catch(error) {

            return Promise.reject(error)

        }

    }


    /**
     * Search for a contact by phone number.
     * @param phone 
     * @param options 
     * @returns 
     */

    public static async GetByPhone(phone: string, options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE> {

        try {

            const { data } = await client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS, 
                ...options, 
                ...{ phone }
            }))

            return data as PEOPLE_GET_RESPONSE

        } catch(error) {

            return Promise.reject(error)

        }

    }


    /**
     * Search contacts that match one or more tags e.g. 
     * Foo,Bar will match contacts with tags that include Foo OR Bar.
     * @param tags 
     * @param options 
     * @returns 
     */

    public static async GetByTags(tags: string[], options?: PEOPLE_GET_OPTIONS): Promise<PEOPLE_GET_RESPONSE> {

        try {

            const { data } = await client.get("people?" + new URLSearchParams({
                ...People.DEFAULT_GET_OPTIONS, 
                ...options, 
                ...{ tags: tags.join(",") }
            }))

            return data as PEOPLE_GET_RESPONSE

        } catch(error) {

            return Promise.reject(error)

        }

    }

}
