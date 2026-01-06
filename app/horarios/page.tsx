"use client";

import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

type Day = {
  label: string;
  date: string;
  times: string[];
};

const days: Day[] = [
  {
    label: "Today",
    date: "Apr 14",
    times: [
      "9-10",
      "10-11",
      "11-12",
      "12-13",
      "13-14",
      "14-15",
      "15-16",
      "16-17",
      "17-18",
      "18-19",
      "19-20",
      "20-21",
    ],
  },
  {
    label: "Tuesday",
    date: "Apr 15",
    times: ["9-10", "11-12", "12-13", "14-15", "15-16", "17-18", "18-19"],
  },
  {
    label: "Wednesday",
    date: "Apr 16",
    times: [
      "11-12",
      "12-13",
      "13-14",
      "15-16",
      "16-17",
      "18-19",
      "19-20",
      "20-21",
    ],
  },
  {
    label: "Friday",
    date: "Apr 18",
    times: ["9-10", "11-12", "12-13", "13-14", "14-15", "18-19", "19-20"],
  },
];

const gallery = [
  { src: "/placeholder/hair1.jpg", alt: "Corte 1" },
  { src: "/placeholder/hair2.jpg", alt: "Corte 2" },
  { src: "/placeholder/hair3.jpg", alt: "Corte 3" },
  { src: "/placeholder/hair4.jpg", alt: "Corte 4" },
];

export default function AgendamentoDrawerPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Day>(days[2]);
  const [selectedTime, setSelectedTime] = useState("11-12");

  return (
    <div className="relative min-h-screen bg-linear-to-b from-neutral-50 to-neutral-100 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-neutral-200/80 blur-3xl" />
        <div className="absolute left-0 top-32 h-48 w-48 rounded-full bg-neutral-300/60 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-4 pb-24 pt-6">
        <header className="flex items-center justify-between text-sm font-semibold text-neutral-700">
          <div className="flex items-center gap-2">
            <Link
              href="/profissionais"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5"
              aria-label="Voltar para profissionais"
            >
              <span className="text-lg">←</span>
            </Link>
            <span className="text-base font-semibold">The Sharp Side</span>
          </div>
        </header>

        <main className="mt-6 space-y-6">
          <section className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="h-12 w-12 rounded-full bg-linear-to-br from-neutral-300 to-neutral-200" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold tracking-tight">
                  Nate black
                </h1>
              </div>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-neutral-800">
                Photo Gallery
              </h2>
              <button className="text-xs font-semibold text-orange-500">
                See more
              </button>
            </div>
            <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
              {gallery.map((item) => (
                <div
                  key={item.alt}
                  className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-200"
                />
              ))}
            </div>
          </section>

          <section className="space-y-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <h3 className="text-sm font-semibold text-neutral-800">
              Barber shop
            </h3>
            <div className="h-28 w-full overflow-hidden rounded-xl bg-neutral-200" />
            <div className="space-y-2 text-sm text-neutral-700">
              <p>
                <span className="font-semibold">Service:</span> Mon to Sat - 9am
                to 10pm
              </p>
              <p>
                <span className="font-semibold">Address:</span> 1201 Peachtree
                St NE, Atlanta GA 30309
              </p>
            </div>
            <button className="flex w-fit items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white shadow hover:-translate-y-0.5 transition">
              Show on map
            </button>
          </section>

          <section className="space-y-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-neutral-800">
                Reviews
              </h3>
              <button className="text-xs font-semibold text-orange-500">
                See all
              </button>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-neutral-50 p-3">
              <div className="h-10 w-10 rounded-full bg-neutral-200" />
              <div className="flex-1">
                <p className="text-sm font-semibold">David</p>
                <p className="text-xs text-neutral-600">⭐ 5/5 · Excellent</p>
              </div>
              <span className="text-sm font-semibold text-green-600">✔</span>
            </div>
          </section>
        </main>

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md px-4 pb-6">
            <DrawerTrigger asChild>
              <button className="flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-black/15 transition hover:translate-y-0.5">
                Book Now
              </button>
            </DrawerTrigger>
          </div>

          <DrawerContent className="border-none bg-white pb-5 pt-4 shadow-2xl ring-1 ring-black/10 data-[vaul-drawer-direction=bottom]:rounded-t-3xl data-[vaul-drawer-direction=bottom]:max-w-md data-[vaul-drawer-direction=bottom]:mx-auto">
            <DrawerHeader className="px-5 pb-3 pt-0">
              <div className="flex items-center justify-between">
                <DrawerTitle className="text-base font-semibold text-neutral-900">
                  Appointment Time
                </DrawerTitle>
                <DrawerClose
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-lg font-semibold text-neutral-600"
                  aria-label="Close drawer"
                >
                  ×
                </DrawerClose>
              </div>
            </DrawerHeader>

            <div className="space-y-4 border-t border-neutral-100 px-5 pb-3 pt-4">
              <p className="text-sm text-neutral-600">
                Select an appointment time that works best for you.
              </p>
              <div className="flex gap-3 overflow-x-auto pb-1">
                {days.map((day) => {
                  const isActive = day.label === selectedDay.label;
                  return (
                    <button
                      key={day.label}
                      onClick={() => {
                        setSelectedDay(day);
                        setSelectedTime(day.times[0]);
                      }}
                      className={`flex min-w-23 flex-col items-center rounded-2xl border px-3 py-2 text-xs font-semibold transition ${
                        isActive
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-neutral-400"
                      }`}
                    >
                      <span>{day.label}</span>
                      <span
                        className={
                          isActive ? "text-white/80" : "text-neutral-500"
                        }
                      >
                        {day.date}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {selectedDay.times.map((time) => {
                  const active = time === selectedTime;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                        active
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-neutral-400"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
              <div className="rounded-2xl bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                {selectedDay.label}, {selectedDay.date} · {selectedTime}
              </div>
            </div>

            <DrawerFooter className="px-5 pt-0">
              <button className="flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-black/15 transition hover:translate-y-0.5">
                Book Now
              </button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
