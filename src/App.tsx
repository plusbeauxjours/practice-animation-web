import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleClicked = () => setIsClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {/* element의 layout이 바뀔 때 알아서 animate가 된다. 
            layout을 넣으면 무언가 외부의 힘에 의해 바뀐것을 감지한다. 
            layoutId을 넣어서 두개의 component가 연결되어있다고 알려준다.
            두개의 다른 component가 같다고 생각하기 때문에 에니메이션이 된다.
        */}
        {!isClicked ? (
          <Circle layoutId="_circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {isClicked ? (
          <Circle layoutId="_circle" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;
