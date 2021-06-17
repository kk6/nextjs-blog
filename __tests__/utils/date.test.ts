import { formatDate } from "../../utils/date";

test("日付が正しくフォーマットされること", () => {
  expect(formatDate("2021-06-17", "LLLL d, yyyy")).toBe("June 17, 2021");
});
