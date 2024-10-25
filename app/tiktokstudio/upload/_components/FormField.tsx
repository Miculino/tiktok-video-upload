// React
import { ReactNode } from "react";

interface FormFieldProps {
  children: ReactNode;
  label: string;
}

export default function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium text-black">{label}</label>
      {children}
    </div>
  );
}
