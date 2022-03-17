interface Person {
    id: number
    created: string
    updated: string
    createdVia?: string
    lastActivity: string
    name: string
    firstName: string
    lastName: string
    stage: string
    stageId: number
    source: string
    sourceId: number
    sourceUrl: string
    leadFlowId?: number
    delayed: boolean
    contacted: number
    price: number
    assignedLenderId?: number
    assignedLenderName?: string
    assignedUserId: number
    assignedPondId?: number
    assignedTo: string
    tags: string[]
    emails: string[]
    phones: string[]
    addresses: string[]
    picture: any
    socialData: any
    claimed: boolean
    dealStatus: string
    dealStage: string
    dealName: string
    dealCloseDate: string
    dealPrice: number
    firstToClaimOffer: boolean
    collaborators: string[]
    teamLeaders: string[]
    pondMembers: string[]
}

type PEOPLE_SORT_BY = "id" | "created" | "updated" | "name" | 
"firstName" | "lastName" | "price" | "stage" | "lastActivity" | 
"lastCommunication" | "lastReceivedEmail" | "lastSentEmail" | 
"lastEmail" | "emailsReceived" | "emailsSent" | "lastIncomingCall" |
"lastOutgoingCall" | "lastCall" | "firstCall" | "callsIncoming" | 
"callsOutgoing" | "callsDuration" | "lastReceivedText" | "lastSentText" |
"lastText" | "lastLeadActivity" | "lastEmEventActivity" | "lastIdxVisit" | 
"textsReceived" | "textsSent" | "propertiesViewed" | "propertiesSaved" |
"pagesViewed" | "nextTask"

type PEOPLE_FIELDS = "id" | ""

type PEOPLE_GET_OPTIONS = {
    sort?: PEOPLE_SORT_BY
    limit?: string
    offset?: string
    includeTrash?: string
    includeUnclaimed?: string
}

type PEOPLE_GET_RESPONSE = {
    _metadata: {
        collection: "people"
        offset: number
        limit: number
        total: number
        next?: string
        nextLink?: string
    }
    people: Person[]
}