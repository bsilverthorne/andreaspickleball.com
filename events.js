// ============================================================
//  ANDREA'S PICKLEBALL — EVENT DATA
//
//  This is the ONLY file you need to edit to update the website.
//
//  To add an event: copy one of the blocks between { and },
//  paste it in date order, and change the details.
//  To remove an event: delete its block (from { to },).
//  Past events disappear from the site automatically — you
//  don't have to delete them right away.
//
//  Field guide:
//    date     — "YYYY-MM-DD"  (e.g. "2026-06-15")
//    time     — start time, e.g. "8:30 AM"
//    endTime  — optional, e.g. "12:00 PM" (leave "" if unknown)
//    title    — what shows in bold on the card
//    type     — "Round Robin", "Clinic", or "Drill Time"
//    venue    — "LPC", "FCC", "MCC", or "COL" (controls the color)
//    locationDetail — optional, e.g. "Broughton Rec Center"
//    dupr     — true if DUPR-rated, false if not
//    price    — e.g. "$15" (leave "" to hide)
//    link     — the signup page people land on when they click
// ============================================================

const VENUES = {
  LPC: { name: "Longview Pickleball Club", color: "#2d7a4f", link: "https://www.longviewpickleballclub.com/events" },
  FCC: { name: "First Christian Church",   color: "#d4a017", link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/" },
  MCC: { name: "Marshall Convention Center", color: "#e07b39", link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-58203515-marshall#/" },
  COL: { name: "City of Longview",         color: "#2c5f8a", link: "https://anc.apm.activecommunities.com/longviewpard/activity/search?activity_keyword=pickleball" },
};

// Extra links shown in the footer (FCC Youth has its own signup page)
const FOOTER_LINKS = [
  { label: "LPC Events",  url: "https://www.longviewpickleballclub.com/events" },
  { label: "FCC Adult Signups", url: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/" },
  { label: "FCC Youth Signups", url: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-64383324-youth#/" },
  { label: "MCC Signups", url: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-58203515-marshall#/" },
  { label: "City of Longview Registration", url: "https://anc.apm.activecommunities.com/longviewpard/activity/search?activity_keyword=pickleball" },
];

const EVENTS = [
  {
    date: "2026-06-09", time: "8:30 AM", endTime: "12:00 PM",
    title: "Mixed 3.0–3.5 Round Robin",
    type: "Round Robin", venue: "MCC", locationDetail: "",
    dupr: true, price: "$20",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-58203515-marshall#/",
  },
  {
    date: "2026-06-10", time: "9:00 AM", endTime: "11:30 AM",
    title: "Beginner Pickleball Clinic (Level One)",
    type: "Clinic", venue: "COL", locationDetail: "Broughton Rec Center",
    dupr: false, price: "",
    link: "https://anc.apm.activecommunities.com/longviewpard/activity/search/detail/4444?onlineSiteId=0&from_original_cui=true",
  },
  {
    date: "2026-06-15", time: "8:30 AM", endTime: "",
    title: "Women's Partner 2.5–2.99 Round Robin",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-06-15", time: "6:00 PM", endTime: "9:00 PM",
    title: "Mixed Partner 3.0 Round Robin w/Andrea",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$30",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-06-17", time: "9:00 AM", endTime: "12:30 PM",
    title: "Women's 2.5 DUPR Rated Round Robin",
    type: "Round Robin", venue: "COL", locationDetail: "Broughton Rec Center",
    dupr: true, price: "$15",
    link: "https://anc.apm.activecommunities.com/longviewpard/activity/search/detail/4445?onlineSiteId=0&from_original_cui=true",
  },
  {
    date: "2026-06-18", time: "8:30 AM", endTime: "",
    title: "3.0+ Drill Time (Men & Women)",
    type: "Drill Time", venue: "FCC", locationDetail: "",
    dupr: false, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-06-22", time: "8:00 AM", endTime: "",
    title: "Women's Partner 2.5–2.99 Round Robin",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-06-22", time: "6:00 PM", endTime: "9:00 PM",
    title: "Men's 3.0 Round Robin w/Andrea",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-06-23", time: "8:30 AM", endTime: "",
    title: "Youth 3.0 Round Robin (ages 14–18)",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: false, price: "",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-64383324-youth#/",
  },
  {
    date: "2026-06-24", time: "8:30 AM", endTime: "",
    title: "Women's Partner 2.0–2.49 Round Robin",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-06-25", time: "8:30 AM", endTime: "",
    title: "3.3 Women's Round Robin (non-DUPR)",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: false, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-06-29", time: "8:30 AM", endTime: "",
    title: "Mixed 2.5 Round Robin",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-06-29", time: "6:00 PM", endTime: "9:00 PM",
    title: "Women's 2.0 Round Robin w/Andrea",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.longviewpickleballclub.com/events",
  },
  {
    date: "2026-06-30", time: "6:30 PM", endTime: "",
    title: "Mixed 3.5–3.99 Round Robin",
    type: "Round Robin", venue: "MCC", locationDetail: "",
    dupr: true, price: "$20",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-58203515-marshall#/",
  },
  {
    date: "2026-07-02", time: "8:30 AM", endTime: "",
    title: "Women's Partner 3.0–3.49 Round Robin (4th of July Theme)",
    type: "Round Robin", venue: "FCC", locationDetail: "",
    dupr: true, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-07-06", time: "8:30 AM", endTime: "",
    title: "2.0–2.99 Drill Time (Men & Women)",
    type: "Drill Time", venue: "FCC", locationDetail: "",
    dupr: false, price: "$15",
    link: "https://www.signupgenius.com/go/10C0C4BADAD23A0FC1-61342694-fccround#/",
  },
  {
    date: "2026-07-06", time: "6:00 PM", endTime: "9:00 PM",
    title: "Mixed 3.5 Round Robin w/Andrea",
    type: "Round Robin", venue: "LPC", locationDetail: "",
    dupr: true, price: "$30",
    link: "https://www.longviewpickleballclub.com/events",
  },
];
