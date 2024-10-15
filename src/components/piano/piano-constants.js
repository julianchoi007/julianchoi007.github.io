export const KEY_COLOURS = [
  "#9e0142",
  "#d53e4f",
  "#f46d43",
  "#fdae61",
  "#fee08b",
  "#e6f598",
  "#abdda4",
  "#66c2a5",
  "#3288bd",
  "#5e4fa2",
];
export const BLACK_KEYS = ["W", "E", "T", "Y", "U", "O", "P"];
export const SPACING = [7, 17, 37, 47, 57, 77, 87];
export const WHITE_KEYS = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"];
export const NOTES = [
  "A",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "O",
  "P",
  "S",
  "T",
  "U",
  "W",
  "Y",
];
export const AUDIO = {};
for (let i = 0; i < NOTES.length; i++) {
  AUDIO[NOTES[i]] = new Audio("/sound-keys/" + NOTES[i] + ".wav");
}

AUDIO[";"] = new Audio("/sound-keys/END.wav");
