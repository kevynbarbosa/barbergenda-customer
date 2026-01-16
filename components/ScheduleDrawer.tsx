"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

export type DayOption = {
  label: string;
  date: string;
  times: string[];
};

type ScheduleDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  days: DayOption[];
  selectedDay: DayOption;
  selectedTime: string;
  onSelectDay: (day: DayOption) => void;
  onSelectTime: (time: string) => void;
  selectionText: string;
};

export function ScheduleDrawer({
  open,
  onOpenChange,
  days,
  selectedDay,
  selectedTime,
  onSelectDay,
  onSelectTime,
  selectionText,
}: ScheduleDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md px-4 pb-6">
        <DrawerTrigger asChild>
          <button className="flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-black/15 transition hover:translate-y-0.5">
            Escolher horário
          </button>
        </DrawerTrigger>
      </div>

      <DrawerContent className="border-none bg-white pb-5 pt-4 shadow-2xl ring-1 ring-black/10 data-[vaul-drawer-direction=bottom]:mx-auto data-[vaul-drawer-direction=bottom]:max-w-md data-[vaul-drawer-direction=bottom]:rounded-t-3xl">
        <DrawerHeader className="px-5 pb-3 pt-0">
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-base font-semibold text-neutral-900">
              Selecionar horário
            </DrawerTitle>
            <DrawerClose
              className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-lg font-semibold text-neutral-600"
              aria-label="Fechar agenda"
            >
              ×
            </DrawerClose>
          </div>
        </DrawerHeader>

        <div className="space-y-4 border-t border-neutral-100 px-5 pb-3 pt-4">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {days.map((day) => {
              const isActive = day.label === selectedDay.label;
              return (
                <button
                  key={day.label}
                  onClick={() => {
                    onSelectDay(day);
                    onSelectTime(day.times[0]);
                  }}
                  className={`flex min-w-24 flex-col items-center rounded-2xl border px-3 py-2 text-xs font-semibold transition ${
                    isActive
                      ? "border-orange-500 bg-orange-50 text-orange-900 shadow shadow-orange-100"
                      : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400"
                  }`}
                >
                  <span>{day.label}</span>
                  <span
                    className={
                      isActive ? "text-orange-700" : "text-neutral-500"
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
                  onClick={() => onSelectTime(time)}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-orange-500 bg-orange-50 text-orange-900 shadow-sm shadow-orange-100"
                      : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400"
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-neutral-100 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
            {selectionText}
          </div>
        </div>

        <DrawerFooter className="px-5 pt-0">
          <Link
            href="/agendamento/cadastro"
            className="flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-black/15 transition hover:translate-y-0.5"
          >
            Confirmar agendamento
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
