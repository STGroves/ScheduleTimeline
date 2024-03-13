const IFRAME_CONTENT =
    document.getElementsByClassName("legacy-wrapper")[0].contentDocument;
const NAV_TITLE = IFRAME_CONTENT
    .getElementById("viewFormatBarANDnavigationDate")
    .children[1].querySelector("table td");
const SCHEDULE_TABLE = IFRAME_CONTENT
    .getElementById("scheduleDetailTableDiv")
    .querySelector("table>tbody");
const PAGE = IFRAME_CONTENT.getElementById("scheduleForm").parentNode;


export default {
  iFrameDoc: IFRAME_CONTENT,
  dateNavBar: NAV_TITLE,
  scheduleTable: SCHEDULE_TABLE,
  page: PAGE
}