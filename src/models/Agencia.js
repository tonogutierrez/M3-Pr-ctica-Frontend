class Agencia {
    constructor(agencyNum, name, numBookings) {
      this.agencyNum = agencyNum;
      this.name = name;
      this.numBookings = numBookings;
    }
  
    getFormattedInfo() {
      return `Agencia ${this.name} (ID: ${this.agencyNum}) tiene ${this.numBookings} reservas.`;
    }
  }
  
  export default Agencia;
  