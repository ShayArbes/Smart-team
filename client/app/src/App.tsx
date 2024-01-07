import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./features/global/layout/Layout";
import { CssBaseline } from "@mui/material";
import Home from "./features/global/pages/Home";
import DealInfo from "./features/acquisitions/pages/DealInfo";
import { IndexContextProvider } from "./features/acquisitions/Context/ContextProvider";
import Deals from "./features/acquisitions/pages/Deals";
import HoverableDropdown from "./features/acquisitions/pages/HoverableDropdown";
// import DealInfo from "./features/";


function App() {
  return (
    <>
      <CssBaseline />
      <IndexContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/t" element={<HoverableDropdown />} />
            
            <Route path="/home" element={<DealInfo/>} />
            
            <Route path="/a" element={< Deals />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </IndexContextProvider>
    </>
  );
}

export default App;
// import 'symbol-observable';
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CssBaseline } from "@mui/material";
// import Layout from "./pages/Layout";
// import Register from "./pages/auth/Register";
// import Login from "./pages/auth/Login";
// import Home from "./pages/Home";
// import { CustomersTable } from "./components/CustomersTable";
// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
// import { createClient } from 'graphql-ws';
// import { split, HttpLink } from '@apollo/client';
// import { getMainDefinition } from '@apollo/client/utilities';

// const httpLink = new HttpLink({
//   uri: 'http://localhost:8080/graphql'
// });


// const wsLink = new GraphQLWsLink(createClient({
//   url: 'ws://localhost:8080/graphql',
// }));


// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );
// export const client = new ApolloClient({
//   link: splitLink,
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <>
//       <CssBaseline />
//       <ApolloProvider client={client}>
//         <BrowserRouter basename="/oms">
//           <Routes>
//             <Route element={<Layout />}>
//               <Route path="/" element={<Login />} />
//               <Route path="/home" element={<Home />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/a" element={<CustomersTable />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </ApolloProvider>
//     </>
//   );
// }

// export default App;
