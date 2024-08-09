# Encrypted Media Exensions v2 Self-Review Questionnaire: Security and Privacy

Questionnare: https://w3ctag.github.io/security-questionnaire/ (as at 24 May 2024)

## 2.1 What information does this feature expose, and for what purposes?

**Handling hardware context reset:** Information about certain device state changes will be exposed indirectly to Web sites, e.g. session closed due to "hardware context reset", which could be caused by using setting the device to sleep/resume, or switching monitors. Sites will not be able to know the exact reason. This exposure is necessary for sites to provide the best user experience.

**Querying encryption scheme support:** The API exposes whether the implementation supports CENC or CBCS encryption, or both. These two encryption schemes are incompatible, so the API allows websites to make intelligent choices about what content to serve to which user agents.

**HDCP policy detection:** The API exposes whether a HDCP version is supported by the implementation. This allows websites to know before fetching content if HDCP (and what version) can be enforced, which allows them, for example, to start pre-fetching high resolution content rather than starting at a low resolution or waiting for the license exchange.

## 2.2 Do features in your specification expose the minimum amount of information necessary to implement the intended functionality?

**Handling hardware context reset:** Yes. It only exposes an enum summarizing the reason.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.3 Do the features in your specification expose personal information, personally-identifiable information (PII), or information derived from either?

**Handling hardware context reset:** No such information is exposed.

**Querying encryption scheme support:** No such information is exposed.

**HDCP policy detection:** No such information is exposed.

## 2.4 How do the features in your specification deal with sensitive information?

**Handling hardware context reset:** The features do not deal with any sensitive information.

**Querying encryption scheme support:** The features do not deal with any sensitive information.

**HDCP policy detection:** The features do not deal with any sensitive information.

## 2.5 Do the features in your specification introduce state that persists across browsing sessions?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** No.

**HDCP policy detection:** No.

## 2.6 Do the features in your specification expose information about the underlying platform to origins?

**Handling hardware context reset:** Currently "hardware context reset" only happens on Windows. So the site could guess it's an Windows OS if it happens.

**Querying encryption scheme support:** The `MediaKeySystemMediaCapability.encryptionScheme` attribute, returned from MediaKeySystemAccess.getConfiguration(), indicates the encryption scheme associated with the content type. This gives an indication of which encryption schemes the underlying platform supports.

**HDCP policy detection:** The `MediaKeys.getStatusForPolicy()` method returns information about which HDCP policy versions the underlying platform supports.

## 2.7 Does this specification allow an origin to send data to the underlying platform?

EME allows an origin to send encrypted media to a platform-level content decryption module (CDM) for playback, as well as a browser-intermediated negotiation of license keys between the origin and the CDM.

**Handling hardware context reset:** No additional data beyond the above.

**Querying encryption scheme support:** No additional data beyond the above.

**HDCP policy detection:** No additional data beyond the above.

## 2.8 Do features in this specification enable access to device sensors?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** No.

**HDCP policy detection:** No.

## 2.9 Do features in this specification enable new script execution/loading mechanisms?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** No.

**HDCP policy detection:** No.

## 2.10 Do features in this specification allow an origin to access other devices?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** No.

**HDCP policy detection:** No.

## 2.11 Do features in this specification allow an origin some measure of control over a user agent’s native UI?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** No.

**HDCP policy detection:** No.

## 2.12 What temporary identifiers do the features in this specification create or expose to the web?

**Handling hardware context reset:** No temporary identifiers.

**Querying encryption scheme support:** No temporary identifiers.

**HDCP policy detection:** No temporary identifiers.

## 2.13 How does this specification distinguish between behavior in first-party and third-party contexts?

**Handling hardware context reset:** Not distinguished. But EME usage in general is controlled by permission policy. https://w3c.github.io/encrypted-media/#permissions-policy-integration

**Querying encryption scheme support:** As above.

**HDCP policy detection:** As above.

## 2.14 How do the features in this specification work in the context of a browser’s Private Browsing or Incognito mode?

**Handling hardware context reset:** No difference.

**Querying encryption scheme support:** No difference.

**HDCP policy detection:** No difference.

## 2.15 Does this specification have both "Security Considerations" and "Privacy Considerations" sections?

Yes, see the [Security](https://w3c.github.io/encrypted-media/#security) and [Privacy](https://w3c.github.io/encrypted-media/#privacy) sections.

## 2.16 Do features in your specification enable origins to downgrade default security protections?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** No.

**HDCP policy detection:** No.

## 2.17 What happens when a document that uses your feature is kept alive in BFCache (instead of getting destroyed) after navigation, and potentially gets reused on future navigations back to the document?

**Handling hardware context reset:** TODO

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.18 What happens when a document that uses your feature gets disconnected?

**Handling hardware context reset:** TODO

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.19 What should this questionnaire have asked?

N/A
