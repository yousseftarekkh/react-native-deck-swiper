import { Animated } from "react-native";

const calculateCardIndexes = (firstCardIndex: number, cards: any[]) => {
  firstCardIndex = firstCardIndex || 0;
  const previousCardIndex =
    firstCardIndex === 0 ? cards.length - 1 : firstCardIndex - 1;
  const secondCardIndex =
    firstCardIndex === cards.length - 1 ? 0 : firstCardIndex + 1;
  return { firstCardIndex, secondCardIndex, previousCardIndex };
};

const rebuildStackAnimatedValues = ({
  stackSize,
  stackSeparation,
  stackScale,
}: TProps) => {
  const stackPositionsAndScales: ObjectLiteral = {};
  for (let position = 0; position < stackSize; position++) {
    stackPositionsAndScales[`stackPosition${position}`] = new Animated.Value(
      stackSeparation * position
    );
    stackPositionsAndScales[`stackScale${position}`] = new Animated.Value(
      (100 - stackScale * position) * 0.01
    );
  }
  return stackPositionsAndScales;
};

export { calculateCardIndexes, rebuildStackAnimatedValues };
