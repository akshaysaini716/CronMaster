import { useState } from "react";
import { CronField } from "./CronField";
import { CronPreview } from "./CronPreview";
import { cronFields } from "@/lib/cron";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CronBuilder() {
  const [values, setValues] = useState({
    minute: "*",
    hour: "*",
    day: "*",
    month: "*",
    weekday: "*",
  });

  const handleFieldChange = (field: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const cronExpression = `${values.minute} ${values.hour} ${values.day} ${values.month} ${values.weekday}`;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Cron Expression Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cronFields.map((field) => (
            <CronField
              key={field.value}
              field={field}
              value={values[field.value as keyof typeof values]}
              onChange={(value) => handleFieldChange(field.value, value)}
            />
          ))}
        </div>

        <CronPreview expression={cronExpression} />
      </CardContent>
    </Card>
  );
}
