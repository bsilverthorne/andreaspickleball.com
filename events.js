// ============================================================
//  ANDREA'S PICKLEBALL — EVENT DATA
//
//  NOTE: This file is generated from Andrea's master event list —
//  if you edit it by hand, mirror the change back into that list.
//
//  ORDER: keep events in chronological order — by date, and within
//  a single day from earliest to latest start time. The calendar now
//  also sorts each day by time, but keeping the file in order keeps it
//  readable and matches what people expect.
//
//  Each event's TITLE is built automatically from its parts, in
//  this order:   [rating] [gender] [format] [type] [extra]
//  e.g.  2.5 + Women's + Partner + Round Robin + w/Andrea
//     →  "2.5 Women's Partner Round Robin w/Andrea"
//
//  Field guide:
//    date     — "YYYY-MM-DD"  (e.g. "2026-06-15")
//    time     — start time, e.g. "8:30 AM"
//    endTime  — optional, e.g. "12:00 PM" (leave "" if unknown)
//    gender   — "Women's", "Men's", "Mixed", "Youth", "Men & Women"
//    format   — "Partner", "Individual", or "" (not applicable)
//    rating   — "2.5", "3.0–3.5", "3.0+", "" (no rating)
//    type     — "Round Robin", "Clinic", or "Drill Time"
//    extra    — optional tail, e.g. "w/Andrea", "(ages 14–18)"
//    titleOverride — set this to use a custom title instead of
//                    the built one (for odd events like clinics)
//    venue    — "LPC", "FCC", "MCC", or "COL" (controls the color)
//    locationDetail — optional, e.g. "Broughton Rec Center"
//    dupr     — true if DUPR-rated, false if not
//    price    — e.g. "$15" (leave "" to hide)
//    link     — the signup page people land on when they click
// ============================================================

