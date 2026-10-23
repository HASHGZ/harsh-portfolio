/* =====================================================
   EDIT YOUR DETAILS HERE (only this block needs changes)
   ===================================================== */
const CONFIG = {
  tagline: "Editing visuals into experiences.",
  about: "I'm Harsh, an aspiring video editor using Adobe Premiere Pro. I enjoy creating high-energy short-form edits and exploring music, pacing, transitions, and visual storytelling. I'm seeking editing internships and freelance opportunities.",
  skills: ["Adobe Premiere Pro","Short-form editing","Music synchronization","Clip sequencing","Pacing","Visual storytelling"],
  showPlannedProjects: true,   // false = hide the "Planned" placeholders

  // Contact: leave '' to hide. Email = address only; others = full links.
  contact: {
    email: "",       // e.g. "harsh@example.com"
    instagram: "",   // e.g. "https://instagram.com/yourhandle"
    youtube: "",     // e.g. "https://youtube.com/@yourchannel"
    linkedin: ""     // e.g. "https://linkedin.com/in/yourname"
  },

  projects: [
    {
      id: "car-edit",
      title: "High-Energy Car Edit",
      description: "A text-free automotive reel focused on music synchronization, pacing, and visual impact.",
      status: "live",            // "live" or "planned"
      featured: true,
      orientation: "landscape",  // "vertical" if your reel is 9:16
      video: { type: "youtube", url: "" },   // <-- PASTE YOUR CAR REEL LINK HERE (type "youtube" or "mp4")
      thumbnail: ""              // optional image link, e.g. "thumb.jpg" next to this file
    },
    { id:"cinematic",  title:"Cinematic Reel",        description:"Planned. Not yet completed.", status:"planned", orientation:"landscape", video:{type:"youtube",url:""}, thumbnail:"" },
    { id:"product-ad", title:"Product Advertisement", description:"Planned. Not yet completed.", status:"planned", orientation:"landscape", video:{type:"youtube",url:""}, thumbnail:"" },
    { id:"event",      title:"Event Highlights",      description:"Planned. Not yet completed.", status:"planned", orientation:"landscape", video:{type:"youtube",url:""}, thumbnail:"" }
  ]
};
/* ================= END OF EDITABLE PART ================= */
