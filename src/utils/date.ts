// Convert date to readable human format
import moment from 'moment';

const readableDate = (date: string): string => {
  return moment.utc(date).local().format('h:mmA, MMMM Do YYYY.');
}

export default readableDate;