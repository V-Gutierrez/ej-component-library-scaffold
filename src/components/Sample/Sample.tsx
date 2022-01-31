import React from 'react';

export interface SampleProps {
  tester: string,
  color: string
}

export const Sample: React.FC<SampleProps> = ({ tester, color }) => {
  return (<>
    <h1 data-testid='sample__heading' style={{ color }}>Hello world, {tester}</h1>
    <section>
      <p>
        This template is just for sampling purposes and is not meant to be used in production.

        Please follow this template when writing new stories
      </p>
    </section>
  </>
  );
}
