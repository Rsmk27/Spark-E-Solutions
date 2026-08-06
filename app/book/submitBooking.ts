import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BookingForm } from "./page";

export const submitBooking = async (data: BookingForm) => {
  await addDoc(collection(db, "bookings"), {
    ...data,
    createdAt: serverTimestamp(),
  });
};
