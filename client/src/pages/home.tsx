import { CronBuilder } from "@/components/cron-builder/CronBuilder";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <CronBuilder />
      </div>
    </div>
  );
}
