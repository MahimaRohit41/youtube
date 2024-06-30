const comments = [
    "This is a fantastic post! Thanks for sharing.",
    "I completely agree with your points here.",
    "Can you provide more details on this topic?",
    "This was very helpful, thank you!",
    "I have a different perspective on this issue.",
    "Great insights, really made me think.",
    "I learned a lot from this post.",
    "Could you elaborate on the last point?",
    "This is exactly what I was looking for, thanks!",
    "Interesting perspective, I never thought of it that way."
  ];

  export function randomMessageGenerator() {
    return comments[Math.floor(Math.random() * comments.length)];
  }