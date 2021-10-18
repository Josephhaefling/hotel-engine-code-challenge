import React from 'react';

//styles
import Styled from './detials-page.styled';

//components
import Button from '../../components/button/button.component';
import Card from '../../components/card/card.component';
import Heading from '../../components/heading/heading.component';
import Text from '../../components/text/text.component';

//packages
import { Link } from 'react-router-dom';

const DetailsPage = ({ result }) => {
  const { description, language, name, owner, stargazers_count } = result;
  
  return (
    <Styled.DetailPage>
      <Styled.Card>
        <Card.Header>
          <Heading level={1}>{name}</Heading>
        </Card.Header>
        <Card.Body>
          <Text>{`Owner: ${owner.login}`}</Text>
          <Text>{description}</Text>
          <Text>{language}</Text>
          <Text>{`Stars: ${stargazers_count}`}</Text>
        </Card.Body>
        <Styled.CardFooter>
          <Link to={'/'} >
            <Button label="Back" size="large" />
          </Link>
        </Styled.CardFooter>
      </Styled.Card>
    </Styled.DetailPage>
  );
};

export default DetailsPage;