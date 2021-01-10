<template>
  <div id="search_events">
    <div id="body">
      <h3>Search for Events and Venues</h3>
      <br />
      <br />
      <div id="events_form">
        <b-container fluid>
          <div class="d-flex justify-content-between">
            <div class="p-3">
              <b-collapse id="collapse-3"></b-collapse>
              <p align="left">Choose dates</p>
              <div class="card bg-dark text-light" id="datepicker">
                <div>
                  <label for="datepicker-from"></label>
                  <b-form-datepicker
                    id="datepicker-from"
                    v-model="userdata.start_time_min"
                    class="mb-2"
                  ></b-form-datepicker>
                  <p align="left">From</p>
                </div>
                <div>
                  <label for="datepicker-until"></label>
                  <b-form-datepicker
                    id="datepicker-until"
                    v-model="userdata.start_time_max"
                    class="mb-2"
                  ></b-form-datepicker>
                  <p align="left">Until</p>
                </div>
              </div>
            </div>
            <div class="p-3">
              <div>
                <p align="left">Choose Event Category</p>
                <b-form inline>
                  <label
                    class="mr-sm-3 float-left"
                    for="event-category-selection"
                  ></label>
                  <b-form-select
                    class="mb-2 mr-sm-2 mb-sm-0"
                    v-model="userdata.selectedEventCategory"
                    :options="event_categories"
                    value-field="id"
                    text-field="name"
                  ></b-form-select>
                </b-form>

                <hr width="300" align="left" />

                <p align="left">Choose City</p>
                <b-form inline>
                  <label
                    class="mr-sm-3 float-left"
                    for="event-place-selection"
                  ></label>
                  <b-form-select
                    class="mb-2 mr-sm-2 mb-sm-0"
                    v-model="userdata.selectedEventPlace"
                    :options="event_places"
                    value-field="id"
                    text-field="name"
                  ></b-form-select>
                </b-form>
                <br />
                <b-spinner
                  variant="primary"
                  label="Spinning"
                  v-if="loading"
                ></b-spinner>

                <b-form inline>
                  <label class="mr-sm-3 float-left" for="eventbutton"></label>

                  <b-button
                    size="md"
                    @click.prevent="executeEventSearch"
                    class="mr-sm-3 float-left"
                    variant="info"
                    id="eventbutton"
                    v-b-toggle.collapse-1
                  >
                    Find Events
                  </b-button>
                </b-form>
              </div>
            </div>

            <div class="p-3">
              <div>
                <p align="left">Choose Venue Category</p>
                <b-form inline>
                  <label
                    class="mr-sm-3 float-left"
                    for="venue-category-selection"
                  ></label>
                  <b-form-select
                    class="mb-2 mr-sm-2 mb-sm-0"
                    v-model="userdata.selectedVenueCategory"
                    :options="venue_categories"
                    value-field="id"
                    text-field="name"
                    id="venue-category-selection"
                  ></b-form-select>
                </b-form>
                <hr width="300" align="left" />

                <p align="left">Choose City</p>
                <b-form inline>
                  <label
                    class="mr-sm-3 float-left"
                    for="venue-place-selection"
                  ></label>
                  <b-form-select
                    class="mb-2 mr-sm-2 mb-sm-0"
                    v-model="userdata.selectedVenuePlace"
                    :options="venue_places"
                    value-field="id"
                    text-field="name"
                  ></b-form-select>
                </b-form>
                <br />
                <b-spinner
                  variant="primary"
                  label="Spinning"
                  v-if="loading"
                ></b-spinner>
                <b-form inline>
                  <label class="mr-sm-3 float-left" for="venuebutton"></label>
                  <b-button
                    size="md"
                    @click.prevent="executeVenueSearch"
                    class="mr-sm-3 float-left"
                    variant="info"
                    id="venuebutton"
                    v-b-toggle.collapse-2
                  >
                    Find Venues</b-button
                  >
                </b-form>
              </div>
            </div>

            <div class="p-3">
              <p align="left">Search for Events with one word</p>
              <b-form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  v-model="userdata.EventTagWord"
                />
                <b-button
                  variant="info"
                  class="text-center float-left"
                  type="submit"
                  @click.prevent="EventSearchEverywhere"
                  v-b-toggle.collapse-1
                  >Search Events</b-button
                >
              </b-form>
              <br />
              <p align="left">Search for Venues with one word</p>
              <b-form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  v-model="userdata.VenueTagWord"
                />
                <b-button
                  variant="info"
                  class="text-center float-left"
                  type="submit"
                  @click.prevent="VenueSearchEverywhere"
                  v-b-toggle.collapse-2
                  >Search Venues</b-button
                >
              </b-form>
            </div>
          </div>

          <b-form-row class="mb-2 mr-sm-2 mb-sm-0">
            <b-col>
              <div>
                <div class="overflow-auto">
                  <b-collapse id="collapse-1">
                    <b-col lg="6" class="my-1">
                      <b-form-group
                        label="Search through the results"
                        label-for="filter-input"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-size="sm"
                        class="mb-0"
                      >
                        <b-input-group size="sm">
                          <b-form-input
                            id="filter-input"
                            v-model="filter"
                            type="search"
                            placeholder="Type to Search"
                          ></b-form-input>

                          <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''"
                              >Clear</b-button
                            >
                          </b-input-group-append>
                        </b-input-group>

                        <br />
                        <b-pagination
                          v-model="currentPage"
                          :total-rows="rows"
                          :per-page="perPage"
                          aria-controls="eventdataTable"
                        ></b-pagination>
                      </b-form-group>
                    </b-col>
                    <!-- <p class="mt-3">Viewing page: {{ currentPage }} </p> -->
                    <div>
                      <b-table
                        sticky-header
                        selectable
                        select-mode="single"
                        selected-variant="success"
                        w-auto
                        show-empty
                        small
                        stacked="md"
                        id="eventdataTable"
                        striped
                        hover
                        responsive
                        :items="items"
                        :fields="event_columns"
                        :per-page="perPage"
                        :current-page="currentPage"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                        :sort-direction="sortDirection"
                        :filter="filter"
                        :filterIncludedFields="filterOn"
                        @filtered="onFiltered"
                      >
                        <template v-slot:cell(index)="data">
                          {{ data.index + 1 }}
                        </template>

                        <template v-slot:cell(name)="row">
                          {{ row.value.first }} {{ row.value.last }}
                        </template>


                     
                         <template v-slot:cell(details)="row">
                          <b-button
                            variant="info"
                            class="text-center"
                            size="sm"
                            type="submit"
                            @click.prevent="row.toggleDetails"
                          >
                            {{ row.detailsShowing ? "Hide" : "Show" }}
                            Details</b-button
                          >
                        </template>
                        <template v-slot:cell(nearby_venues)="row">
                          <div>
                            <b-button
                              variant="info"
                              class="text-center"
                              size="sm"
                              @click="show1 = true"                             
                              v-model="userdata.eventApiId"                             
                              >Nearby Venues {{ row.item.api_id }}
                            </b-button>
                            <b-modal
                              hide-footer
                              id=row.item.id
                              ok-variant="info"
                              v-model="show1"
                              size="sm"
                              title="Nearby Venues"
                            >
                              {{ row.item.api_id }}
                              <div>
                              <p align="left">Choose Venues close to</p>
                              <b-form-select
                                size="sm"
                                v-model="userdata.eventApiId"
                                class="mb-3"
                              >
                                <template>
                                  <option :value="row.item.api_id">
                                    {{ row.item.api_id }}
                                  </option>
                                </template>

                                  <template >
                                 <b-form-select-option :value="row.item.api_id">
                                   {{ row.item.api_id }}</b-form-select-option>
                              </template>  -->
                              </b-form-select>
                             </div>
                              <label
                                class="mr-sm-3"
                                for="venue-category-selection"
                              ></label>
                              <b-form-select
                                class="mb-2 mr-sm-2 mb-sm-0"
                                v-model="userdata.selectedVenueCategory"
                                :options="venue_categories"
                                value-field="id"
                                text-field="name"
                                id="venue-category-selection"
                                size="sm"
                              ></b-form-select>

                              <hr width="300" align="left" />
                              <div>
                                <p align="left">Distance</p>
                                <label
                                  class="mr-sm-3"
                                  for="event-place-selection"
                                ></label>
                                <b-form-input
                                  size="sm"
                                  v-model="userdata.distance"
                                  placeholder="distance"
                                  id="input1"
                                ></b-form-input
                                >km.
                                <br />
                                <b-button
                                  size="sm"
                                  variant="success"
                                  @click="VenuesFromSelectedEvent"
                                  v-b-toggle.collapse-2
                                >
                                  Click Here
                                </b-button>
                              </div>
                            </b-modal>
                            
                          </div>
                        </template> 
                        <template v-slot:row-details="row">
                          <b-card id="event_details_card">
                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Event Title: </b></b-col
                              >
                              <b-col>{{ row.item.title }}</b-col>
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Description: </b></b-col
                              >
                              <b-col>{{ row.item.description }}</b-col>
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Category: </b></b-col
                              >
                              <b-col>{{ row.item.category }}</b-col>
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Url: </b></b-col
                              >
                              <b-col
                                ><b-link :href="row.item.url" target="_blank">
                                  {{ row.item.url }}</b-link
                                ></b-col
                              >
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Venue Name:</b></b-col
                              >
                              <b-col>{{ row.item.name }}</b-col>
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>
                                  Address of {{ row.item.venue_name }}
                                </b></b-col
                              >
                              <b-col>{{ row.item.venue_address }}</b-col>
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b> Price </b></b-col
                              >
                              <b-col>{{ row.item.price }}</b-col>
                            </b-row>
                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b> Performer Name </b></b-col
                              >
                              <b-col>{{ row.item.performer_name }}</b-col>
                            </b-row>
                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b> Performer Url </b></b-col
                              >
                              <b-col>{{ row.item.performer_url }}</b-col>
                            </b-row>
                          </b-card>
                        </template>
                      </b-table>
                    </div>
                  </b-collapse>

                  <b-collapse id="collapse-2">
                    <b-col lg="6" class="my-1">
                      <b-form-group
                        label="Search through the results"
                        label-for="filter-input"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-size="sm"
                        class="mb-0"
                      >
                        <b-input-group size="sm">
                          <b-form-input
                            id="filter-input"
                            v-model="filter"
                            type="search"
                            placeholder="Type to Search"
                          ></b-form-input>

                          <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''"
                              >Clear</b-button
                            >
                          </b-input-group-append>
                        </b-input-group>

                        <br />
                        <b-pagination
                          v-model="currentPage"
                          :total-rows="rows"
                          :per-page="perPage"
                          aria-controls="venuedataTable"
                        ></b-pagination>
                      </b-form-group>
                    </b-col>
                    <div>
                      <b-table
                        sticky-header
                        selectable
                        select-mode="single"
                        selected-variant="success"
                        w-auto
                        show-empty
                        small
                        stacked="md"
                        id="venuedataTable"
                        striped
                        hover
                        :items="items"
                        :fields="venue_columns"
                        :per-page="perPage"
                        :current-page="currentPage"
                        @filtered="onFiltered"
                        :filter="filter"
                        :filterIncludedFields="filterOn"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                        :sort-direction="sortDirection"
                      >
                        <template v-slot:cell(index)="data">
                          {{ data.index + 1 }}
                        </template>

                        <template v-slot:cell(name)="row"
                          >{{ row.value.first }} {{ row.value.last }}
                        </template>

                        <template v-slot:cell(details)="row">
                          <b-button
                            variant="info"
                            class="text-center"
                            size="sm"
                            type="submit"
                            @click.prevent="row.toggleDetails"
                          >
                            {{ row.detailsShowing ? "Hide" : "Show" }}
                            Details</b-button
                          >
                        </template>

                        <template v-slot:cell(nearby_events)="row">
                          <div>
                            <b-button
                              variant="info"
                              class="text-center"
                              size="sm"
                              @click="show2 = true"
                              >Nearby Events {{ row.item.id }}
                            </b-button>
                            <b-modal
                              ok-variant="info"
                              v-model="show2"
                              id="modal2"
                              size="sm"
                              title="Nearby Events"
                            >
                              <div>
                                <p align="left">
                                  Choose Event Category close to
                                </p>

                                <b-form-select
                                  v-model="userdata.venue_id"
                                  class="mb-3"
                                  @change="doSomething"
                                >
                                  <!--    This slot appears above the options from 'options' prop -->
                                  <template slot="first">
                                    <option :value="row.item.id">
                                      {{ row.item.id }}
                                    </option>
                                  </template>
                                </b-form-select>

                                <label
                                  class="mr-sm-3"
                                  for="event-category-selection"
                                ></label>
                                <b-form-select
                                  class="mb-2 mr-sm-2 mb-sm-0"
                                  v-model="userdata.selectedEventCategory"
                                  :options="event_categories"
                                  value-field="id"
                                  text-field="name"
                                  id="event-category-selection"
                                  size="sm"
                                ></b-form-select>
                              </div>
                              <hr width="300" align="left" />
                              <div>
                                <p align="left">Distance</p>
                                <label
                                  class="mr-sm-3"
                                  for="venue-place-selection"
                                ></label>
                                <b-form-input
                                  v-model="userdata.distance"
                                  placeholder="distance"
                                  id="input2"
                                ></b-form-input
                                >km.
                              </div>
                              <b-button
                                size="sm"
                                variant="success"
                                @click="EventsFromSelectedVenue"
                                v-b-toggle.collapse-1
                              >
                                Click Here
                              </b-button>
                            </b-modal>
                          </div>
                        </template>

                        <template v-slot:row-details="row">
                          <b-card id="venue_details_card">
                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Venue Name: </b></b-col
                              >
                              <b-col>{{ row.item.venue_name }}</b-col>
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Venue Description: </b></b-col
                              >
                              <b-col>{{ row.item.description }}</b-col>
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Category: </b></b-col
                              >
                              <b-col>{{ row.item.category }}</b-col>
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Url: </b></b-col
                              >
                              <b-col
                                ><b-link :href="row.item.url" target="_blank">{{
                                  row.item.url
                                }}</b-link></b-col
                              >
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b> Address of {{ row.item.name }} </b></b-col
                              >
                              <b-col
                                >{{ row.item.address }} -
                                {{ row.item.postal_code }}</b-col
                              >
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Phone number: </b></b-col
                              >
                              <b-col>{{ row.item.phone }}</b-col>
                            </b-row>
                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Facebook: </b></b-col
                              >
                              <b-col>{{ row.item.facebook }}</b-col>
                            </b-row>
                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Open: </b></b-col
                              >
                              <b-col>{{ row.item.open }}</b-col>
                            </b-row>
                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Day: </b></b-col
                              >
                              <b-col>{{ row.item.day }}</b-col>
                            </b-row>

                            <b-row class="mb-2">
                              <b-col sm="3" class="text-sm-right"
                                ><b>Is it open today?: </b></b-col
                              >
                              <b-col>{{ row.item.Isopen }}</b-col>
                            </b-row>
                          </b-card>
                        </template>
                      </b-table>
                    </div>
                  </b-collapse>
                </div>
              </div>
              <br />
            </b-col>
          </b-form-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/config/api.js";
