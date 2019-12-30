import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";
// client id 7090975415-1g02fopn6th8ht264frhnnt48s6583i4.apps.googleusercontent.com
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" exact component={StreamCreate} />
          <Route path="/stream/edit/:id" exact component={StreamEdit} />
          <Route path="/stream/delete/:id" exact component={StreamDelete} />
          <Route path="/stream/show/:id" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
