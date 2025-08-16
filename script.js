const messages = [
    "Keep going — you’re closer than you think 🚀",
    "Don’t quit. Great things take time ⏳",
    "You were born to do incredible things 🔥",
    "Doubt kills more dreams than failure ever will 💭",
    "Push yourself, because no one else is going to do it for you 💼",
    "Stay focused. Stay humble. Stay hungry 🎯",
    "Success doesn’t come from what you do occasionally, but what you do consistently 💡",
    "You’ve got what it takes — don’t let fear stop you 🛡️",
    "Small progress is still progress — keep moving 🐾",
    "You were made for more. Don’t settle 🌟",
    "The only limit is the one you set for yourself ⛰️",
    "Challenges are stepping stones to greatness 🚧",
    "Discipline beats motivation. Show up for yourself 🗓️",
    "Your dreams are valid — now chase them 🏃‍♀️",
    "Turn setbacks into comebacks 🔄",
    "Rise up. Show up. Never give up 💪",
    "Work hard in silence. Let your success be the noise 🔊",
    "Every champion was once a beginner 🥇",
    "Your only competition is the person you were yesterday ⌛",
    "Start where you are. Use what you have. Do what you can 🛠️"
  ];
  
  const usedinx = new Set();
   const messagepara= document.getElementById("message");
  function generate(){
    if(usedinx.size>=messages.length){
        usedinx.clear()
    }
    while(true){
        const randinx = Math.floor(Math.random() * messages.length);
        if(usedinx.has (randinx)) continue
        const message = messages[randinx];
    messagepara.innerHTML=message;
    break;
    }
   
  }
  