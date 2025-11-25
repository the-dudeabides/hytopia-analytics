  const res = await fetch(MIXPANEL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Origin": "https://mixpanel.com",
      "Referer": "https://mixpanel.com/",
      "User-Agent": "Mozilla/5.0 (compatible; GitHubActionsBot/1.0)"
    },
    body: JSON.stringify(PAYLOAD)
  });
