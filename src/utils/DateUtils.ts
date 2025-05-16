class DateUtils {
  static getFormattedDate(date: Date) {
    const days = [
      "วันอาทิตย์",
      "วันจันทร์",
      "วันอังคาร",
      "วันพุธ",
      "วันพฤหัสบดี",
      "วันศุกร์",
      "วันเสาร์",
    ];
    const months = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ];
    const dayName = days[date.getDay()]; // GET the name of the day
    const day = date.getDate(); // Get the day of the month
    const month = months[date.getMonth()]; // Get the name of the month
    const year = date.getFullYear() + 543; // Get the full year

    return `${dayName}ที่ ${day} ${month} ${year} `;
  }

  static formatDateString(dateString: string) {
    if (dateString != undefined) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("th-TH", {
        timeZone: "Asia/Bangkok",
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(date);
    }
  }
}

export default DateUtils;
