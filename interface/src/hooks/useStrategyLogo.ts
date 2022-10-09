import useSWRImmutable from "swr/immutable";

export const useStrategyLogo = (uri: string) => {
  return useSWRImmutable(
    uri,
    async () => {
      return (
        fetch(uri)
          .then((res) => res.blob())
          .then(imageBlob => {
            return URL.createObjectURL(imageBlob);
          })
      );
    }
  );
};
