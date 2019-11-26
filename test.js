Hydra.get("ping", function(request) {
  return "pong";
})

Hydra.get("account", async function(request) {
  const response = await Hydra.Client.get("/accounts/me")
  return response.body
})
