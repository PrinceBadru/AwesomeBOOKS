import { DateTime } from './Luxon/luxon.min.js';

export default class Clock {
  constructor(domElement) {
    this.date = document.getElementById(domElement);
    this.updateTime();
  }

  updateTime = () => {
    const currentTime = DateTime.now();
    const timeFormat = DateTime.DATETIME_SHORT_WITH_SECONDS;

    this.date.innerHTML = currentTime.toLocaleString(timeFormat);
    setInterval(this.updateTime, 1000);
  }
}
