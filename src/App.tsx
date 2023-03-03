import BaseContainer from "./components/BaseContainer";
import Description from "./components/Description";
import DoorsInput from "./components/DoorsInput";
import PlayButton from "./components/PlayButton";
import ReplaysInput from "./components/ReplaysInput";
import ResetButton from "./components/ResetButton";
import ShouldChangeCheckbox from "./components/ShouldChangeCheckbox";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <header>
        <h1>Monty Hall simulator with changeable variables</h1>
      </header>
      <BaseContainer>
        <Description />
        <ReplaysInput />
        <DoorsInput />
        <ShouldChangeCheckbox />
        <Stats />
      </BaseContainer>
      <PlayButton />
      <ResetButton />
    </>
  );
}

export default App;
