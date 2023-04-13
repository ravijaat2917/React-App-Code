import React, { useState } from "react";
import User from "./User";
import Guest from "./Guest";
const App = (props) => {
  //   const isRegistered = props.consumer;
  //   if (isRegistered) {
  //     return (
  //       <>
  //         <h1>Conditional Rendering Page...</h1>
  //         <User />
  //       </>
  //     );
  //   }
  //   return (
  //     <>
  //       <h1>Conditional Rendering Page...</h1>
  //       <Guest />
  //     </>
  //   );

  // 2. Inline Conditional Example... && ||
  //   const primeMember = props.primeMember;
  //   return <>{primeMember && <User />}</>;

  // 3. If-Else statement Example...
  const [state, setState] = useState(false);

  const clickLogin = () => {
    setState(true);
  };
  const clickLogout = () => {
    setState(false);
  };

  let isLoggedin = state;

  //   if (isLoggedin) {
  //     const consumer = <User clickData={clickLogout} />;
  //     return consumer;
  //   }
  //   let consumer = <Guest clickData={clickLogin} />;
  //   return consumer;

  // 4. Inline If-Else with condition Operators...
  // return (
  //     <>
  //         {isLoggedin ? <User clickData={clickLogout} /> : <Guest clickData={clickLogin} />}
  //     </>
  // )

  // 5. IIFE -- It is used when we wants to add conditional rendering in return function ...
  return (
    <>
      {(() => {
        if (isLoggedin) {
          return <User clickData={clickLogout} />;
        }
        return <Guest clickData={clickLogin} />;
      })()}
    </>
  );
};
export default App;
