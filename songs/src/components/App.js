import React from "react";
import SongList from "./SongList";
import SongDetails from "./SongDetails";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="col eight wide">
          <SongDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
