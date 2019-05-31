import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from 'store';
import Main from 'components/Main';
import App from 'components/App';
import FormPage from 'components/FormPage';

const Root = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route exact path="/" component={Main} />
        <Route exact path="/list" component={App} />
        <Route path="/list/form" component={FormPage}/>
      </Provider>
    </BrowserRouter>
  );
};

export default Root;