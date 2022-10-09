import React, { useState } from "react";
import cn from "classnames";
import Button from "components/Button";
import strategies from "strategies";
import BackgroundCreate from "assets/background-create.jpg";
import Preview from "./Preview";
import Form, { IFormInfo } from "./Form";
import generateMerkle, { Merkle } from "strategies/generateMerkle";
import publishMerkle, { Metadata } from "strategies/publishMerkle";
import { useCocodropContract, useERC20Contract } from "hooks/useContract";

const Create: React.FC = () => {
  const [formInfo, setFormInfo] = useState<IFormInfo>({
    title: undefined,
    description: undefined,
    strategyId: undefined,
    tokenAddress: undefined,
    totalAmount: undefined,
    parameters: [],
    tokenAddressHasError: false,
    totalAmountHasError: false,
  });
  const [recipients, setRecipients] = useState<number>();
  const [merkleRoot, setMerkleRoot] = useState<string>();
  const [contentId, setContentId] = useState<string>();
  const [strategyDisplayName, setStrategyDisplayName] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const ERC20Contract = useERC20Contract(
    formInfo.tokenAddressHasError ? undefined : formInfo.tokenAddress
  );
  const cocodrop = useCocodropContract();
  return (
    <div
      className={cn(
        "bg-cover",
        "bg-no-repeat",
        "bg-center",
        "h-screen",
        "flex"
      )}
      style={{ backgroundImage: `url('${BackgroundCreate}')` }}
    >
      <div className="flex flex-col gap-8 m-auto w-1/3 p-10 bg-white/30 rounded-2xl">
        <h1 className="font-display text-white text-6xl">
          Create AirDrop
        </h1>
        {
          previewMode
            ? <>
                <Preview
                  strategy={strategyDisplayName}
                  totalAmount={formInfo.totalAmount?.toString()}
                  {...{ recipients }}
                />
                <div className="flex justify-between">
                  <Button
                    text="Back"
                    onClick={() => setPreviewMode(false)}
                  />
                  <Button
                    text="Deploy"
                    onClick={async () => {
                      try{
                        setIsLoading(true);
                        if (
                          cocodrop &&
                          formInfo.totalAmount &&
                          formInfo.tokenAddress &&
                          formInfo.strategyId &&
                          formInfo.title &&
                          formInfo.description &&
                          merkleRoot
                        ) {
                          await ERC20Contract
                            ?.approve(cocodrop.address, formInfo.totalAmount)
                            .then(async (tx) => await tx.wait())
                            .then(async () => await cocodrop
                              .createAirdrop(
                                merkleRoot,
                                formInfo.tokenAddress,
                                formInfo.totalAmount,
                                contentId
                              )
                              .then(async (tx) => await tx.wait()));
                        }
                      } catch {
                      } finally {
                        setIsLoading(false);
                      }
                    }}
                    {...{ isLoading }}
                  />
                </div>
              </>
            : <>
                <Form {...{ formInfo, setFormInfo }} />
                <Button
                  text="Preview"
                  onClick={async () => {
                    try{
                      setIsLoading(true);
                      if (cocodrop && formInfo.totalAmount && formInfo.tokenAddress && formInfo.strategyId && formInfo.title && formInfo.description) {
                        const mt: Merkle = await generateMerkle(formInfo.totalAmount, strategies[formInfo.strategyId], formInfo.parameters);
                        setRecipients(Object.keys(mt.claims).length);
                        setMerkleRoot(mt.root);
                        const meta: Metadata = {
                            title: formInfo.title,
                            description: formInfo.description,
                            strategy: await strategies[formInfo.strategyId].getDisplayName(formInfo.parameters)
                        };
                        setStrategyDisplayName(meta.strategy);
                        setContentId(await publishMerkle(mt, meta));
                        setPreviewMode(true);
                      }
                    } catch {
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                  {...{ isLoading }}
                />
              </>
        }
      </div>
    </div>
  );
};

export default Create;
