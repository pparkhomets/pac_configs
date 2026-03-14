function FindProxyForURL(url, host) {
  var proxy = "PROXY 194.87.227.114:3128";

  host = host.toLowerCase();
  if (host.charAt(host.length - 1) === ".") {
    host = host.slice(0, -1);
  }

  function inDomain(domain) {
    return host === domain || dnsDomainIs(host, "." + domain);
  }

  if (
    // LinkedIn
    inDomain("linkedin.com") ||
    inDomain("licdn.com") ||

    // OpenAI / ChatGPT core
    inDomain("openai.com") ||
    inDomain("chatgpt.com") ||
    inDomain("oaistatic.com") ||
    inDomain("oaiusercontent.com") ||

    // OpenAI-recommended allowlist dependencies for ChatGPT web/app access
    inDomain("ct.sendgrid.net") ||
    inDomain("featuregates.org") ||
    inDomain("featureassets.org") ||
    inDomain("intercom.io") ||
    inDomain("intercomcdn.com") ||
    inDomain("statsig.com") ||
    inDomain("statsigapi.net") ||
    inDomain("workos.com") ||
    inDomain("workoscdn.com") ||
    inDomain("imgix.net") ||
    inDomain("cloudflare.com") ||
    inDomain("stripe.com") ||
    inDomain("sentry.io") ||
    inDomain("datadoghq.com") ||
    inDomain("prodregistryv2.org") ||
    inDomain("openaimerge.com") ||

    // Additional hosts seen in real OpenAI/API flows
    inDomain("auth0.com") ||
    inDomain("azureedge.net") ||

    // Google Meet web/app connectivity
    inDomain("meet.google.com") ||
    inDomain("stream.meet.google.com") ||
    inDomain("meetings.googleapis.com") ||
    inDomain("hangouts.googleapis.com") ||
    inDomain("apis.google.com") ||
    inDomain("accounts.google.com") ||
    inDomain("apps.google.com") ||
    inDomain("docs.google.com") ||
    inDomain("clients2.google.com") ||
    inDomain("clients4.google.com") ||
    inDomain("clients6.google.com") ||
    inDomain("meetings.clients6.google.com") ||
    inDomain("gstatic.com") ||
    inDomain("googleusercontent.com")
  ) {
    return proxy;
  }

  return "DIRECT";
}
