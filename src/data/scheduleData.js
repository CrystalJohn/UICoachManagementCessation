// src/data/scheduleData.js
export const scheduleData = [
  {
    date: "Tuesday, June 16, 2025",
    bookedSlots: 2,
    totalSlots: 4,
    timeSlots: [
      {
        time: "09:00",
        isAvailable: true,
        statusText: "Available slot",
      },
      {
        time: "10:00",
        isAvailable: true,
        statusText: "Available slot",
      },
      {
        time: "11:00",
        isAvailable: false,
        statusText: "Booked by Eleanor Vance",
        clientName: "Eleanor Vance",
      },
      {
        time: "14:00",
        isAvailable: false,
        statusText: "Booked by Marcus Holloway",
        clientName: "Marcus Holloway",
      },
    ],
  },
  {
    date: "Wednesday, June 17, 2025",
    bookedSlots: 1,
    totalSlots: 4,
    timeSlots: [
      {
        time: "09:00",
        isAvailable: false,
        statusText: "Booked by Liam Wilson",
        clientName: "Liam Wilson",
      },
      {
        time: "10:00",
        isAvailable: true,
        statusText: "Available slot",
      },
      {
        time: "11:00",
        isAvailable: true,
        statusText: "Available slot",
      },
      {
        time: "14:00",
        isAvailable: true,
        statusText: "Available slot",
      },
    ],
  },
  {
    date: "Thursday, June 18, 2025",
    bookedSlots: 0,
    totalSlots: 4,
    timeSlots: [
      {
        time: "09:00",
        isAvailable: true,
        statusText: "Available slot",
      },
      {
        time: "10:00",
        isAvailable: true,
        statusText: "Available slot",
      },
      {
        time: "11:00",
        isAvailable: true,
        statusText: "Available slot",
      },
      {
        time: "14:00",
        isAvailable: true,
        statusText: "Available slot",
      },
    ],
  },
];
