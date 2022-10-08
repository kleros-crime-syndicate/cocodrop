import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";

import Select from 'react-select'
import strategies from "../strategies";

const StrategyDropdown: React.FC<{ strategyId: number }> = ({ strategyId }) => {
  // todo turn the strategies into options
  // like this https://react-select.com/home
  return <Select options={strategies}/>;
};

const Strategy: React.FC = () => {
  // right now we don't use params. so this is "simple"

  return null;
};

const NewAirdrop: React.FC = () => {
  const { chainId } = useWeb3React();
  const [strategyId, setStrategyId] = useState<number>(0);
  return (
    <div>
      <StrategyDropdown />
    </div>
  );
};

export default NewAirdrop;
