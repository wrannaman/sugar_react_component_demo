import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'center' }}>
        <a href="https://ligit.dev">
          <img src="https://s3.us-west-1.wasabisys.com/public.sugarkubes/ligit_logo.png" style={{ width: 100}} />
        </a>
        <a href="https://sugarkubes.io">
          <img src="https://s3.us-west-1.wasabisys.com/public.sugarkubes/logo.png" style={{ width: 200, marginTop: 15 }} />
        </a>
      </div>
    );
  }
}
