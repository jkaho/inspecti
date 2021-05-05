import axios from "axios";
const url = "http://localhost:3001";

const API = {
  signUpUser: function(userData) {
    return axios.post(url + "/api/user/signup", userData);
  },
  logInUser: function(userData) {
    return axios.post(url + "/api/user/login", userData);
  },
  logOutUser: function() {
    return axios.get(url + "/api/user/logout");
  },
  getLocationSuggestions: function(query) {
    return axios.get(
      "https://api.domain.com.au/v1/listings/locations?terms=" + query + "&pageNumber=1&pageSize=10",
      { 
        headers: {
          "X-Api-Key": "key_dc635e3e95b67de404f3b44abbcc09e2"
        }
      }
    );
  },
  // getPropertyListings: function(query) {
  //   return axios.post(
  //     "https://api.domain.com.au/v1/listings/residential/_search",
  //     { 
  //       headers: {
  //         "X-Api-Key": "key_dc635e3e95b67de404f3b44abbcc09e2"
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

export default API;