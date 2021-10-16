import React from 'react';

//components
import Button from '../components/button/button.component';
import Heading from '../components/heading/heading.component';
import Text from '../components/text/text.component';

//packages
import { Link } from 'react-router-dom'

const DetailsPage = ({ result }) => {
  const { description, language, name, owner, stargazers_count } = result;
  
  return (
    <div>
      <Heading level={1}>{name}</Heading>
      <Text>{`Owner: ${owner.login}`}</Text>
      <Text>{description}</Text>
      <Text>{language}</Text>
      <Text>{`Stars: ${stargazers_count}`}</Text>
      <Link to={'/'} >
        <Button label="Back" />
      </Link>
    </div>
  )
}

export default DetailsPage;