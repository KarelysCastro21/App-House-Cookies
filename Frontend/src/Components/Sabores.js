import React, { useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../hojas-estilo/sabores.css'; 

const Sabores = ({ image, description, onClick, isExpanded}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  useEffect(() => {
    setExpanded(isExpanded);
  }, [isExpanded]);

  const handleExpandClick = () => {
    onClick();
  };

  return (
    <Card className= {`sabores-card ${isExpanded ? 'expanded' : ''}`}> 
      <CardMedia
        component="img"
        height="140"
        image={image}
        className={`sabores-image ${isExpanded ? 'expanded' : ''}`}
        onClick={handleExpandClick}
        
      />
      {expanded && (
        <CardContent className="sabores-description">
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default Sabores;