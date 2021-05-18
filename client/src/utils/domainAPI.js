import axios from "axios";
const url = "http://localhost:3001";

const domainAPI = {
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
  // getLocationSuggestions: function(query) {
  //   return axios.get("/api/user/domain/location/q=" + query);
  // },
  getAddressSuggestions: function(query) {
    return axios.get("https://api.domain.com.au/v1/properties/_suggest?terms=" + query + "&channel=Residential",
      { 
        headers: {
          "X-Api-Key": "key_dc635e3e95b67de404f3b44abbcc09e2"
        }
      }
    );
  },
  // getAddressSuggestions: function(query) {
  //   axios.get("/api/user/domain/address/q=" + query)
  //     .then(result => {
  //       return result;
  //     })
  //     .catch(err => console.log(err))
  // },
  // getAddressSuggestions: function(query) {
  //   axios.get("/api/user/API_KEY")
  //     .then(result => {
  //       console.log(result.data)
  //       return axios.get("https://api.domain.com.au/v1/properties/_suggest?terms=" + query + "&channel=Residential",
  //       { 
  //         headers: {
  //           "X-Api-Key": result.data
  //         }
  //       }
  //     );
  //     })
  // },
  getPropertyInfo: function(propertyId) {
    return axios.get("https://api.domain.com.au/v1/properties/" + propertyId,
      { 
        headers: {
          "X-Api-Key": "key_dc635e3e95b67de404f3b44abbcc09e2"
        }
      }
    );
  }
  // getPropertyInfo: function(propertyId) {
  //   return axios.get("/api/user/domain/property/q=" + propertyId);
  // }
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

export default domainAPI;