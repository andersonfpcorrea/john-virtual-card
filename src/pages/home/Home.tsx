interface IHomeProps {
  testId?: string;
}

export function Home({ testId = "" }: IHomeProps): JSX.Element {
  return <div data-testid={`home-${testId}`}>Home</div>;
}
