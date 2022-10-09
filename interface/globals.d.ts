declare module "*.svg" {
  const content: React.FC<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.jpg" {
  const uri: string;
  export default uri;
}

declare module "*.jpeg" {
  const uri: string;
  export default uri;
}

declare module "*.png" {
  const uri: string;
  export default uri;
}

declare module "*.webp" {
  const uri: string;
  export default uri;
}
