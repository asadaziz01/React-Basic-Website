import React from 'react';
import Common from './Common';
import Fast from '../images/img1.PNG';

export default function About() {
  return (
    <>
      <Common name = 'Welcome to About Page' imgsrc = {Fast} visit = '/contact' btnName = 'Contact Now' />
    </>
  )
}
