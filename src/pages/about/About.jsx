import React from 'react';
import './About.css';
import AboutImage from '../../assets/aboutus.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={AboutImage} alt="About Us" />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus fermentum elit, ac aliquam nisl fermentum a.
          Fusce hendrerit aliquam elit vel convallis. Curabitur at pharetra ligula, a condimentum tellus. Sed venenatis
          quam ac ultricies congue. Aliquam erat volutpat. Aliquam a feugiat enim. Fusce sollicitudin arcu id maximus
          accumsan. Donec condimentum posuere finibus. Duis semper sem a tortor condimentum tincidunt. Mauris sagittis
          lectus eu ante lobortis, a iaculis nibh pharetra. Suspendisse potenti. Nam id aliquet justo, at porttitor
          sapien. Curabitur euismod enim id eros aliquam consequat. Nunc maximus ligula in massa lobortis, vitae
          interdum lacus eleifend. Nullam sit amet ultricies enim. Curabitur dapibus viverra odio, in tincidunt nisl
          dapibus id. Ut eu tristique quam. Pellentesque auctor euismod pharetra. Aliquam tincidunt purus non libero
          lacinia, at tempor lorem hendrerit.
        </p>
      </div>
    </div>
  );
}

export default About;
