import React from "react";
import cn from "classnames";
import Select, { StylesConfig } from "react-select";
import strategies from "strategies";
import Input from "components/Input";
import { isUndefined } from "utils/isUndefined";

const selectStyle: StylesConfig = {
  control: (styles) => ({ ...styles, minHeight: "60px" }),
};

type Option = {
  value: number;
  label: string;
  description: string;
  logoUri: string;
};

const SelectStrategy: React.FC<{
  setStrategyId: (value: number | undefined) => void;
  setParameters: (params: any[] | undefined) => void;
  parameters?: any[];
  strategyId?: number;
}> = ({ strategyId, setStrategyId, parameters, setParameters }) => {
  const options = strategies.map(({ name, logoUri, description }, i) => ({
    value: i,
    label: name,
    description,
    logoUri,
  }));
  const params = Array(strategyId ? strategies[strategyId].parameters.length : 0);
  return (
    <>
      <div>
        <h1 className="font-display text-white text-2xl">
          Strategy
        </h1>
        <Select
          styles={selectStyle}
          {...{ options }}
          formatOptionLabel={OptionFormat}
          value={strategyId ? options[strategyId] : undefined}
          onChange={(e) => setStrategyId(e?.value)}
          isSearchable={false}
          placeholder="Select strategy..."
        />
      </div>
      { !isUndefined(strategyId) && strategies[strategyId].parameters.map((parameter, i) => (
        <div key={i}>
          <h1 className="font-display text-white text-2xl">
            {parameter}
          </h1>
          <Input
            value={parameters?.at(i)}
            onChange={(e) => {
              params[i] = e.target.value;
              setParameters(params);
            }}
          />
        </div>
      )) }
    </>
  );
};

const OptionFormat: (option: Option) => React.ReactNode = ({ label, description, logoUri }) => (
  <div className="flex items-center gap-2 h-[50px]">
    <img src={logoUri} className={cn("h-full")} />
    <div>
      <h1 className="text-xl font-bold">{label}</h1>
      <p>{description}</p>
    </div>
  </div>
);

export default SelectStrategy;
