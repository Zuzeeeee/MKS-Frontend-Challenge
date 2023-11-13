interface BodyProps {
  children?: React.ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return <p>{children}</p>;
};