import axios from "axios";

export default {
  name: "search_events_venues",
  components: {},

  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      search: "",
      value: [],
      event_places: [],
      venue_places: [],
      items: [],
      perPage: 10,
      currentPage: 1,
      totalRows: 1,
      selectAll: false,

      event_columns: [
        "index",
        {
          key: "title",
          label: "Event Title",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "venue_name",
          label: "Venue Name",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "city_name",
          label: "City",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "start_time",
          label: "Time",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "api_id",
          label: "Event Id",
          sortable: true,
          sortDirection: "desc",
        },
        { key: "details", label: "Details" },
        { key: "nearby_venues", label: "Nearby Venues" },
      ],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
      venue_columns: [
        "index",
        {
          key: "venue_name",

          label: "Venue name",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "address",
          label: "Venue address",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "city_name",
          label: "City",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "category",
          label: "Venue category",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "id",
          label: "Venue id",
          sortable: true,
          sortDirection: "desc",
        },
        { key: "details", label: "Details" },
        { key: "nearby_events", label: "Nearby Events" },
      ],
      event_categories: [],
      venue_categories: [],
      selected: null,
      striped: false,
      loading: false,
      userdata: {
        EventTagWord: undefined,
        VenueTagWord: undefined,
        selectedEventCategory: undefined,
        selectedVenueCategory: undefined,
        selectedEventPlace: undefined,
        selectedVenuePlace: undefined,
        eventApiId: undefined,
        venue_id: undefined,
        latitude: 0,
        longitude: 0,
        distance: 20,
        start_time_min: new Date().toJSON().slice(0, 10),
        start_time_max: new Date(new Date().setMonth(new Date().getMonth() + 3))
          .toJSON()
          .slice(0, 10),
      },
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
    data() {
      return this.items.length;
    },
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  created() {
    console.clear();
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
    this.loading = true;

    axios
      .get(api.URI.GET_EVENT_CATEGORIES)
      .then((response) => {
        this.event_categories = response.data;
        this.userdata.selectedEventCategory = this.event_categories[0].id;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
    axios
      .get(api.URI.GET_VENUE_CATEGORIES)
      .then((response) => {
        this.venue_categories = response.data;
        this.userdata.selectedVenueCategory = this.venue_categories[0].id;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
    axios
      .get(api.URI.GET_REGIONS)
      .then((response) => {
        this.event_places = response.data;
        this.userdata.selectedEventPlace = this.event_places[0].id;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
    axios
      .get(api.URI.GET_REGIONS)
      .then((response) => {
        this.venue_places = response.data;
        this.userdata.selectedVenuePlace = this.venue_places[0].id;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    doSomething(value) {
      console.log(value); //selected value
    },

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    executeEventSearch() {
      this.loading = true;
      let place_name;

      // let place_id = this.event_places[this.userdata.selectedEventPlace].id;
      // console.log(place_id);
      //find By Id in DB and then print name of "model"
      // let place = document.
      // console.log(place);
      //to onoma tou place vasei tou id-alla opws parousiazetai sto frontend
      // let place_name = this.place.name ;

      // console.log(place_name);

      switch (this.userdata.selectedEventPlace) {
        case 8:
          place_name = "Athens";
          break;
        case 9:
          place_name = "London";
          break;
        case 10:
          place_name = "Berlin";
          break;
        case 11:
          place_name = "Barcelona";
          break;
        case 12:
          place_name = "New York";
          break;
        case 13:
          place_name = "Amsterdam";
          break;
        case 14:
          place_name = "New Orleans";
          break;
      }

      let parameters = {
        selectedEventCategory: this.userdata.selectedEventCategory,
        selectedEventPlace: place_name,
        latitude: 0,
        longitude: 0,
        distance: this.userdata.distance,
        start_time_min: this.userdata.start_time_min,
        start_time_max: this.userdata.start_time_max,
      };

      console.log("clicked!!! ");
      console.log(
        "search in " +
          this.userdata.selectedEventPlace +
          " for the category " +
          this.userdata.selectedEventCategory +
          " ."
      );
      console.log(parameters);

      axios
        .post(api.URI.SEARCH_EVENTS, parameters)
        .then((response) => {
          this.items = response.data;
          console.log("results: ");
          console.log(this.items);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    /* sendInfo(venue_id) {
      this.selectedUser = venue_id;
    }, */
    VenuesFromSelectedEvent() {
      this.loading = true;
      let parameters = {
        eventApiId: this.userdata.eventApiId,
        selectedVenueCategory: this.userdata.selectedVenueCategory,
        latitude: this.userdata.latitude,
        longitude: this.userdata.longitude,
        distance: this.userdata.distance,
      };

      console.log(
        "Search for Venues according to distance from selected event!!! "
      );

      console.log(parameters);

      axios
        .post(api.URI.FIND_VENUES_FROM_SELECTED_EVENT, parameters)
        .then((response) => {
          this.items = response.data;
          console.log("results: ");
          console.log(this.items);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    executeVenueSearch() {
      this.loading = true;
      let place_name;

      switch (this.userdata.selectedVenuePlace) {
        case 8:
          place_name = "Athens";
          break;
        case 9:
          place_name = "London";
          break;
        case 10:
          place_name = "Berlin";
          break;
        case 11:
          place_name = "Barcelona";
          break;
        case 12:
          place_name = "New York";
          break;
        case 13:
          place_name = "Amsterdam";
          break;
        case 14:
          place_name = "New Orleans";
          break;
      }

      let parameters = {
        selectedVenueCategory: this.userdata.selectedVenueCategory,
        selectedVenuePlace: place_name,
        latitude: 0,
        longitude: 0,
        distance: this.userdata.distance,
      };

      console.log("clicked!!! ");
      console.log(
        "search in " +
          this.userdata.selectedVenuePlace +
          " for " +
          this.userdata.selectedVenueCategory +
          " category."
      );
      console.log(parameters);
      axios
        .post(api.URI.SEARCH_VENUES, parameters)
        .then((response) => {
          this.items = response.data;
          console.log(this.items);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    EventsFromSelectedVenue() {
      this.loading = true;
      let parameters = {
        venue_id: this.userdata.venue_id,
        selectedEventCategory: this.userdata.selectedEventCategory,
        latitude: this.userdata.latitude,
        longitude: this.userdata.longitude,
        distance: this.userdata.distance,
      };

      console.log(
        "Search for Venues according to distance from selected event!!! "
      );

      console.log(parameters);

      axios
        .post(api.URI.FIND_EVENTS_FROM_SELECTED_VENUE, parameters)
        .then((response) => {
          this.items = response.data;
          console.log("results: ");
          console.log(this.items);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    EventSearchEverywhere() {
      this.loading = true;

      let parameters = {
        tag: this.userdata.EventTagWord,
      };

      console.log("clicked!!! ");
      console.log(
        "the event you are searching for is based on word " +
          this.userdata.EventTagWord
      );
      console.log(parameters);

      axios
        .post(api.URI.TAG_WORDS_SEARCH_EVENTS, parameters)
        .then((response) => {
          this.items = response.data;
          console.log(this.items);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    VenueSearchEverywhere() {
      this.loading = true;

      let parameters = {
        tag: this.userdata.VenueTagWord,
      };

      console.log("clicked!!! ");
      console.log(
        "the venue you are searching for is based on word " +
          this.userdata.VenueTagWord
      );
      console.log(parameters);

      axios
        .post(api.URI.TAG_WORDS_SEARCH_VENUES, parameters)
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<style>
#datepicker {
  width: 320px;
  height: 220px;
  border-radius: 25px;
}

#datepicker-from {
  color: cornflowerblue;
}
#datepicker-until {
  color: cornflowerblue;
}

#events_form {
  box-align: "center";
}

#col1 {
  top: 50px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
#col2 {
  top: 50px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

#col3 {
  top: 50px;
  right: 90px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

#eventdataTable {
  color: rgb(236, 160, 46);
  background-color: rgb(66, 65, 65);
  width: 1100px;
  margin-left: 150px;
}

#venuedataTable {
  color: rgb(236, 160, 46);
  background-color: rgb(66, 65, 65);
  width: 1100px;
  margin-left: 150px;
}

.scrollable-menu {
  height: auto;
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
}

#venue_details_card {
  background-color: rgb(224, 208, 186);
}
#event_details_card {
  background-color: rgb(224, 208, 186);
}
#input1 {
  width: 150px;
}
#input2 {
  width: 150px;
}
</style>