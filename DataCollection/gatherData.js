import targetElements from "../Website/targetElements.js";
import activityMap from "./activityMap.js";

function gatherData() {
  const FILTERED = Array.from(targetElements.scheduleTable.children).flatMap(
    (row) => {
      if (row.children.length === 1) return [];
      let data = Array.from(row.children).flatMap((column) =>
        column.nodeName === "TD" && column.innerText.trim() !== ""
          ? [column.innerText.trim()]
          : []
      );
      if (data.length > 0) data = [data];
      return data;
    }
  );

  const DATA_ARR = [];
  const DATE_PATTERN = /^[A-Za-z]{3} (?:\d{2}\/){2}\d{2}$/;
  const PERIOD_PATTERN = / - /;

  FILTERED.forEach((element) => {
    if (DATE_PATTERN.test(element[0])) {
      DATA_ARR.push({
        day: element[0].replace(" ", "\n"),
        periodMsg: element[1],
        periodStart: undefined,
        periodEnd: undefined,
        activities: [],
      });

      if (PERIOD_PATTERN.test(element[1])) {
        const PERIOD_ARR = element[1].split(" - ");
        DATA_ARR[DATA_ARR.length - 1].periodStart = convertToTime(PERIOD_ARR[0]);
        DATA_ARR[DATA_ARR.length - 1].periodEnd = convertToTime(PERIOD_ARR[1]);
      }

      if (element.length > 4)
        DATA_ARR[DATA_ARR.length - 1].activities.push({
          activity: element[2],
          activityColour: activityMap.get(element[2]),
          activityStart: convertToTime(element[3]),
          activityEnd: convertToTime(element[4])
        });
    } else {
      DATA_ARR[DATA_ARR.length - 1].activities.push({
        activity: element[0],
        activityColour: activityMap.get(element[0]),
        activityStart: convertToTime(element[1]),
        activityEnd: convertToTime(element[2])
      });
    }
  });
  return DATA_ARR;
}

function convertToTime(timeStr) {
	return new Date(`January 1, 1970 ${timeStr}`);
}

export default gatherData();
