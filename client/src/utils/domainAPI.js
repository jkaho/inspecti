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
  getPropertyListings: function() {
    return axios.post(url + "/api/user/domain/listings", {
        "listingType": "Sale",
        "propertyTypes": [
          "House"
        ],
        "listingAttributes": [
          "HasPhotos"
        ],
        "propertyEstablishedType": "Any",
        "minBedrooms": 1,
        "maxBedrooms": null,
        "minBathrooms": 1,
        // "maxBathrooms": 0,
        "minCarspaces": 1,
        // "maxCarspaces": 0,
        // "minPrice": 0,
        // "maxPrice": 0,
        // "minLandArea": 0,
        // "maxLandArea": 0,
        // "locations": [
        //   {
        //     "state": "ACT",
        //     "region": "string",
        //     "area": "string",
        //     "suburb": "string",
        //     "postCode": "string",
        //     "includeSurroundingSuburbs": true,
        //     "surroundingRadiusInMeters": 0
        //   }
        // ],
        // "locationTerms": "string",
        "keywords": [
          "North Sydney"
        ],
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