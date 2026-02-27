export const siteConfig = {
  name: "College Connect",
  description:
    "Find study partners, event companions, and ride shares within the verified RIT community. Built to help students build meaningful relationships, not just connections.",
  tagline: "Your Campus, Connected.",
  url: "https://cc.g-umoren.net",

  appStore: "#",
  playStore: "#",
  storeButtonsDisabled: true,

  installUrl:
    "itms-services://?action=download-manifest&url=https://cc.g-umoren.net/manifest.plist",
  installPassword: "0110110",
  appVersion: "1.0.0",

  heroDescription:
    "CollegeConnect is a mobile-first platform for RIT students to find study partners, event companions, and ride shares — all within a verified, low-pressure campus community.",

  features: [
    {
      title: "Verified RIT Community",
      description:
        "Sign in with Google or your @rit.edu email. Every user is verified — no strangers, no bots, just your campus.",
      icon: "ShieldCheck" as const,
    },
    {
      title: "Smart Matching",
      description:
        "Discover students by shared courses, interests, major, and availability. Compatibility scores surface the best matches first.",
      icon: "Sparkles" as const,
    },
    {
      title: "Study Buddy",
      description:
        "Find study partners for your courses. Form study groups, schedule sessions, and match by study style — solo, pair, or group.",
      icon: "BookOpen" as const,
    },
    {
      title: "Real-time Messaging",
      description:
        "Chat instantly with connections. Typing indicators, read receipts, group chats, and image sharing — all in real time via WebSockets.",
      icon: "MessageCircle" as const,
    },
    {
      title: "Event Buddy",
      description:
        "Never go to an event alone. Browse campus events, RSVP, and find companions who want to go too.",
      icon: "CalendarHeart" as const,
    },
    {
      title: "Ride Board",
      description:
        "Coordinate rides for break travel, daily commutes, and airport runs. Post offers or requests, split gas costs, and travel with verified students.",
      icon: "Car" as const,
    },
  ],

  faq: [
    {
      question: "Who can use College Connect?",
      answer:
        "Any RIT student with an @rit.edu email. You can register with email/password or sign in with Google — as long as the email is a verified RIT address.",
    },
    {
      question: "What makes this different from GroupMe or Discord?",
      answer:
        "CollegeConnect is purpose-built for campus life. Every user is RIT-verified. Features like Study Buddy, Event Buddy, and Ride Board are designed for student needs — not general-purpose chat.",
    },
    {
      question: "Is it free?",
      answer:
        "Yes, completely free. No ads, no premium tiers, no data selling. This is a student project built for students.",
    },
    {
      question: "What platforms are supported?",
      answer:
        "iOS and Android via a single React Native app. Built with Expo for cross-platform consistency.",
    },
    {
      question: "How does matching work?",
      answer:
        "Compatibility scores are calculated from shared courses, interests, major, graduation year, housing area, and availability. Shared courses are weighted highest — same class means an instant conversation starter.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. JWT authentication with refresh token rotation, encrypted storage on device, and no third-party analytics. You can delete your account and all data at any time.",
    },
  ],

  creator: {
    name: "Godson Umoren",
    link: "https://godsonumoren.com",
  },
};
