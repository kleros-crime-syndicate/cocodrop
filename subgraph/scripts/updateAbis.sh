#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

networksJson='{}'

for n in mumbai goerli gnosischain polygon
do 
    for f in $(ls -1 $SCRIPT_DIR/../../contracts/deployments/${n}/*.json)
    do
        mkdir -p abis/${n} 
        cat $f | jq '. | {address: .address, abi: .abi}' > $SCRIPT_DIR/../abis/${n}/$(basename $f)

        chainId="$(cat $SCRIPT_DIR/../../contracts/deployments/${n}/.chainId)"
        address="$(cat $f | jq -r '.address')"
        blockNumber="$(cat $f | jq -r '.receipt.blockNumber')"
        transactionHash="$(cat $f | jq -r '.transactionHash')"
        
        networksJson=$(echo "$networksJson" | jq \
            --arg c $chainId \
            --arg a $address \
            --arg bn $blockNumber \
            --arg tx $transactionHash \
            '.[$c].address = $a | .[$c].startBlock = $bn | .[$c].transactionHash = $tx')
    done
done 

echo "$networksJson" | jq '{ "Cocodrop": . }' > $SCRIPT_DIR/../networks.json