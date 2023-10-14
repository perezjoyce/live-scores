export default function getProgressLabel(liveStatus: string): string {
   if (!["Canceled", "-"].includes(liveStatus)) {
      return liveStatus;
   }
   return ""
}