import React, { useState, useEffect } from 'react';
import {getCollectionEntry} from '../../helpers/strapiHelper';
import Render from './Render'; // Adjust the import according to your project structure

const Page = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    getCollectionEntry('pages', '1')
      .then(response => {
        let data = response?.data?.attributes;
        setContent(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  console.log(content)
  return (
    <main>
      {content && content?.content.map((item, index) => 
        <Render key={index} block={item} />
      )}
    </main>
  );
};

export default Page;
