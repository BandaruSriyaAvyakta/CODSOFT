import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import bookImage from './book.jpg'; // Adjust the import path as necessary
import aboutImage from './about.jpg'; // Import the about image
import serviceImage1 from './service1.jpg'; // Import the service images
import serviceImage2 from './service2.jpg';
import serviceImage3 from './service3.jpg';

const contentText = `Unlock Your Imagination with eBooks!
Discover a world of endless possibilities through the pages of our eBooks. 
From gripping thrillers to heartwarming romances, there's something for everyone.
Start your reading adventure today and let your imagination soar!`;

const aboutUsText = `Founded in 2020, our eBooks app was born out of a passion for reading and a desire to make literature accessible to everyone. 
Our mission is to provide readers with a vast library of eBooks, from bestsellers to hidden gems. 
We believe in the power of stories to inspire and transform lives. 
With a user-friendly interface and personalized recommendations, our app aims to make the reading experience seamless and enjoyable. 
Join our community of book lovers and embark on a literary adventure with us.`;

const Content = () => {
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      {/* Image Background Section */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start', // Align to the left
          alignItems: 'center',
          minHeight: '50vh',
          backgroundImage: `url(${bookImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          position: 'relative',
          mb: 2, // Add margin-bottom to create the gap
        }}
      >
        <CardContent
          sx={{
            width: '80%', // Adjusting card width
            backgroundColor: 'rgba(0, 0, 0, 0)', // Add some transparency to the card background
            p: 2,
            color: 'white',
            textAlign: 'left',
          }}
        >
          <Typography variant="h3" component="h2" sx={{ mb: 2, color: 'white' }}>
            Explore Endless Worlds: Dive into eBooks!
          </Typography>
          <Typography variant="body1" sx={{ color: 'white' }}>
            {contentText.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </Typography>
          {/* Continue reading line */}
          <Typography
            variant="body1"
            sx={{
              color: 'blue',
              textDecoration: 'underline',
              position: 'absolute',
              bottom: '20px', // Adjust the position as needed
            }}
          >
            Continue reading
          </Typography>
        </CardContent>
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '0.5cm', // Gap of 0.5 cm
          gap: '16px', // Adds a consistent gap between cards
        }}
      >
        <Box sx={{ backgroundColor: 'lightcyan', p: 1 }}>
          <Card sx={{ width: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{ display: 'flex', alignItems: 'center' }}>
                <BookIcon sx={{ mr: 1 }} />
                Discover New Releases
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stay updated with the latest eBook releases.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ backgroundColor: 'lightcyan', p: 1 }}>
          <Card sx={{ width: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{ display: 'flex', alignItems: 'center' }}>
                <PeopleIcon sx={{ mr: 1 }} />
                Join Our Community
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Connect with fellow readers and share your thoughts.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ backgroundColor: 'lightcyan', p: 1 }}>
          <Card sx={{ width: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{ display: 'flex', alignItems: 'center' }}>
                <StarIcon sx={{ mr: 1 }} />
                Personalized Recommendations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get book suggestions tailored to your preferences.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* About Us Section */}
      <Box sx={{ mt: '1cm', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'left', flex: 1 }}>
          <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="body1">
            {aboutUsText.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'blue',
              textDecoration: 'underline',
              mt: 1, // Add some margin-top for spacing
            }}
          >
            Read More
          </Typography>
        </Box>
        <Box sx={{ ml: 2 }}>
          <img src={aboutImage} alt="About Us" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
      </Box>

      {/* Our Services Section */}
      <Box sx={{ mt: '1cm' }}>
        <Typography variant="h4" component="h3" sx={{ mb: 2, textAlign: 'left' }}>
          Our Services
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <Card sx={{ width: '100%', textAlign: 'center' }}>
            <img src={serviceImage1} alt="Service 1" style={{ width: '100%', height: 'auto' }} />
            <CardContent>
              <Typography variant="h6" component="h4">
                Extensive Library
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', textAlign: 'center' }}>
            <img src={serviceImage2} alt="Service 2" style={{ width: '100%', height: 'auto' }} />
            <CardContent>
              <Typography variant="h6" component="h4">
                Seamless Experience
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', textAlign: 'center' }}>
            <img src={serviceImage3} alt="Service 3" style={{ width: '100%', height: 'auto' }} />
            <CardContent>
              <Typography variant="h6" component="h4">
                Personalized Recommendations
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      {/* Archives Section */}
  <Box sx={{ flex: '1' }}>
    <Typography variant="h4" component="h3" sx={{ mb: 2, textAlign: 'left', color: 'black' }}>
      Archives
    </Typography>
    <Typography variant="body1" sx={{ color: 'blue', textDecoration: 'underline', textAlign: 'left' }}>
      March 2020<br />
      February 2020<br />
      January 2020<br />
      November 1999<br />
      October 1999<br />
      September 1999<br />
      August 1999<br />
      July 1999<br />
      June 1999<br />
      May 1999<br />
      April 1999
    </Typography>
  </Box>

</Box>
  );
}

export default Content;
