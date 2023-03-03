interface Door {
  opened: boolean;
  selected: boolean;
  winner: boolean;
}

const createNewDoor = () => {
  return { opened: false, selected: false, winner: false };
};

const gameSimulator = (shouldChange = true, doorAmount = 3) => {
  let doors: Door[] = new Array(doorAmount).fill("").map(() => createNewDoor());
  const winnerIndex = Math.floor(Math.random() * doorAmount);
  doors[winnerIndex].winner = true;
  const selectedIndex = Math.floor(Math.random() * doorAmount);
  doors[selectedIndex].selected = true;

  let openedDoorCount = 0;

  // open all but two

  doors.map((door) => {
    if (!door.selected && !door.winner && openedDoorCount < doorAmount - 2) {
      door.opened = true;
      openedDoorCount += 1;
    }
  });

  if (shouldChange) {
    doors.filter(
      (door) => door.opened === false && door.selected === false
    )[0].selected = true;
    doors[selectedIndex].selected = false;
  }

  if (doors.filter((door) => door.selected)[0].winner) return true;
  return false;
};

export default gameSimulator;
