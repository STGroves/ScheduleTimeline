javascript: function load() {
  const SCRIPT_ELEM = document.createElement("script");
  SCRIPT_ELEM.type = "module";
  SCRIPT_ELEM.onload = function() {};
  SCRIPT_ELEM.src = "https://stgroves.github.io/ScheduleTimeline/main.js";
  
  document.getElementsByTagName("body")[0].insertBefore(SCRIPT_ELEM, document.getElementsByTagName("body")[0].lastChild);
};
load();
void 0