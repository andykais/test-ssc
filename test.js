function sleep(seconds) {
  const later = new Date()
  later.setSeconds(later.getSeconds() + seconds)
  while (new Date() < later) {}
}

Hydra.onLoad(async function(response) {
  Logger.error(`Hydra.onLoad start ${new Date()}`);
  const serverAuth = Hydra.Client.authServer();
  
  sleep(5)
  
  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })
  await Hydra.Client.get('/health/time', { auth: serverAuth })

  Logger.error(`Hydra.onLoad complete ${new Date()}`);
});

Hydra.get('synchronous', function(request) {
  Logger.error('synchronous endpoint start');
  Logger.error('synchronous endpoint end');
  return { synchonous: true };
});

Hydra.get('d_resolved', function(request) {  
  Logger.error(`d_resolved endpoint start ${new Date()}`);

  sleep(5)

  var speedy_return_value = request.userRequest.queryparams.TestInput;
  Logger.error(`d_resolved endpoint end ${new Date()}`);
  return D.resolved({ d_resolved: 'complete' });
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


Hydra.get("how_do_i_return_errors", function(request) {
  return D.rejected(new Error("oi Im an error"))
})
