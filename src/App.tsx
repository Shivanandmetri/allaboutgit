import React from "react";

type Props = {
  name: string;
  age: number;
};

// interface Props1 {
//   name: string;
//   age: number;
// }

const App: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      Name:{name}
      <br />
      Age:{age}
    </div>
  );
};

export default App;
