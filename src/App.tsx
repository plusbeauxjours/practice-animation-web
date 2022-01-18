import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  _initial: {
    opacity: 0,
    scale: 0,
  },
  _animate: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  _exit: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      {/* AnimatePresence는 한상 visible상태가 되어있어야하고, 
      그 안의 children만 condition을 가지고 있어야한다.  
      initial => animate => exit
      */}
      <AnimatePresence>
        {showing && (
          <Box
            variants={boxVariants}
            initial="_initial"
            animate="_animate"
            exit="_exit"
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
