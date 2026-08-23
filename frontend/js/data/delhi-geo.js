/**
 * Delhi Bhu-Praman - Delhi GIS Geo-Coordinates & District Boundaries
 */

const DELHI_DISTRICTS_GEO = [
  {
    name: "New Delhi",
    code: "DL-ND",
    center: [28.6139, 77.2090],
    subDivisions: ["Chanakyapuri", "Delhi Cantonment", "Vasant Vihar"],
    srOffices: ["SR-V Mehrauli/INA", "SR-VII INA"],
    urbanShare: 98,
    ruralShare: 2,
    color: "#2563eb"
  },
  {
    name: "South Delhi",
    code: "DL-SD",
    center: [28.5355, 77.2410],
    subDivisions: ["Hauz Khas", "Mehrauli", "Saket"],
    srOffices: ["SR-V Mehrauli", "SR-V(A) Saket"],
    urbanShare: 80,
    ruralShare: 20,
    color: "#0891b2"
  },
  {
    name: "South West Delhi",
    code: "DL-SW",
    center: [28.5800, 77.0300],
    subDivisions: ["Dwarka", "Najafgarh", "Kapashera"],
    srOffices: ["SR-IX Kapashera", "SR-IX(A) Dwarka"],
    urbanShare: 65,
    ruralShare: 35,
    color: "#059669"
  },
  {
    name: "South East Delhi",
    code: "DL-SE",
    center: [28.5600, 77.2600],
    subDivisions: ["Defence Colony", "Kalkaji", "Sarita Vihar"],
    srOffices: ["SR-V Mehrauli/Lajpat Nagar", "SR-X Sarita Vihar"],
    urbanShare: 92,
    ruralShare: 8,
    color: "#7c3aed"
  },
  {
    name: "North West Delhi",
    code: "DL-NW",
    center: [28.7180, 77.1000],
    subDivisions: ["Rohini", "Kanjhawala", "Saraswati Vihar"],
    srOffices: ["SR-VI Rohini", "SR-VI(A) Pitampura"],
    urbanShare: 70,
    ruralShare: 30,
    color: "#d97706"
  },
  {
    name: "North Delhi",
    code: "DL-NDH",
    center: [28.7800, 77.1300],
    subDivisions: ["Alipur", "Model Town", "Narela"],
    srOffices: ["SR-VI(C) Narela", "SR-I Kashmere Gate"],
    urbanShare: 55,
    ruralShare: 45,
    color: "#dc2626"
  },
  {
    name: "East Delhi",
    code: "DL-ED",
    center: [28.6200, 77.2900],
    subDivisions: ["Gandhi Nagar", "Mayur Vihar", "Preet Vihar"],
    srOffices: ["SR-VIII Preet Vihar"],
    urbanShare: 96,
    ruralShare: 4,
    color: "#4f46e5"
  },
  {
    name: "West Delhi",
    code: "DL-WD",
    center: [28.6500, 77.1200],
    subDivisions: ["Patel Nagar", "Punjabi Bagh", "Rajouri Garden"],
    srOffices: ["SR-II Janakpuri", "SR-II(A) Punjabi Bagh"],
    urbanShare: 95,
    ruralShare: 5,
    color: "#0d9488"
  },
  {
    name: "Central Delhi",
    code: "DL-CD",
    center: [28.6400, 77.2200],
    subDivisions: ["Civil Lines", "Karol Bagh", "Kotwali"],
    srOffices: ["SR-III Asaf Ali Road", "SR-I Kashmere Gate"],
    urbanShare: 100,
    ruralShare: 0,
    color: "#e11d48"
  },
  {
    name: "Shahdara",
    code: "DL-SHD",
    center: [28.6700, 77.2800],
    subDivisions: ["Seemapuri", "Shahdara", "Vivek Vihar"],
    srOffices: ["SR-IV(A) Vivek Vihar"],
    urbanShare: 98,
    ruralShare: 2,
    color: "#4338ca"
  },
  {
    name: "North East Delhi",
    code: "DL-NE",
    center: [28.7000, 77.2600],
    subDivisions: ["Karawal Nagar", "Seelampur", "Yamuna Vihar"],
    srOffices: ["SR-IV Seelampur"],
    urbanShare: 88,
    ruralShare: 12,
    color: "#b45309"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DELHI_DISTRICTS_GEO };
}
