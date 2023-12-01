export interface GetDoctorsResponseBody {
  name: string;
  id: Number;
}
export class GetDoctorsResponseBodyModel {
  constructor() {
    this.name = '';
    this.id = 0;
  }
  name: string;
  id: Number;
}
