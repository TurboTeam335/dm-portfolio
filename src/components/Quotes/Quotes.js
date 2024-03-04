import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Quotes.css';

const quoteData = [
  {
    quote:
      '“Daniel Mascali is one of the most proficient and determined individuals I’ve worked with. He completes every project he’s given with skill, and detailed accuracy. He’s communicative and always punctual and I can’t wait to work with him again on many more projects to come.”',
    name: 'David Loy',
    role: 'Front Of House - Kane Brown',
    link: 'https://www.linkedin.com/in/david-loy-695b0a95/',
  },
  {
    quote:
      '"Daniel’s attention to detail, work ethic and collaborative nature help him to be a fantastic part of any team"',
    name: 'Evan Pierri',
    role: 'Tour Manager - Carly Pearce',
    link: 'https://www.linkedin.com/in/evanpierri/',
  },
  {
    quote:
      '"Daniel’s attention to detail, work ethic and collaborative nature help him to be a fantastic part of any team"',
    name: 'Martha Earls',
    role: 'Owner - Neon Coast',
    link: 'https://www.linkedin.com/in/marthaearls/',
  },
  {
    quote:
      '"Daniel Mascali was the most professional employee that I had in my time in North Carolina. He was always prepared when it was time to work and his readiness pushed others to step up their preparation as well. He was never afraid to lead by example and I wish I could have him back."',
    name: 'Benton James',
    role: 'CEO - icons + giants',
    link: 'https://www.linkedin.com/in/bentonjames/',
  },
  {
    quote:
      '"Daniel’s attention to detail, work ethic and collaborative nature help him to be a fantastic part of any team"',
    name: 'Mark Oglesby',
    role: 'Tour Manager - Lady A',
    link: 'https://www.linkedin.com/in/mark-oglesby-56134418/',
  },
  {
    quote:
      '"Every once in a while you come across an individual who brings a reliability to your team that is unmatched. Daniel Mascali is the very embodiment of that. Daniel has worked alongside of me in an enormous amount of capacities for several years; and always delivered more than what was asked. He has learned and perfected multiple different skill sets making him a value that has kept him in demand across the entertainment industry. To say Daniel is one of a kind is an understatement; I’ve yet to meet or work with anybody who has brought the type of reliability that Daniel brings."',
    name: 'Mark Siegel',
    role: 'Song Writer / Tour Manager',
    link: 'https://www.marksiegelofficial.com/',
  },
];

function Quotes({ quoteIndex }) {
  const quoteItem = quoteData[quoteIndex];

  const { quote, name, link, role } = quoteItem;

  const handleButtonClick = () => {
    window.open(link, '_blank');
  };

  return (
    <Card className='quote-card' style={{ width: 'auto', margin: '3em auto' }}>
      <Card.Body className='quote-content'>
        <Card.Text className='quote-text'>{quote}</Card.Text>
        <Button
          className='btn-custom'
          variant='custom'
          onClick={handleButtonClick}
        >
          {/* Name and role inside the button */}
          <span className='button-text-content'>
            <span className='button-text-name'>{name}</span>
            <span className='button-text-role'>{role}</span>
          </span>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Quotes;
