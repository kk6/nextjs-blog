import { formatDate } from "../utils/date";

export default function Date({ dateString }: { dateString: string }) {
  return (
    <time dateTime={dateString}>{formatDate(dateString, "LLLL d, yyyy")}</time>
  );
}
