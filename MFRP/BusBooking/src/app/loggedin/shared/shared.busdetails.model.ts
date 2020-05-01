export class SharedBusdetailsModel {
    public name: string;
    public regNo: string;
    public contactNo: number;
    public boardingPoint: string;
    public destinationPoint: string;
    public date_availability: {
        date: string,
        seats:{
            seatsStatus: number,
            fare: number
        }[]
    }[];
}