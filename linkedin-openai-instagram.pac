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

    // OpenAI / ChatGPT
    inDomain("openai.com") ||
    inDomain("chatgpt.com") ||
    inDomain("oaistatic.com") ||
    inDomain("oaiusercontent.com") ||

    // Instagram core + API + CDN
    inDomain("instagram.com") ||
    inDomain("instagr.am") ||
    inDomain("cdninstagram.com") ||
    inDomain("instagramcdn.com") ||

    // Meta domains often required by Instagram auth/content delivery
    inDomain("facebook.com") ||
    inDomain("fb.com") ||
    inDomain("facebook.net") ||
    inDomain("fbcdn.net") ||
    inDomain("fbsbx.com") ||
    inDomain("tfbnw.net")
  ) {
    return proxy;
  }

  return "DIRECT";
}
