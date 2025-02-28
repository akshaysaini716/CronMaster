import { useState } from "react";
import { validateCronExpression, getHumanDescription } from "@/lib/cron";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Check, Copy, AlertCircle } from "lucide-react";

interface CronPreviewProps {
  expression: string;
}

export function CronPreview({ expression }: CronPreviewProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const isValid = validateCronExpression(expression);
  const description = getHumanDescription(expression);

  const handleCopy = () => {
    navigator.clipboard.writeText(expression);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Expression copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between bg-muted p-4 rounded-lg">
          <code className="text-lg font-mono">{expression}</code>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="hover:bg-background"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {isValid ? (
        <Alert>
          <AlertDescription className="text-muted-foreground">
            {description}
          </AlertDescription>
        </Alert>
      ) : (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Invalid cron expression</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