const VENUES = {
  LPC: { name: "Longview Pickleball Club", color: "#2d7a4f", link: "https://www.longviewpickleballclub.com/events" },
  FCC: { name: "First Christian Church",   color: "#d4a017", link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-64816339-fccpickleball#/" },
  MCC: { name: "Marshall Convention Center", color: "#e07b39", link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-58203515-marshall#/" },
  COL: { name: "City of Longview",         color: "#2c5f8a", link: "https://anc.apm.activecommunities.com/longviewpard/activity/search?activity_keyword=pickleball" },
};

// Extra links shown in the footer (FCC Youth has its own signup page)
const FOOTER_LINKS = [
  { label: "LPC Events",  url: "https://www.longviewpickleballclub.com/events" },
  { label: "FCC Adult Signups", url: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-64816339-fccpickleball#/" },
  { label: "FCC Youth Signups", url: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-64383324-youth#/" },
  { label: "MCC Signups", url: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-58203515-marshall#/" },
  { label: "City of Longview Registration", url: "https://anc.apm.activecommunities.com/longviewpard/activity/search?activity_keyword=pickleball" },
];

const EVENTS = [
  {
    date: "2026-06-09", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Mixed", format: "", rating: "3.0–3.5", extra: "", titleOverride: "",
    type: "Round Robin", venue: "MCC", locationDetail: "",
    dupr: true, price: "$20",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-58203515-marshall#/",
  },
  {
    date: "2026-06-10", time: "9:00 AM", endTime: "11:30 AM",
    gender: "", format: "", rating: "", extra: "", titleOverride: "Beginner Pickleball Clinic (Level One)",
    type: "Clinic", venue: "COL", locationDetail: "Broughton Rec Center",
    dupr: false, price: "",
    link: "https://anc.apm.activecommunities.com/longviewpard/activity/search/detail/4444?onlineSiteId=0&from_original_cui=true",
  },
  {
    date: "2026-06-15", time: "8:30 AM", endTime: "",
    gender: "Women's", format: "Partner", rating: "2.5", extra: "", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-06-15", time: "6:00 PM", endTime: "9:00 PM",
    gender: "Mixed", format: "Partner", rating: "3.0", extra: "w/Andrea", titleOverride: "",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$30",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-06-17", time: "9:00 AM", endTime: "12:30 PM",
    gender: "Women's", format: "", rating: "2.5", extra: "", titleOverride: "",
    type: "Round Robin", venue: "COL", locationDetail: "Broughton Rec Center",
    dupr: true, price: "$15",
    link: "https://anc.apm.activecommunities.com/longviewpard/activity/search/detail/4445?onlineSiteId=0&from_original_cui=true",
  },
  {
    date: "2026-06-18", time: "8:30 AM", endTime: "",
    gender: "Men & Women", format: "", rating: "3.0+", extra: "", titleOverride: "",
    type: "Drill Time", venue: "FCC", locationDetail: "",
    dupr: false, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-06-22", time: "8:00 AM", endTime: "",
    gender: "Women's", format: "Partner", rating: "2.5", extra: "", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-06-22", time: "6:00 PM", endTime: "9:00 PM",
    gender: "Men's", format: "", rating: "3.0", extra: "w/Andrea", titleOverride: "",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-06-24", time: "8:30 AM", endTime: "",
    gender: "Women's", format: "Partner", rating: "2.0", extra: "", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-06-25", time: "8:30 AM", endTime: "",
    gender: "Women's", format: "", rating: "3.3", extra: "(non-DUPR)", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: false, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-06-29", time: "6:00 PM", endTime: "9:00 PM",
    gender: "Women's", format: "", rating: "2.0", extra: "w/Andrea", titleOverride: "",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-06-30", time: "6:30 PM", endTime: "",
    gender: "Mixed", format: "", rating: "3.5", extra: "", titleOverride: "",
    type: "Round Robin", venue: "MCC", locationDetail: "",
    dupr: true, price: "$20",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-58203515-marshall#/",
  },
  {
    date: "2026-07-02", time: "8:30 AM", endTime: "",
    gender: "Women's", format: "Partner", rating: "3.0", extra: "(4th of July Theme)", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-07-06", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Women's", format: "Partner", rating: "2.5", extra: "(ages 60+)", titleOverride: "",
    type: "Round Robin", venue: "COL", locationDetail: "Paula Martin Jones",
    dupr: true, price: "$30",
    link: "https://anc.apm.activecommunities.com/longviewpard/activity/search/detail/4480?onlineSiteId=0&from_original_cui=true",
  },
  {
    date: "2026-07-06", time: "6:00 PM", endTime: "9:00 PM",
    gender: "Mixed", format: "", rating: "3.5", extra: "w/Andrea", titleOverride: "",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$30",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-07-09", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Women's", format: "Partner", rating: "7.0–7.5", extra: "(Cumulative, non-DUPR)", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: false, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-07-09", time: "5:30 PM", endTime: "8:00 PM",
    gender: "", format: "", rating: "", extra: "", titleOverride: "Beginner Pickleball Clinic (Level One)",
    type: "Clinic", venue: "COL", locationDetail: "Broughton Rec Center",
    dupr: false, price: "$55",
    link: "https://anc.apm.activecommunities.com/longviewpard/activity/search/detail/4478?onlineSiteId=0&from_original_cui=true",
  },
  {
    date: "2026-07-13", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Men & Women", format: "", rating: "2.0–2.99", extra: "", titleOverride: "",
    type: "Drill Time", venue: "FCC", locationDetail: "",
    dupr: false, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-07-13", time: "6:00 PM", endTime: "9:00 PM",
    gender: "Mixed", format: "Partner", rating: "3.0", extra: "(Ages 54+) w/Andrea", titleOverride: "",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$30",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-07-16", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Men & Women", format: "Individual", rating: "2.0–2.2", extra: "(Friendly, only 8 games, non-DUPR)", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: false, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-07-20", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Women's", format: "Individual", rating: "2.5", extra: "", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-07-20", time: "6:00 PM", endTime: "9:00 PM",
    gender: "Men's", format: "", rating: "2.5", extra: "w/Andrea", titleOverride: "",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-07-21", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Women's", format: "Partner", rating: "3.3", extra: "(non-DUPR)", titleOverride: "",
    type: "Round Robin", venue: "MCC", locationDetail: "",
    dupr: false, price: "$20",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-58203515-marshall#/",
  },
  {
    date: "2026-07-23", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Mixed", format: "Partner", rating: "3.0", extra: "", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-07-27", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Women's", format: "Partner", rating: "2.0", extra: "", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-07-27", time: "6:00 PM", endTime: "9:00 PM",
    gender: "Men's", format: "", rating: "3.5", extra: "w/Andrea", titleOverride: "",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-07-28", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Women's", format: "Partner", rating: "3.0", extra: "", titleOverride: "",
    type: "Round Robin", venue: "COL", locationDetail: "Paula Martin Jones",
    dupr: true, price: "$30",
    link: "https://anc.apm.activecommunities.com/longviewpard/activity/search/detail/4502?onlineSiteId=0&from_original_cui=true",
  },
  {
    date: "2026-07-28", time: "6:30 PM", endTime: "9:30 PM",
    gender: "Mixed", format: "Partner", rating: "7.0–7.5", extra: "(Cumulative, non-DUPR)", titleOverride: "",
    type: "Round Robin", venue: "MCC", locationDetail: "",
    dupr: false, price: "$20",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-58203515-marshall#/",
  },
  {
    date: "2026-08-03", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Women's", format: "Partner", rating: "2.5–2.99", extra: "", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-08-03", time: "6:00 PM", endTime: "9:00 PM",
    gender: "Men's", format: "Partner", rating: "3.0", extra: "w/Andrea", titleOverride: "",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-08-06", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Women's", format: "Partner", rating: "3.0–3.49", extra: "", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-64816339-fccpickleball#/",
  },
  {
    date: "2026-08-10", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Women's", format: "Individual", rating: "2.0–2.2", extra: "(Friendly, only 8 games, non-DUPR)", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: false, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-64816339-fccpickleball#/",
  },
  {
    date: "2026-08-10", time: "6:00 PM", endTime: "9:00 PM",
    gender: "Women's", format: "Partner", rating: "3.5", extra: "w/Andrea", titleOverride: "",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-08-11", time: "6:30 PM", endTime: "9:30 PM",
    gender: "Mixed", format: "", rating: "2.5", extra: "", titleOverride: "",
    type: "Round Robin", venue: "MCC", locationDetail: "",
    dupr: true, price: "$20",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-58203515-marshall#/",
  },
  {
    date: "2026-08-12", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Women's", format: "Partner", rating: "2.5", extra: "(ages 64+)", titleOverride: "",
    type: "Round Robin", venue: "COL", locationDetail: "Paula Martin Jones",
    dupr: true, price: "$30",
    link: "https://anc.apm.activecommunities.com/longviewpard/activity/search/detail/4504?onlineSiteId=0&from_original_cui=true",
  },
  {
    date: "2026-08-13", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Mixed", format: "Partner", rating: "3.0", extra: "", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-64816339-fccpickleball#/",
  },
  {
    date: "2026-08-17", time: "8:30 AM", endTime: "12:00 PM",
    gender: "Women's", format: "Partner", rating: "2.0–2.5", extra: "", titleOverride: "",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-64816339-fccpickleball#/",
  },
  {
    date: "2026-08-17", time: "6:00 PM", endTime: "9:00 PM",
    gender: "Mixed", format: "Partner", rating: "7.5+", extra: "(Cumulative, non-DUPR) w/Andrea", titleOverride: "",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: false, price: "$15",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-08-24", time: "8:30 AM", endTime: "10:30 AM",
    gender: "Men & Women", format: "", rating: "2.0+", extra: "", titleOverride: "",
    type: "Drill Time", venue: "FCC", locationDetail: "",
    dupr: false, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-64816339-fccpickleball#/",
  },
];
