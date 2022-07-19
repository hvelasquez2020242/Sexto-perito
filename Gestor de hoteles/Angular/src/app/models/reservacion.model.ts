export class Reservacion{
  constructor(
    public idUsuario: String,
    public tipoDeHabitacion: String,
    public cantidadDias: Number,
    public total: String,
    public idHotel : String
  )
  {}
}
