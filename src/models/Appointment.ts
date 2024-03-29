import { randomUUID } from 'crypto'
class Appointment {
  id: string

  provider: string

  date: Date

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = randomUUID()
    this.provider = provider
    this.date = date
  }
}

export default Appointment
