# EME Extension: HDCP Policy Check

## Motivation

A content license can contain a policy that the CDM must enforce. The ability
of a platform to enforce these policies is a key factor in deciding whether to
begin streaming media and at what quality (resolution and framerate).

HDCP is a common policy requirement for streaming high resolutions of protected
content. Currently, applications can only know if this requirements is met
through key statuses, which are only reported after providing a license. To
provide a license, applications must: generate a license request, post that
request to a license server, wait for the response, provide the response to the
CDM, wait for key status events, and check key statuses.

Application developers would like to know before fetching content if HDCP (and
what version) can be enforced. This would allow the application to start
pre-fetching high resolution content rather than starting at a low resolution or
waiting for the license exchange.

HDCP may be one of many requirements for a content license. The proposed
dictionary may later be extended to include other requirements as requested by
application developers. Feature detection can be done by developers by setting
throwing getters.


## Overview

The new API will allow application developers to query the status of a
hypothetical key associated with an HDCP policy, without the need to create a
MediaKeySession or fetch a real license. It does not require the MediaKeys to be
attached to any HTMLMediaElement, either.

If HDCP is available at the specified version, the promise should return
a MediaKeyStatus of "usable". Otherwise, the promise should return
a MediaKeyStatus of "output-restricted".  The determination of HDCP status
should be done in the same way that the CDM would enforce such a restriction
during playback.  In this way, application developers can get a reasonable hint
to allow them to optimize what content they fetch to start playback.

A MediaKeyStatus value of "status-pending" must never be returned. Implementers
must give decisive actionable return values for developers to make decisions
about what content to fetch.

```
dictionary MediaKeysPolicy {
  DOMString minHdcpVersion = "";
};

partial interface MediaKeys {
  Promise<MediaKeyStatus> getStatusForPolicy(MediaKeysPolicy policy);
}
```

The HDCP versions will be kept in a registry. The initial list will contain:
```
 - 1.0
 - 1.1
 - 1.2
 - 1.3
 - 1.4
 - 2.0
 - 2.1
 - 2.2
 - 2.3

```


## Examples

```js
video.mediaKeys.getStatusForPolicy({
  minHdcpVersion: '1.0'
}).then(status => {
  if (status === 'usable') {
    // Pre-fetch HD content.
  } else {  // such as 'output-restricted' or 'output-downscaled'
    // Pre-fetch SD content.
  }
});
```


## Privacy Considerations

This would allow an application to discover HDCP availability. HDCP is widely
available on most modern operating systems and display types. It is not expected
to add much entropy for fingerprinting.

As access to this API is gated by the async `requestMediaKeySystemAccess()` which
may require user consent, the HDCP privacy concerns are the same as the
[EME ones](https://w3c.github.io/encrypted-media/#privacy).
