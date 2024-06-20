# Encrypted Media Exensions v2 Self-Review Questionnaire: Security and Privacy

Questionnare: https://w3ctag.github.io/security-questionnaire/ (as at 24 May 2024)

## 2.1 What information does this feature expose, and for what purposes?

**Handling hardware context reset:** Information about certain device state changes will be exposed indirectly to Web sites, e.g. session closed due to "hardware context reset", which could be caused by using setting the device to sleep/resume, or switching monitors. Sites will not be able to know the exact reason. This exposure is necessary for sites to provide the best user experience.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.2 Do features in your specification expose the minimum amount of information necessary to implement the intended functionality?

**Handling hardware context reset:** Yes. It only expose an enum summarizing the reason.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.3 Do the features in your specification expose personal information, personally-identifiable information (PII), or information derived from either?

**Handling hardware context reset:** No such info is exposed.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.4 How do the features in your specification deal with sensitive information?

**Handling hardware context reset:** No sensitive information.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.5 Do the features in your specification introduce state that persists across browsing sessions?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO


## 2.6 Do the features in your specification expose information about the underlying platform to origins?

**Handling hardware context reset:** Currently "hardware context reset" only happens on Windows. So the site could guess it's an Windows OS if it happens.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.7 Does this specification allow an origin to send data to the underlying platform?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.8 Do features in this specification enable access to device sensors?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.9 Do features in this specification enable new script execution/loading mechanisms?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.10 Do features in this specification allow an origin to access other devices?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.11 Do features in this specification allow an origin some measure of control over a user agent’s native UI?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.12 What temporary identifiers do the features in this specification create or expose to the web?

**Handling hardware context reset:** No temporary identifiers.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.13 How does this specification distinguish between behavior in first-party and third-party contexts?

**Handling hardware context reset:** Not distinguished. But EME usage in general is controlled by permission policy. https://w3c.github.io/encrypted-media/#permissions-policy-integration

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.14 How do the features in this specification work in the context of a browser’s Private Browsing or Incognito mode?

**Handling hardware context reset:** No difference.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

## 2.15 Does this specification have both "Security Considerations" and "Privacy Considerations" sections?

Yes, see the [Security](https://w3c.github.io/encrypted-media/#security) and [Privacy](https://w3c.github.io/encrypted-media/#privacy) sections.

## 2.16 Do features in your specification enable origins to downgrade default security protections?

**Handling hardware context reset:** No.

**Querying encryption scheme support:** TODO

**HDCP policy detection:** TODO

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
