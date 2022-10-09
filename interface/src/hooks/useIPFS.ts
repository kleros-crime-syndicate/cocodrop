import axios from "axios";
import useSWR from "swr";

interface useIPFSConfig {
  suspense?: boolean;
}

const ipfsFetcher = async (ipfsURI: string) => {
  console.log({ ipfsURI });
  return (await axios.get(`https://ipfs.kleros.io${ipfsURI}`)).data;
};

const useIPFS = <T>(uri?: string | null | false, { suspense }: useIPFSConfig = {}): [T | undefined, Error] => {
  const { data, error } = useSWR(uri || null, ipfsFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    suspense,
  });

  return [data, error];
};

export default useIPFS;
