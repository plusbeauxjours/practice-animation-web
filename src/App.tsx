import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
  _start: { scale: 0 },
  _end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 2,
      damping: 8,
      bounce: 0.8,
    },
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={myVars} initial="_start" animate="_end" />
    </Wrapper>
  );
}

export default App;
