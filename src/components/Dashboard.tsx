import React from "react";

type Props = {
  name: string;
  age: number;
};

const Dashboard: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      Name:{name}
      <br />
      Age:{age}
    </div>
  );
};

export default Dashboard;
