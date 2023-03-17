interface IDetailsProps {
  testId?: string;
}

export function Details({ testId = "" }: IDetailsProps): JSX.Element {
  return <div data-testid={`details-${testId}`}>Home</div>;
}
