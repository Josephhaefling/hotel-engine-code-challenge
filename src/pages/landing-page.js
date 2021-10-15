import React, { useEffect, useState } from 'react';

//api calls
import { getRetros } from '../api/index';

//components
import Button from '../components/button/button.component';
import Card from '../components/card/card.component';
import Heading from '../components/heading/heading.component';
import Input from '../components/input/input.components';
import Text from '../components/text/text.component';
import Results from '../components/results/results.component';

const LandingPage = () => {
  const [results, setResults] = useState([]);

  const thing = async () => {
    const data = await getRetros() 
    console.log(data?.data?.items)

    setResults(data?.data?.items)
  }

  useEffect(() => {
    thing()
  }, [])

  console.log('results', results);
  return (
    <div>
      <Card>
        <Card.Header>
          <Heading level={1}>Hi I am a heading</Heading>
        </Card.Header>
        <Card.Body>
          <Text>Hi I am some random text</Text>
          <Input />
        </Card.Body>
        <Card.Footer>
          <Button label="Search" />
        </Card.Footer>
      </Card>
      <Results searchResults={results} />
    </div>
  )
};

export default LandingPage;