import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventDuration, formatEventStart } from 'utils';
import { iconSize } from 'constans';
import { Card, EventName, EventInfo, Chip } from './EventCard.styled';

export const EventCard = ({ name, location, speaker, type, start, end }) => {
  const formatedStartTime = formatEventStart(start);
  const formatedEventDuration = formatEventDuration(start, end);

  return (
    <Card>
      <EventName>{name}</EventName>
      <EventInfo>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </EventInfo>
      <EventInfo>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </EventInfo>
      <EventInfo>
        <FaCalendarAlt size={iconSize.sm} />
        {formatedStartTime}
      </EventInfo>
      <EventInfo>
        <FaClock size={iconSize.sm} />
        {formatedEventDuration}
      </EventInfo>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
