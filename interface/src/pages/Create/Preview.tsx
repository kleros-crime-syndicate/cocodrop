import React from "react";

const Preview: React.FC<{
  recipients?: number,
  totalAmount?: string,
  strategy?: string
}> = ({ recipients, totalAmount, strategy }) => (
  <div className="flex flex-col gap-8">
    <div className="text-white text-xl font-bold">
      <h1 className="font-display text-white text-3xl">
        Total number of recipients
      </h1>
      {recipients}
    </div>
    <div className="text-white text-xl font-bold">
      <h1 className="font-display text-white text-3xl">
        Total amount distributed
      </h1>
      {totalAmount}
    </div>
    <div className="text-white text-xl font-bold">
      <h1 className="font-display text-white text-3xl">
        Strategy
      </h1>
      {strategy}
    </div>
  </div>
);

export default Preview;
