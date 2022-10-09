import React from "react";
import cn from "classnames";
import Select, {StylesConfig} from 'react-select'
import strategies from "strategies";

const selectStyle: StylesConfig = {
  control: (styles) => ({ ...styles, minHeight: "60px" })
};

type Option = {
  value: number;
  label: string;
  description: string;
  logoUri: string;
};

const SelectStrategy: React.FC<{
  setStrategyId: (value: number | undefined) => void
  strategyId?: number,
}> = ({ strategyId, setStrategyId }) => {
  const options = strategies.map(({ name, logoUri, description }, i) => (
    { value: i, label: name, description, logoUri }
  ));
  return (
    <Select
      styles={selectStyle} 
      {...{ options }}
      formatOptionLabel={OptionFormat}
      value={strategyId ? options[strategyId] : undefined}
      onChange={(e) => setStrategyId(e?.value)}
      isSearchable={false}
      placeholder="Select strategy..."
    />
  );
};

const OptionFormat: (option: Option) => React.ReactNode = ({
  label,
  description,
  logoUri,
}) => (
  <div className="flex items-center gap-2 h-[50px]">
    <img
      src={logoUri}
      className={cn(
        "h-full"
      )}
    />
    <div>
      <h1 className="text-xl font-bold">{label}</h1>
      <p>{description}</p>
    </div>
  </div>
);

const Strategy: React.FC = () => {
  // right now we don't use params. so this is "simple"

  return null;
};

export default SelectStrategy;
