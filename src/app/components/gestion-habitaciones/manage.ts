/* import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Room } from '../room'; // import the Room interface

@Component({
  selector: 'app-manage-room',
  templateUrl: './manage-room.component.html',
  styleUrls: ['./manage-room.component.css']
})
export class ManageRoomComponent implements OnInit {
  rooms: Room[]; // array to hold the list of rooms
  filteredRooms: Room[]; // array to hold the filtered list of rooms
  selectedStatus: string; // variable to hold the selected status for filtering
  editedRoom: Room; // variable to hold the room being edited
  newRoom: Room; // variable to hold the new room being added

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRooms(); // get the list of rooms from the backend
    this.selectedStatus = 'all'; // set the default selected status
  }

  // method to get the list of rooms from the backend
  getRooms(): void {
    this.http.get<Room[]>('/api/rooms').subscribe(rooms => {
      this.rooms = rooms;
      this.filteredRooms = rooms; // set the filtered rooms to the full list of rooms by default
    });
  }

  // method to filter the rooms by status
  filterRooms(): void {
    if (this.selectedStatus === 'all') {
      this.filteredRooms = this.rooms; // if 'All' is selected, show all rooms
    } else {
      this.filteredRooms = this.rooms.filter(room => room.status === this.selectedStatus);
    }
  }

  // method to open the edit modal and set the edited room
  editRoom(room: Room): void {
    this.editedRoom = room;
    // code to open the edit modal (e.g. using the modal's id and the 'modal' class)
  }

  // method to close the edit modal and reset the edited room
  closeEditModal(): void {
    this.editedRoom = null;
    // code to close the edit modal (e.g. using the modal's id and the 'modal' class)
  }

  // method to save the edited room and update the price of other rooms with the same room type
  saveEditedRoom(): void {
    // send an HTTP request to update the room in the backend
    this.http.put('/api/rooms/' + this.editedRoom.idRoom, this.editedRoom).subscribe(() => {
      // update the price of other rooms with the same room type
      this.rooms.filter(room => room.roomType === this.editedRoom.roomType)
        .forEach(room => room.pricePerNight = this.editedRoom.pricePerNight);
      // close the edit modal and reset the edited room
      this.closeEditModal();
    });
  }

  // method to delete a room
  deleteRoom
 */