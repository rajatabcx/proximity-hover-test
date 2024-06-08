import { useMotionValue, motion } from 'framer-motion';
import { useRef, useState } from 'react';

const moveRestrictionVertical = 25;
const moveRestrictionHorizontal = 25;

const data = {
  a: {
    name: 'Some gguy A',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      illum, debitis rem vero harum eos omnis tempore ipsa laborum perspiciatis
      asperiores ipsam inventore quam nesciunt ab eligendi sequi alias, fugit
      architecto cumque cum consectetur ipsum.`,
  },
  b: {
    name: 'Some gguy b',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      illum, debitis rem vero harum eos omnis tempore ipsa laborum perspiciatis
      asperiores ipsam inventore quam nesciunt ab eligendi sequi alias, fugit
      architecto cumque cum consectetur ipsum.`,
  },
  c: {
    name: 'Some gguy c',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      illum, debitis rem vero harum eos omnis tempore ipsa laborum perspiciatis
      asperiores ipsam inventore quam nesciunt ab eligendi sequi alias, fugit
      architecto cumque cum consectetur ipsum.`,
  },
  d: {
    name: 'Some gguy d',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      illum, debitis rem vero harum eos omnis tempore ipsa laborum perspiciatis
      asperiores ipsam inventore quam nesciunt ab eligendi sequi alias, fugit
      architecto cumque cum consectetur ipsum.`,
  },
  e: {
    name: 'Some gguy E',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      illum, debitis rem vero harum eos omnis tempore ipsa laborum perspiciatis
      asperiores ipsam inventore quam nesciunt ab eligendi sequi alias, fugit
      architecto cumque cum consectetur ipsum.`,
  },
  f: {
    name: 'Some gguy F',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      illum, debitis rem vero harum eos omnis tempore ipsa laborum perspiciatis
      asperiores ipsam inventore quam nesciunt ab eligendi sequi alias, fugit
      architecto cumque cum consectetur ipsum.`,
  },
};

const val = {
  name: 'Karya Default Text',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
  illum, debitis rem vero harum eos omnis tempore ipsa laborum perspiciatis
  asperiores ipsam inventore quam nesciunt ab eligendi sequi alias, fugit
  architecto cumque cum consectetur ipsum.`,
};

function App() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ref = useRef<HTMLDivElement>(null);

  const [state, setState] = useState(val);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      const mousePositionHorizontalFromMiddle =
        (e.clientX + scrollX) / rect.width;
      const mousePositionVerticalFromMiddle =
        (e.clientY - rect.top) / rect.height;

      const objectX = Math.floor(
        -moveRestrictionHorizontal / 2 +
          moveRestrictionHorizontal * mousePositionHorizontalFromMiddle
      );

      const objectY = Math.floor(
        -moveRestrictionVertical / 2 +
          moveRestrictionVertical * mousePositionVerticalFromMiddle
      );

      x.set(objectX);
      y.set(objectY);
    }
  };

  return (
    <>
      <div className='container top'>This is the top part</div>
      <div className='container main' ref={ref} onMouseMove={handleMouseMove}>
        <svg
          className='testimonials_circles_'
          xmlns='http://www.w3.org/2000/svg'
          width='1600'
          height='1400'
          viewBox='0 0 1400 1400'
          fill='none'
        >
          <motion.circle
            cx='700'
            cy='700'
            r='698.5'
            fill='#e2e8f0'
            fill-opacity='0.2'
            stroke='#e2e8f0'
            stroke-width='2'
            stroke-dasharray='8 10'
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx='700'
            cy='700'
            r='598.5'
            fill='#e2e8f0'
            fill-opacity='0.2'
            stroke='#e2e8f0'
            stroke-width='2'
            stroke-dasharray='8 10'
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx='700'
            cy='700'
            r='498.5'
            fill='#e2e8f0'
            fill-opacity='0.2'
            stroke='#e2e8f0'
            stroke-width='2'
            stroke-dasharray='8 10'
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx='700'
            cy='700'
            r='398.5'
            fill='#e2e8f0'
            fill-opacity='0.2'
            stroke='#e2e8f0'
            stroke-width='2'
            stroke-dasharray='8 10'
            style={{ x, y }}
          ></motion.circle>
        </svg>
        <div className='data'>
          <h1>{state.name}</h1>
          <p>{state.description}</p>
        </div>
        <motion.div
          id='a'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.a)}
          onMouseLeave={() => setState(val)}
        >
          a
        </motion.div>
        <motion.div
          id='b'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.b)}
          onMouseLeave={() => setState(val)}
        >
          b
        </motion.div>
        <motion.div
          id='c'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.c)}
          onMouseLeave={() => setState(val)}
        >
          c
        </motion.div>
        <motion.div
          id='d'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.d)}
          onMouseLeave={() => setState(val)}
        >
          d
        </motion.div>
        <motion.div
          id='e'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.e)}
          onMouseLeave={() => setState(val)}
        >
          e
        </motion.div>
        <motion.div
          id='f'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.f)}
          onMouseLeave={() => setState(val)}
        >
          f
        </motion.div>
      </div>
      <div className='container bottom'>This is the bottom part</div>
    </>
  );
}

export default App;
