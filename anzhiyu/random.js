var posts=["2026/04/01/hello-world/","2026/04/01/recent-notes/","2026/04/01/setup-log/","2026/04/01/workflow-notes/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };