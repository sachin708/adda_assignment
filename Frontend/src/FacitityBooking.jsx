const bookings = {};

const getBookingAmount = (facility, startTime, endTime) => {
  let amount = 0;
  const startHour = parseInt(startTime.split(":")[0]);
  const endHour = parseInt(endTime.split(":")[0]);

  if (facility === "Clubhouse") {
    for (let hour = startHour; hour < endHour; hour++) {
      if (hour >= 10 && hour < 16) {
        amount += 100;
      } else if (hour >= 16 && hour < 22) {
        amount += 500;
      }
    }
  } else if (facility === "Tennis Court") {
    amount = (endHour - startHour) * 50;
  }

  return amount;
};

const isAvailable = (facility, date, startTime, endTime) => {
  const bookingsForDate = bookings[`${facility}_${date}`] || [];
  for (const booking of bookingsForDate) {
    if (!(endTime <= booking.startTime || startTime >= booking.endTime)) {
      return false;
    }
  }
  return true;
};

const bookFacility = (facility, date, startTime, endTime) => {
  if (!isAvailable(facility, date, startTime, endTime)) {
    return `Booking Failed, Already Booked`;
  }

  const amount = getBookingAmount(facility, startTime, endTime);
  if (!bookings[`${facility}_${date}`]) {
    bookings[`${facility}_${date}`] = [];
  }
  bookings[`${facility}_${date}`].push({ startTime, endTime });
  return `Booked, Rs. ${amount}`;
};

export { bookFacility };
