import React, { useState, useEffect } from 'react';
import {getCollectionEntry, getSingleType} from '../../helpers/strapiHelper';
import Render from './Render';

const Page = () => {
  const [content, setContent] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);

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

  useEffect(() => {
    getSingleType('contact-info')
      .then(response => {
        let data = response?.data?.attributes;
        setContactInfo(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main>
      {content && content?.content.map((item, index) => 
        <Render key={index} block={item} contactInfo={contactInfo} />
      )}
    </main>
  );
};

export default Page;
