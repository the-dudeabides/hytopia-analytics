import fetch from "node-fetch";
import fs from "fs";

const MIXPANEL_URL = "https://mixpanel.com/api/app/public/dashboard-cards";

const PAYLOAD = {
  uuid: "f795992e-9bb9-4e39-9ba4-ce98ac1908a0",
  bookmark_id: 8602254,
  endpoint: "insights",
  query_origin: "dashboard_public"
};

async function pullMixpanel() {
  const res = await fetch(MIXPANEL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(PAYLOAD)
  });

  const data = await res.json();

  fs.writeFileSync("./mixpanel-data.json", JSON.stringify(data, null, 2));

  console.log("Mixpanel data updated at:", new Date().toISOString());
}

pullMixpanel();
