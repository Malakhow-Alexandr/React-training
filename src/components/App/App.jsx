import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from '../EventBoard/EventBoard';
import events from '../../upcoming-events.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={events} />
    </Container>
  );
};
