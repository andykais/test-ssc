Hydra.onLoad(async function(response) {
  Logger.error('Hydra.onLoad start');
  const serverAuth = Hydra.Client.authServer();

  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })

  Logger.error('Hydra.onLoad complete');
});

Hydra.get('synchronous', function(request) {
  Logger.error('synchronous endpoint start');
  Logger.error('synchronous endpoint end');
  return { synchonous: true };
});

Hydra.get('d_resolved', function(request) {
  Logger.error('d_resolved endpoint start');
  var speedy_return_value = request.userRequest.queryparams.TestInput;
  Logger.error('d_resolved endpoint end');
  return D.resolved(speedy_return_value);
});

Hydra.get('promise', function(request) {
  return new Promise(resolve => {
    Logger.error('fast_return endpoint start');
    Hydra.Client.get('/health/check').then(() => {
      Logger.error('promise endpoint resolve');
      resolve(true);
    });
  });
});

Hydra.get("ping", function(request) {
  return "pong";
})

Hydra.get("account", async function(request) {
  const response = await Hydra.Client.get("/accounts/me")
  return response.body
})

Hydra.get("get_account", async function(request) {
  const response = await Hydra.Client.get("/accounts/me")
  return new SSCSuccess(0, response.body)
})
