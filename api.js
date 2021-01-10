const BASE_URL = "http://localhost:29554/efprojbackend/webresources/ee/";

export default {
    URI:{
    GET_REGIONS: BASE_URL + "regions",
    GET_EVENT_CATEGORIES: BASE_URL + "event_categories",
    GET_VENUE_CATEGORIES: BASE_URL + "venue_categories",
    SEARCH_EVENTS: BASE_URL + "searchevents",
    SEARCH_VENUES: BASE_URL + "searchvenues",
    GET_EVENT_DETAILS: BASE_URL+"eventdetails",
    GET_VENUE_DETAILS: BASE_URL+"venuedetails",
    TAG_WORDS_SEARCH_EVENTS: BASE_URL + "tag_words_search_events",
    TAG_WORDS_SEARCH_VENUES: BASE_URL + "tag_words_search_venues",
    FIND_EVENTS_FROM_SELECTED_VENUE: BASE_URL + "eventsclosetovenue",
    FIND_VENUES_FROM_SELECTED_EVENT : BASE_URL + "venuesclosetoevent"
    }
};