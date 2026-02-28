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
    inDomain("linkedin.com") ||
    inDomain("licdn.com") ||
    inDomain("openai.com") ||
    inDomain("chatgpt.com") ||
    inDomain("oaistatic.com") ||
    inDomain("oaiusercontent.com")
  ) {
    return proxy;
  }

  return "DIRECT";
}
