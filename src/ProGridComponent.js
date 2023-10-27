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
             <Card.Header as="h5" style={{backgroundColor:"mediumslateblue", color:"white"}}>{item.title}</Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    {item.duration.startYear} - {item.duration.endYear}
                </Card.Subtitle>
                <Card.Text>
                    {item.authors}
                </Card.Text>
                <Card.Text>
                    {item.fundingAgency}
                </Card.Text>
                <Card.Text as="h6">
                    {item.fundingAmount}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
   </div>
  );
}

export default GridComponent;