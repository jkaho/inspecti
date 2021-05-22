import axios from "axios";
const url = window.location.hostname.includes("localhost") ?
  "http://localhost:3001" : ""

const domainAPI = {
  getLocationSuggestions: function(query) {
    return axios.get(url + "/api/user/domain/location/q=" + query);
  },
  getAddressSuggestions: function(query) {
    return axios.get(url + "/api/user/domain/address/q=" + query);
  },
  getPropertyInfo: function(propertyId) {
    return axios.get(url + "/api/user/domain/property/q=" + propertyId)
  },
  getPropertyListings: function(search) {
    return axios.post(url + "/api/user/domain/listings", {
        "listingType": "Sale",
        "propertyTypes": [
          search.type = "Apartment" ? "apartmentUnitFlat" :
          search.type = "House" ? "house" :
          search.type = "Townhouse" ? "townhouse" : null
        ],
        "listingAttributes": [
          "HasPhotos"
        ],
        "propertyEstablishedType": "Any",
        "minBedrooms": search.minMax === "min" ? search.beds : null,
        "maxBedrooms": search.minMax === "max" ? search.beds : null,
        "minBathrooms": search.minMax === "min" ? search.baths : null,
        "maxBathrooms": search.minMax === "max" ? search.baths : null,
        "minCarspaces": search.minMax === "min" ? search.cars : null,
        "maxCarspaces": search.minMax === "max" ? search.cars : null,
        "minPrice": search.minMax === "min" ? search.price : null,
        "maxPrice": search.minMax === "max" ? search.price : null,
        "minLandArea": search.minMax === "min" ? search.size : null,
        "maxLandArea": search.minMax === "min" ? search.size : null,
        "locations": [
          {
            "state": search.location.state,
            "region": search.location.region,
            "area": search.location.area,
            "suburb": search.location.name,
            "postCode": search.location.postcode,
            "includeSurroundingSuburbs": true,
            // "surroundingRadiusInMeters": 0
          }
        ],
        // "locationTerms": "string",
        // "keywords": [
        //   "North Sydney"
        // ],
        // "customSort": {
        //   "elements": [
        //     {
        //       "field": "AdId",
        //       "direction": "Ascending"
        //     }
        //   ],
        // },
        "sort": {
          "sortKey": "Default",
          "direction": "Ascending",
        },
        "pageSize": 20,      
    });
  },
};

export default domainAPI;