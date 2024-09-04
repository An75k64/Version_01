import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Input, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import Card from '../Card/Card.jsx';

function Opening() {
    const [cards, setCards] = useState([]);
    const [titleQuery, setTitleQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        axios.get('http://localhost:5000/api/cards/cards')
            .then(response => {
                setCards(response.data);
                setFilteredCards(response.data); // Initially display all cards
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const handleSearch = () => {
        const filtered = cards.filter(card =>
            card.title.toLowerCase().includes(titleQuery.toLowerCase()) &&
            card.location.toLowerCase().includes(locationQuery.toLowerCase())
        );
        setFilteredCards(filtered);
    };

    const headingFontSize = useBreakpointValue({ base: '2xl', md: '6xl' });
    const searchInputWidth = useBreakpointValue({ base: 'full', md: '400px' });
    const searchButtonWidth = useBreakpointValue({ base: 'full', md: '200px' });

    return (
        <Box id="current-opening" p={4} mt={120}>
            <Box mb={8} textAlign="center">
                <Heading
                    as="h1"
                    fontSize={headingFontSize}
                    fontWeight="bold"
                    textAlign="center"
                    color="blue.400"
                    fontFamily={"ClashDisplay"}
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
                
                    >
                    Current Openings
                </Heading>

            </Box>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="center"
                gap={4}
                mb={8}
            >
                <FaSearch fontSize="25px" />
                <Input
                    placeholder="Search job name"
                    value={titleQuery}
                    onChange={event => setTitleQuery(event.target.value)}
                    width={searchInputWidth}
                    borderRadius="20px"
                    bg="aliceblue"
                    color="black"
                />
                <FaLocationDot fontSize="25px" />
                <Input
                    placeholder="Location"
                    value={locationQuery}
                    onChange={event => setLocationQuery(event.target.value)}
                    width={searchInputWidth}
                    borderRadius="20px"
                    bg="aliceblue"
                    color="black"
                />
                <Button
                    onClick={handleSearch}
                    bg="rgb(226, 55, 112)"
                    color="white"
                    borderRadius="20px"
                    width={searchButtonWidth}
                    fontWeight="600"
                    _hover={{ bg: 'rgb(177, 13, 68)', transition: '1s ease-out' }}
                >
                    Search
                </Button>
            </Flex>
            <Heading as="h2" fontSize="25px" fontWeight="bold" mb={6}>
                Recommendation
            </Heading>
            <Flex
                wrap="wrap"
                gap={6}
                justify="center"
            >
                {filteredCards.map(card => (
                    <Card
                    key={card.jobId} // Ensure this is a unique identifier
                    title={card.title}
                    location={card.location}
                    salary={card.salary}
                    experience={card.experience}
                    jobDescription={card.jobDescription}
                    jobId={card.jobId} // Pass jobId if needed
                    department={card.department}
                    roleCategory={card.roleCategory}
                    employmentType={card.employmentType}
                    eductaion={card.eductaion}
                    englishLevel={card.englishLevel}
                    gender={card.gender}
                    />
                ))}
            </Flex>
        </Box>
    );
}

export default Opening;
