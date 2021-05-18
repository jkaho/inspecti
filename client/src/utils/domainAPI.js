import axios from "axios";
const url = window.location.hostname.includes("localhost") ?
  "http://localhost:3001" : ""

const domainAPI = {
  // getLocationSuggestions: function(query) {
  //   return axios.get("/api/user/domain/location/q=" + query);
  // },
  getAddressSuggestions: function(query) {
    return axios.get(url + "/api/user/domain/address/q=" + query);
  },
  getPropertyInfo: function(propertyId) {
    return axios.get(url + "/api/user/domain/property/q=" + propertyId)
  },
  // getPropertyListings: function(query) {
  //   return axios.post(
  //     "https://api.domain.com.au/v1/listings/residential/_search",
  //     { 
  //       headers: {
  //         "X-Api-Key": ---
  //       },
  //       "listingType":"Sale",
  //       "propertyTypes":[
  //         "House",
  //         "NewApartments"
  //       ],
  //       "minBedrooms":3,
  //       "minBathrooms":2,
  //       "minCarspaces":1,
  //       "locations":[
  //         {
  //           "state":"NSW",
  //           "region":"",
  //           "area":"",
  //           "suburb":"Newtown",
  //           "postCode":"",
  //           "includeSurroundingSuburbs":false
  //         }
  //       ]
  //     }
  //   );  
  // }
};

export default domainAPI;