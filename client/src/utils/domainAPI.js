import axios from "axios";
const url = window.location.hostname.includes("localhost") ?
  "http://localhost:3001" : ""

const determinePropertyType = (propertyType) => {
  if (propertyType === "Apartment") {
    return ["apartmentUnitFlat"];
  } else if (propertyType === "House") {
    return ["house"];
  } else if (propertyType === "Townhouse") {
    return ["townhouse"];
  } else {
    return ["apartmentUnitFlat", "house", "townhouse"];
  }
}

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
  getPropertyListings: function(search, pageNumber) {
    let propertyType = search.type;
    return axios.post(url + "/api/user/domain/listings", {
        "listingType": "Sale",
        "propertyTypes": 
          determinePropertyType(propertyType)
        ,
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
            "state": search.location.state ? search.location.state : null,
            "region": search.location.region ? search.location.region : null,
            "area": search.location.area ? search.location.area : null,
            "suburb": search.location.name ? search.location.name : null,
            "postCode": search.location.postcode ? search.location.postcode : null,
            "includeSurroundingSuburbs": true,
            // "surroundingRadiusInMeters": 0
          }
        ],
        // "locationTerms": "string",
        // "keywords": [
        //   !search.location.state ? search.location : null
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
        "pageNumber": pageNumber,
        "pageSize": 20,      
    });
  },
  getSingleListing: function(listingId) {
    return axios.get(url + "/api/user/domain/listing/" + listingId);
  }
};

export default domainAPI;