Hydra.get("ping", function(request) {
  return "pong";
})

Hydra.get("account", async function(request) {
  return Hydra.Client.get("/accounts/me")
})
