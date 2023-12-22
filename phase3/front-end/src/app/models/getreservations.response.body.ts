export interface getReservationsResponseBody {
  slots: Slot[];
  doctors: Doctor[];
}

export interface Slot {
  id: number;
  date: string;
  hour: string;
  createdby: number;
}

export interface Doctor {
  name: string;
}
