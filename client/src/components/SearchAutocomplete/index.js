// import React, { useState } from "react";
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'
// import domainAPI from "../../utils/domainAPI";

// export default function SearchAutocomplete(props) {
//   const [suggestions, setSuggestions] = useState([]);

//   const handleOnSearch = (string, results) => {
//     // onSearch will have as the first callback parameter
//     // the string searched and for the second the results.
//     console.log(string, results)
//     domainAPI.getAddressSuggestions(string)
//       .then(res => {
//         console.log(res);
//         setSuggestions(res.data.splice(0, 5));
//       })
//       .catch(err => console.log(err))
//   }

//   const handleOnHover = (result) => {
//     // the item hovered
//     console.log(result)
//   }

//   const handleOnFocus = () => {
//     console.log('Focused')
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div style={{ width: "100%" }}>
//           <ReactSearchAutocomplete
//             items={suggestions}
//             onSearch={handleOnSearch}
//             onHover={handleOnHover}
//             onSelect={props.handleOnSelect}
//             onFocus={handleOnFocus}
//             autoFocus
//             fuseOptions={{
//                 shouldSort: true,
//                 threshold: 0.6,
//                 location: 0,
//                 distance: 100,
//                 maxPatternLength: 32,
//                 minMatchCharLength: 1,
//                 keys: [
//                   "address",
//                 ],
//               }}
//             resultStringKeyName="address"
//             styling={{
//               position: "relative",
//               zIndex: 10
//             }}
//             // onChange={props.onChange}
//           />
//         </div>
//       </header>
//     </div>
//   )
// };