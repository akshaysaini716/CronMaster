import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import type { CronField } from "@/lib/cron";

interface CronFieldProps {
  field: CronField;
  value: string;
  onChange: (value: string) => void;
}

export function CronField({ field, value, onChange }: CronFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{field.label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {field.options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
