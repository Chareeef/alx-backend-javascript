import ClassRoom from './0-classroom';

// Function that creates custom classrooms
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
