import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const HeroSider = () => {
  const slides = [
    {
      img: 'https://media1.thrillophilia.com/filestore/454a9me8mqzvf2xkr00bu8p1ljc5_2022-03-06.jpg?h=441&w=auto&dpr=1.25',
      title: 'Experience the Dinosaurs!',
      description: 'Get up close with life-sized animatronic dinosaurs from various eras.'
    },
    {
      img: 'https://media1.thrillophilia.com/filestore/qdee2rwrkui1l6ubvnpf98hxvya4_IMG-20190709-WA0009.jpg?h=441&w=auto&dpr=1.25',
      title: 'Splash into the Water Park!',
      description: 'Enjoy water slides, wave pools, and rain dance areas for all ages.'
    },
    {
      img: 'https://media1.thrillophilia.com/filestore/idxr2epxji9elrbzbx5a3lomwmho_77429100_2548181701966871_922305868463079424_o.jpg?h=441&w=auto&dpr=1.25',
      title: 'Thrill at the Adventure Zone!',
      description: 'Challenge yourself with rope courses, zip lines, and obstacle courses.'
    },
    {
      img: 'https://media1.thrillophilia.com/filestore/o9egsbmlweltywm9q5cytfg040xh_DW3.png?h=441&w=auto&dpr=1.25',
      title: 'Fun at the Playground!',
      description: 'Have a blast with trampolines, slides, swings, and more.'
    },
    {
      img: 'https://media1.thrillophilia.com/filestore/a25g3vcn24r8yf5eymkwbvi5bzqg_2019-07-07.jpg?h=441&w=auto&dpr=1.25',
      title: 'Delicious Food Awaits!',
      description: 'Relish a variety of delicious meals and snacks at our food court.'
    }
  ];

  return (
    <div className="dino-world ">
      <Carousel fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.img}
              alt={`Slide ${index}`}
            />
            <Carousel.Caption className="text-right-center">
              <h2 className="slide-text animated-text">{slide.title}</h2>
              <p className="description-text animated-text">{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSider;
