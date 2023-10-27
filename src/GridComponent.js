import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';


const GridComponent = (props) => {

  const [localData, setLocalData] = useState(props.data);

  useEffect(() => {
    // Modify the local data as needed
    const modifiedData = localData.map(item => {
      // Your modification logic goes here
      return item;
    });
    setLocalData(modifiedData);
  }, [props.data]);

  return (
    <div style={{ display: 'flex', marginTop: '4%'}}>
        {localData.map((item, index) => (
            <Card style={{ width: '22rem', marginLeft: '5%' }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {item.year}
                </Card.Subtitle>
                <Card.Text>
                    {item.authors}
                </Card.Text>
                <Card.Text>
                    {item.conference}
                </Card.Text>
                <Card.Link href="#">View PDF</Card.Link>
              </Card.Body>
            </Card>
          ))}
   </div>
  );
}

export default GridComponent;