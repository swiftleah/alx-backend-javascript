/*
 * Imports Classroom from 0-classroom.js
 * Returns array of 3 classroom objs with different sizes
 */

import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
    const roomSizes = [ new ClassRoom(19), new ClassRoom(20), new ClassRoom(34) ];
    return roomSizes;
}
