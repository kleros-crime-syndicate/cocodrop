import fetch from "node-fetch";

/**
 * Send file to IPFS network via the Kleros IPFS node
 * @param {string} fileName - The name that will be used to store the file. This is useful to preserve extension type.
 * @param {ArrayBuffer} data - The raw data from the file to upload.
 * @return {string} URL of the stored item.
 */
 const ipfsPublish = async (fileName: string, data:ArrayBuffer): Promise<string> => {
    const buffer: Buffer = await Buffer.from(data)
    return await ipfsPublishBuffer(fileName, buffer);
}

const ipfsPublishBuffer = async (fileName: string, buffer: Buffer): Promise<string> => {
    const response = await fetch('https://ipfs.kleros.io/add', {
        method: 'POST',
        body: JSON.stringify({
            fileName,
            buffer
        }),
        headers: {
            'content-type': 'application/json'
        }
    });

    const body:any = await response.json();

    return `/ipfs/${body.data[1].hash}${body.data[0].path}`
}

export {ipfsPublish, ipfsPublishBuffer};