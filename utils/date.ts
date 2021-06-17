import { parseISO, format } from "date-fns";

export const formatDate = (dateString: string, dateFormat: string) => {
  return format(parseISO(dateString), dateFormat);
};
