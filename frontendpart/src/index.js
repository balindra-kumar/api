import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink  } from '@apollo/client';
import {BrowserRouter} from 'react-router-dom'
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('jwtToken');
  // Return the headers to the context so httpLink can read them
  console.log("index page token", token)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '', // Send the token in the Authorization header
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain the authLink with the httpLink
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client = {client}>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
