/* =====================================================
   EDIT YOUR DETAILS HERE (only this block needs changes)
   ===================================================== */
const CONFIG = {
  tagline: "Editing visuals into experiences.",
  about: "I'm Harsh, an aspiring video editor using Adobe Premiere Pro. I enjoy creating high-energy short-form edits and exploring music, pacing, transitions, and visual storytelling. I'm seeking editing internships and freelance opportunities.",
  skills: ["Adobe Premiere Pro","Short-form editing","Music synchronization","Clip sequencing","Pacing","Visual storytelling"],
  showPlannedProjects: false,  // true = show the "Planned" placeholders

  // Contact: leave '' to hide. Email = address only; others = full links.
  contact: {
    email: "harshkhobra007@gmail.com",       // e.g. "harsh@example.com"
    instagram: "https://www.instagram.com/hashgz_editz/",   // e.g. "https://instagram.com/yourhandle"
    youtube: "https://www.youtube.com/@HashGZ",     // e.g. "https://youtube.com/@yourchannel"
    linkedin: "https://www.linkedin.com/in/harsh-khobra-1284a2242"     // e.g. "https://linkedin.com/in/yourname"
  },

  // Projects. Files live in /videos and /thumbs. Replace titles/descriptions with your own wording.
  // aspect = video shape: "16/9" landscape, "9/16" vertical, "1/1" square, "4/3". Planned items need no video.
  projects: [
    { id:"car-edit", title:"High-Energy Car Edit", featured:true, status:"live", aspect:"4/3",
      description:"A text-free automotive reel focused on music synchronization, pacing, and visual impact.",
      video:{ type:"mp4", url:"videos/car-edit.mp4" }, thumbnail:"thumbs/car-edit.jpg" },
    { id:"tin-reel", title:"TIN Reel", status:"live", aspect:"9/16",
      description:"Vertical short-form edit.",
      video:{ type:"mp4", url:"videos/tin-reel.mp4" }, thumbnail:"thumbs/tin-reel.jpg" },
    { id:"hi3-edit", title:"HI3 Edit", status:"live", aspect:"16/9",
      description:"Landscape anime-style edit.",
      video:{ type:"mp4", url:"videos/hi3-edit.mp4" }, thumbnail:"thumbs/hi3-edit.jpg" },
    { id:"tin-intro", title:"TIN Intro", status:"live", aspect:"1/1",
      description:"Short square intro animation.",
      video:{ type:"mp4", url:"videos/tin-intro.mp4" }, thumbnail:"thumbs/tin-intro.jpg" },
    { id:"character-over-text", title:"Character Over Text", status:"live", aspect:"16/9",
      description:"Short text-and-character layering test.",
      video:{ type:"mp4", url:"videos/character-over-text.mp4" }, thumbnail:"thumbs/character-over-text.jpg" },

    // Planned placeholders (hidden because showPlannedProjects is false)
    { id:"cinematic",  title:"Cinematic Reel",        status:"planned", aspect:"16/9", description:"Planned. Not yet completed.", video:{type:"mp4",url:""}, thumbnail:"" },
    { id:"product-ad", title:"Product Advertisement", status:"planned", aspect:"16/9", description:"Planned. Not yet completed.", video:{type:"mp4",url:""}, thumbnail:"" },
    { id:"event",      title:"Event Highlights",      status:"planned", aspect:"16/9", description:"Planned. Not yet completed.", video:{type:"mp4",url:""}, thumbnail:"" }
  ]
};
