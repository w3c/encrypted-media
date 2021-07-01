(function() {
  var EME_spec_url = "https://www.w3.org/TR/encrypted-media/";
  var HTML_spec_url = "https://www.w3.org/TR/html51/semantics-embedded-content.html";
  var DOM_spec_url = "https://www.w3.org/TR/dom/";
  var IDL_spec_url = "https://www.w3.org/TR/WebIDL-1/";

  function url_helper(doc, url) {
    if (url[0] == "#" && doc.emeDefGroupName != window.respecConfig.emeDefGroupName) {
        return groupBaseURLs[doc.emeDefGroupName] + url;
    }
    return url;
  }

  function eventdfn_helper(doc, df, id, text) {
    df.appendChild($("<dfn/>").attr({id: 'dom-evt-' + text.toLowerCase()}).wrapInner($("<code/>").text(text))[0]);
  }

  function idlref_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: url_helper(doc, "#" + id)}).text(text))[0]);
  }

  function eventref_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: url_helper(doc, "#dom-evt-" + id)}).text(text))[0]);
  }

  function videoref_helper(doc, df, id, text) {
    link_helper(doc, df, HTML_spec_url + '#' + id, text);
  }

  function code_videoref_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: HTML_spec_url + "#" + id}).text(text))[0]);
  }

  function encodingapi_helper(doc, df, id, text) {
    link_helper(doc, df, 'https://www.w3.org/TR/encoding/#' + id, text);
  }

  function webappapis_helper(doc, df, id, text) {
    link_helper(doc, df, 'https://www.w3.org/TR/html51/webappapis.html#' + id, text);
  }

  function infrastructure_helper(doc, df, id, text) {
    link_helper(doc, df, 'https://www.w3.org/TR/html51/infrastructure.html#' + id, text);
  }

  function browsers_helper(doc, df, id, text) {
    link_helper(doc, df, 'https://www.w3.org/TR/html51/browsers.html#' + id, text);
  }

  function mixedcontent_helper(doc, df, id, text) {
    link_helper(doc, df, 'https://www.w3.org/TR/mixed-content/#' + id, text);
  }

  function term_helper(doc, df, id, text) {
    link_helper(doc, df, url_helper(doc, '#' + id), text);
  }

  function var_helper(doc, df, id, text) {
    df.appendChild($("<var/>").wrapInner($("<a/>").attr({href: url_helper(doc, "#" + id)}).text(text))[0]);
  }

  function link_helper(doc, df, id, text) {
    df.appendChild($("<a/>").attr({href: url_helper(doc, id)}).text(text)[0]);
  }

  function dom_helper(doc, df, id, text) {
    link_helper(doc, df, DOM_spec_url + '#' + id, text);
  }

  function code_dom_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: DOM_spec_url + "#" + id}).text(text))[0]);
  }

  function webidl_helper(doc, df, id, text) {
    link_helper(doc, df, IDL_spec_url + '#' + id, text);
  }

  function code_webidl_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: IDL_spec_url + "#" + id}).text(text))[0]);
  }
  function domexception_helper(doc, df, id) {
    code_webidl_helper(doc, df, 'dfn-DOMException', "DOMException");
  }

  function new_domexception_helper(doc, df, id) {
    df.appendChild(doc.createTextNode('a new '));
    domexception_helper(doc, df, id)
    df.appendChild(doc.createTextNode(' whose name is'));
  }

  function exception_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: DOM_spec_url + '#dom-domexception-' + id}).text(text))[0]);
  }

  function local_exception_helper(doc, df, id, text) {
    df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: url_helper(doc, "#dfn-" + text)}).text(text))[0]);
  }

  function appropriate_error_name_helper(doc, df, id, text) {
    df.appendChild(doc.createTextNode('the appropriate '));
    term_helper(doc, df, 'error-names', 'error name');
  }
  function webmref_helper(doc, df, id, text) {
    link_helper(doc, df, 'https://www.webmproject.org/docs/container/#' + id, text);
  }

  function queue_and_fire_helper(doc, df, id, text) {
    webappapis_helper(doc, df, 'queuing', text);
    df.appendChild(doc.createTextNode(' to '));
    webappapis_helper(doc, df, 'firing-a-simple-event-named-e', 'fire a simple event');
    df.appendChild(doc.createTextNode(' named'));
  }

  function queue_helper(doc, df, id, text) {
    webappapis_helper(doc, df, 'queuing', text);
  }

  function queue_and_fire_track_event_helper(doc, df, id, text) {
    webappapis_helper(doc, df, 'queuing', 'Queue a task');
    df.appendChild(doc.createTextNode(' to fire a '));
    infrastructure_helper(doc, df, 'concept-events-trusted', 'trusted event');
    df.appendChild(doc.createTextNode(' named '));
    code_videoref_helper(doc, df, 'handler-tracklist-on' + text, text);
    df.appendChild(doc.createTextNode(', that does not bubble and is not cancelable, and that uses the '));
    code_videoref_helper(doc, df, 'trackevent', 'TrackEvent');
    df.appendChild(doc.createTextNode(' interface,'));
  }

  function queue_and_run_helper(doc, df, id, text) {
    webappapis_helper(doc, df, 'queuing', text);
    df.appendChild(doc.createTextNode(' to run the'));
  }

  function fragment_helper(doc, df, id, text) {
    var f = doc.createElement('span')
    f.innerHTML = text;
    df.appendChild(f);
  }

  function contributors_helper(doc, df, id, text) {
    var contributors = window.respecConfig.emeContributors;
    contributors.sort();

    var str = "";
    for (var i = 0; i < contributors.length - 1; ++i) {
      if (i > 0)
        str += ", ";
      str += contributors[i];
    }
    str += ", and ";
    str += contributors[contributors.length - 1];

    df.appendChild(doc.createTextNode(str));
  }

  var emeDefinitions = {
    'cdm': { func: term_helper, fragment: 'cdm', link_text: 'CDM'  },
    'keysystem': { func: term_helper, fragment: 'key-system', link_text: 'Key System'  },
    'keysystems': { func: term_helper, fragment: 'key-system', link_text: 'Key Systems'  },
    'key-id': { func: term_helper, fragment: 'decryption-key-id', link_text: 'key ID'  },
    'usable-for-decryption': { func: term_helper, fragment: 'usable-for-decryption', link_text: 'usable for decryption'  },
    'initialization-data': { func: term_helper, fragment: 'initialization-data', link_text: 'Initialization Data'  },
    'initialization-data-type': { func: term_helper, fragment: 'initialization-data-type', link_text: 'Initialization Data Type'  },
    'session-id': { func: term_helper, fragment: 'session-id', link_text: 'Session ID'  },
    'associable': { func: term_helper, fragment: 'associable', link_text: 'associable'  },
    'non-associable': { func: term_helper, fragment: 'non-associable', link_text: 'non-associable'  },
    'non-associable-by-application': { func: term_helper, fragment: 'non-associable-by-application', link_text: 'non-associable by applications'  },
    'distinctive-permanent-identifier': { func: term_helper, fragment: 'distinctive-permanent-identifier', link_text: 'Distinctive Permanent Identifier'  },
    'distinctive-permanent-identifier-maybe-plural': { func: term_helper, fragment: 'distinctive-permanent-identifier', link_text: 'Distinctive Permanent Identifier(s)'  },
    'distinctive-permanent-identifiers': { func: term_helper, fragment: 'distinctive-permanent-identifier', link_text: 'Distinctive Permanent Identifiers'  },
    'distinctive-identifier': { func: term_helper, fragment: 'distinctive-identifier', link_text: 'Distinctive Identifier'  },
    'distinctive-identifier-maybe-plural': { func: term_helper, fragment: 'distinctive-identifier', link_text: 'Distinctive Identifier(s)'  },
    'distinctive-identifiers': { func: term_helper, fragment: 'distinctive-identifier', link_text: 'Distinctive Identifiers'  },
    'expiration-time': { func: term_helper, fragment: 'expiration-time', link_text: 'expiration time' },
    'browsing-profile': { func: term_helper, fragment: 'browsing-profile', link_text: 'browsing profile' },
    'record-of-license-destruction': { func: term_helper, fragment: 'record-of-license-destruction', link_text: 'record of license destruction'  },
    'records-of-license-destruction': { func: term_helper, fragment: 'record-of-license-destruction', link_text: 'records of license destruction'  },
    'record-of-license-destruction-maybe-plural': { func: term_helper, fragment: 'record-of-license-destruction', link_text: 'record(s) of license destruction'  },
    'time': { func: term_helper, fragment: 'time', link_text: 'time'  },
    'valid-media-mime-type': { func: term_helper, fragment: 'valid-media-mime-type', link_text: 'valid media MIME type'  },

    'requestMediaKeySystemAccess': { func: idlref_helper, fragment: 'dom-navigator-requestmediakeysystemaccess', link_text: 'requestMediaKeySystemAccess()',  },
    'requestMediaKeySystemAccess-call': { func: idlref_helper, fragment: 'dom-navigator-requestmediakeysystemaccess', link_text: 'requestMediaKeySystemAccess',  },
    'get-consent-status-algorithm' : { func: term_helper, fragment: 'get-consent-status', link_text: 'Get Consent Status' },
    'get-supported-configuration-algorithm': { func: term_helper, fragment: 'get-supported-configuration', link_text: 'Get Supported Configuration',  },
    'get-supported-configuration-and-consent-algorithm': { func: term_helper, fragment: 'get-supported-configuration-and-consent', link_text: 'Get Supported Configuration and Consent',  },
    'get-supported-capabilities-for-audio-video-type-algorithm': { func: term_helper, fragment: 'get-supported-capabilities-for-audio-video-type', link_text: 'Get Supported Capabilities for Audio/Video Type',  },

    'requirement-required': { func: idlref_helper, fragment: 'idl-def-MediaKeysRequirement.required', link_text: '"required"',  },
    'requirement-optional': { func: idlref_helper, fragment: 'idl-def-MediaKeysRequirement.optional', link_text: '"optional"',  },
    'requirement-not-allowed': { func: idlref_helper, fragment: 'idl-def-MediaKeysRequirement.not-allowed', link_text: '"not-allowed"',  },

    'scheme-cenc': { func: idlref_helper, fragment: 'scheme-cenc', link_text: '"cenc"',  },
    'scheme-cbcs': { func: idlref_helper, fragment: 'scheme-cbcs', link_text: '"cbcs"',  },
    'scheme-cbcs-restricted': { func: idlref_helper, fragment: 'scheme-cbcs-restricted', link_text: '"cbcs-restricted"',  },

    'option-label': { func: idlref_helper, fragment: 'dom-mediakeysystemconfiguration-label', link_text: 'label',  },
    'option-initDataTypes': { func: idlref_helper, fragment: 'dom-mediakeysystemconfiguration-initdatatypes', link_text: 'initDataTypes',  },
    'option-audioCapabilities': { func: idlref_helper, fragment: 'dom-mediakeysystemconfiguration-audiocapabilities', link_text: 'audioCapabilities',  },
    'option-videoCapabilities': { func: idlref_helper, fragment: 'dom-mediakeysystemconfiguration-videocapabilities', link_text: 'videoCapabilities',  },
    'option-persistentState': { func: idlref_helper, fragment: 'dom-mediakeysystemconfiguration-persistentstate', link_text: 'persistentState',  },
    'option-distinctiveIdentifier': { func: idlref_helper, fragment: 'dom-mediakeysystemconfiguration-distinctiveidentifier', link_text: 'distinctiveIdentifier',  },
    'option-sessionTypes': { func: idlref_helper, fragment: 'dom-mediakeysystemconfiguration-sessiontypes', link_text: 'sessionTypes',  },

    'capability-contentType' : { func: idlref_helper, fragment: 'dom-mediakeysystemmediacapability-contenttype', link_text: 'contentType',  },
    'capability-encryptionScheme' : { func: idlref_helper, fragment: 'dom-mediakeysystemmediacapability-encryptionscheme', link_text: 'encryptionScheme',  },
    'capability-robustness' : { func: idlref_helper, fragment: 'dom-mediakeysystemmediacapability-robustness', link_text: 'robustness',  },

    'keySystem-attribute': { func: idlref_helper, fragment: 'dom-mediakeysystemaccess-keysystem', link_text: 'keySystem',  },
    'getConfiguration': { func: idlref_helper, fragment: 'dom-mediakeysystemaccess-getconfiguration', link_text: 'getConfiguration()',  },
    'createMediaKeys-call': { func: idlref_helper, fragment: 'dom-mediakeysystemaccess-createmediakeys', link_text: 'createMediaKeys',  },

    'temporary-session': { func: idlref_helper, fragment: 'idl-def-MediaKeySessionType.temporary', link_text: '"temporary"',  },
    'persistent-license-session': { func: idlref_helper, fragment: 'idl-def-MediaKeySessionType.persistent-license', link_text: '"persistent-license"',  },
    'is-persistent-session-type-algorithm': { func: term_helper, fragment: 'is-persistent-session-type', link_text: 'Is persistent session type?',  },
    'cdm-unavailable-algorithm': { func: term_helper, fragment: 'cdm-unavailable', link_text: 'CDM Unavailable',  },

    'createSession-call': { func: idlref_helper, fragment: 'dom-mediakeys-createsession', link_text: 'createSession',  },
    'setServerCertificate': { func: idlref_helper, fragment: 'dom-mediakeys-setservercertificate', link_text: 'setServerCertificate()',  },
    'setServerCertificate-call': { func: idlref_helper, fragment: 'dom-mediakeys-setservercertificate', link_text: 'setServerCertificate',  },

    'statusmap-size': { func: idlref_helper, fragment: 'dom-mediakeystatusmap-size', link_text: 'size',  },

    'reason-internal-error': { func: idlref_helper, fragment: 'dom-mediakeysessionclosedreason-internal-error', link_text: '"internal-error"',  },
    'reason-closed-by-application': { func: idlref_helper, fragment: 'dom-mediakeysessionclosedreason-closed-by-application', link_text: '"closed-by-application"',  },
    'reason-release-acknowledged': { func: idlref_helper, fragment: 'dom-mediakeysessionclosedreason-release-acknowledged', link_text: '"release-acknowledged"',  },
    'reason-hardware-context-reset': { func: idlref_helper, fragment: 'dom-mediakeysessionclosedreason-hardware-context-reset', link_text: '"hardware-context-reset"',  },
    'reason-resource-evicted': { func: idlref_helper, fragment: 'dom-mediakeysessionclosedreason-resource-evicted', link_text: '"resource-evicted"',  },

    'sessionId': { func: idlref_helper, fragment: 'dom-mediakeysession-sessionid', link_text: 'sessionId',  },
    'expiration': { func: idlref_helper, fragment: 'dom-mediakeysession-expiration', link_text: 'expiration',  },
    'closed': { func: idlref_helper, fragment: 'dom-mediakeysession-closed', link_text: 'closed',  },
    'keyStatuses': { func: idlref_helper, fragment: 'dom-mediakeysession-keystatuses', link_text: 'keyStatuses',  },
    'generateRequest': { func: idlref_helper, fragment: 'dom-mediakeysession-generaterequest', link_text: 'generateRequest()',  },
    'generateRequest-call': { func: idlref_helper, fragment: 'dom-mediakeysession-generaterequest', link_text: 'generateRequest',  },
    'load': { func: idlref_helper, fragment: 'dom-mediakeysession-load', link_text: 'load()',  },
    'load-call': { func: idlref_helper, fragment: 'dom-mediakeysession-load', link_text: 'load',  },
    'update': { func: idlref_helper, fragment: 'dom-mediakeysession-update', link_text: 'update()',  },
    'update-call': { func: idlref_helper, fragment: 'dom-mediakeysession-update', link_text: 'update',  },
    'close': { func: idlref_helper, fragment: 'dom-mediakeysession-close', link_text: 'close()',  },
    'close-call': { func: idlref_helper, fragment: 'dom-mediakeysession-close', link_text: 'close',  },
    'remove': { func: idlref_helper, fragment: 'dom-mediakeysession-remove', link_text: 'remove()',  },
    'remove-call': { func: idlref_helper, fragment: 'dom-mediakeysession-remove', link_text: 'remove',  },

    'status-usable': { func: idlref_helper, fragment: 'idl-def-MediaKeyStatus.usable', link_text: '"usable"',  },
    'status-expired': { func: idlref_helper, fragment: 'idl-def-MediaKeyStatus.expired', link_text: '"expired"',  },
    'status-released': { func: idlref_helper, fragment: 'idl-def-MediaKeyStatus.released', link_text: '"released"',  },
    'status-output-downscaled': { func: idlref_helper, fragment: 'idl-def-MediaKeyStatus.output-downscaled', link_text: '"output-downscaled"',  },
    'status-output-restricted': { func: idlref_helper, fragment: 'idl-def-MediaKeyStatus.output-restricted', link_text: '"output-restricted"',  },
    'status-status-pending': { func: idlref_helper, fragment: 'idl-def-MediaKeyStatus.status-pending', link_text: '"status-pending"',  },

    'queue-message-algorithm': { func: term_helper, fragment: 'queue-message', link_text: 'Queue a "message" Event',  },
    'session-closed-algorithm': { func: term_helper, fragment: 'session-closed', link_text: 'Session Closed',  },
    'monitor-cdm-algorithm': { func: term_helper, fragment: 'monitor-cdm', link_text: 'Monitor for CDM Changes',  },
    'encrypted-block-encountered-algorithm': { func: term_helper, fragment: 'encrypted-block-encountered', link_text: 'Encrypted Block Encountered',  },
    'attempt-to-decrypt-algorithm': { func: term_helper, fragment: 'attempt-to-decrypt', link_text: 'Attempt to Decrypt',  },
    'initdata-encountered-algorithm': { func: term_helper, fragment: 'initdata-encountered', link_text: 'Initialization Data Encountered',  },
    'update-key-statuses-algorithm': { func: term_helper, fragment: 'update-key-statuses', link_text: 'Update Key Statuses',  },
    'update-expiration-algorithm': { func: term_helper, fragment: 'update-expiration', link_text: 'Update Expiration',  },
    'resume-playback-algorithm': { func: term_helper, fragment: 'resume-playback', link_text: 'Attempt to Resume Playback If Necessary',  },
    'wait-for-key-algorithm': { func: term_helper, fragment: 'wait-for-key', link_text: 'Wait for Key',  },

    'media-key-session-closed' : { func: term_helper, fragment: 'media-key-session-closed', link_text: 'closed', },

    'media-keys-storage': { func: term_helper, fragment: 'media-keys-storage', link_text: 'Storage and Persistence',  },
    'session-storage': { func: term_helper, fragment: 'session-storage', link_text: 'Session Storage and Persistence',  },

    'mediaKeys-attribute': { func: idlref_helper, fragment: 'dom-mediakeys', link_text: 'mediaKeys',  },
    'onencrypted': { func: idlref_helper, fragment: 'dom-htmlmediaelement-onencrypted', link_text: 'onencrypted',  },
    'setMediaKeys': { func: idlref_helper, fragment: 'dom-htmlmediaelement-setmediakeys', link_text: 'setMediaKeys()',  },
    'setMediaKeys-call': { func: idlref_helper, fragment: 'dom-htmlmediaelement-setmediakeys', link_text: 'setMediaKeys',  },

    'keystatuseschange': { func: eventref_helper, fragment: 'keystatuseschange', link_text: 'keystatuseschange',  },
    'message': { func: eventref_helper, fragment: 'message', link_text: 'message',  },
    'encrypted': { func: eventref_helper, fragment: 'encrypted', link_text: 'encrypted',  },
    'waitingforkey': { func: eventref_helper, fragment: 'waitingforkey', link_text: 'waitingforkey',  },

    'message-type-license-request': { func: idlref_helper, fragment: 'idl-def-MediaKeyMessageType.license-request', link_text: '"license-request"',  },
    'message-type-license-renewal': { func: idlref_helper, fragment: 'idl-def-MediaKeyMessageType.license-renewal', link_text: '"license-renewal"',  },
    'message-type-license-release': { func: idlref_helper, fragment: 'idl-def-MediaKeyMessageType.license-release', link_text: '"license-release"',  },
    'message-type-individualization-request': { func: idlref_helper, fragment: 'idl-def-MediaKeyMessageType.individualization-request', link_text: '"individualization-request"',  },

    'message-event-messagetype-attribute': { func: idlref_helper, fragment: 'dom-mediakeymessageevent-messagetype', link_text: 'messageType',  },
    'message-event-message-attribute': { func: idlref_helper, fragment: 'dom-mediakeymessageevent-message', link_text: 'message',  },

    'encrypted-event-initdatatype-attribute': { func: idlref_helper, fragment: 'dom-mediaencryptedevent-initdatatype', link_text: 'initDataType',  },
    'encrypted-event-initdata-attribute': { func: idlref_helper, fragment: 'dom-mediaencryptedevent-initdata', link_text: 'initData',  },

    'NotSupportedError': { func: local_exception_helper, fragment: '', link_text: 'NotSupportedError'  },
    'InvalidStateError': { func: local_exception_helper, fragment: '', link_text: 'InvalidStateError'  },
    'TypeError': { func: local_exception_helper, fragment: '', link_text: 'TypeError'  },
    'QuotaExceededError': { func: local_exception_helper, fragment: '', link_text: 'QuotaExceededError'  },
    'appropriate-error-name': { func: appropriate_error_name_helper, fragment: '', },

    'interface-textdecoder': { func: encodingapi_helper, fragment: 'interface-textdecoder', link_text: 'TextDecoder interface',  },
    'interface-textencoder': { func: encodingapi_helper, fragment: 'interface-textencoder', link_text: 'TextEncoder interface',  },
    'eventdfn': { func: eventdfn_helper, fragment: '', link_text: '', },
    'event': { func: code_dom_helper, fragment: 'event', link_text: 'Event', },

    'htmlmediaelement': { func: code_videoref_helper, fragment: 'htmlmediaelement-htmlmediaelement', link_text: 'HTMLMediaElement',  },
    'media-data': { func: videoref_helper, fragment: 'media-data', link_text: 'media data',  },
    'media-resource': { func: videoref_helper, fragment: 'media-resource', link_text: 'media resource',  },
    'media-crossorigin': { func: code_videoref_helper, fragment: 'element-attrdef-media-crossorigin', link_text: 'crossorigin',  },
    'mime-types': { func: videoref_helper, fragment: 'mime-types', link_text: 'MIME types',  },
    'valid-mime-type': { func: infrastructure_helper, fragment: 'valid-mime-type', link_text: 'valid MIME type',  },
    'loading-the-media-resource': { func: videoref_helper, fragment: 'loading-the-media-resource', link_text: 'loading the media resource',  },
    'resource-fetch-algorithm': { func: videoref_helper, fragment: 'resource-fetch-algorithm', link_text: 'resource fetch algorithm',  },
    'current-playback-position': { func: videoref_helper, fragment: 'current-position', link_text: 'current playback position',  },
    'blocked-media-element': { func: videoref_helper, fragment: 'blocked-media-element', link_text: 'blocked media element',  },
    'potentially-playing': { func: videoref_helper, fragment: 'potentially-playing', link_text: 'potentially playing',  },
    'direction-of-playback': { func: videoref_helper, fragment: 'direction-of-playback', link_text: 'direction of playback',  },
    'seeking': { func: videoref_helper, fragment: 'seeking', link_text: 'seeking',  },
    'readystate': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-readystate', link_text: 'readyState',  },
    'ready-states': { func: code_videoref_helper, fragment: 'ready-states', link_text: 'Ready States',  },
    'have-metadata': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_metadata', link_text: 'HAVE_METADATA',  },
    'have-current-data': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_current_data', link_text: 'HAVE_CURRENT_DATA',  },
    'have-future-data': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_future_data', link_text: 'HAVE_FUTURE_DATA',  },
    'have-enough-data': { func: code_videoref_helper, fragment: 'dom-htmlmediaelement-have_enough_data', link_text: 'HAVE_ENOUGH_DATA',  },
    'canplaythrough': { func: code_videoref_helper, fragment: 'eventdef-media-canplaythrough', link_text: 'canplaythrough',  },
    'timed-text-tracks': { func: code_videoref_helper, fragment: 'timed-text-tracks', link_text: 'timed text tracks',  },

    'media-data-is-corrupted': { func: videoref_helper, fragment: 'fatal-decode-error', link_text: 'media data is corrupted',  },

    'new-domexception-named': { func: new_domexception_helper, fragment: '', },
    'domexception': { func: domexception_helper, fragment: '', },
    'domexception-names': { func: webidl_helper, fragment: 'idl-DOMException-error-names', link_text: '', },
    'present-dictionary-member': { func: webidl_helper, fragment: 'dfn-present', link_text: 'present', },
    'not-present-dictionary-member': { func: webidl_helper, fragment: 'dfn-present', link_text: 'not present', },
    'simple-exception': { func: webidl_helper, fragment: 'dfn-simple-exception', link_text: 'simple exception', },
    'throw': { func: webidl_helper, fragment: 'dfn-throw', link_text: 'throw', },

    'Queue-a-task-to-fire-an-event-named': { func: queue_and_fire_helper, fragment: '', link_text: 'Queue a task',  },
    'Queue-a-task-to-run-algorithm': { func: queue_and_run_helper, fragment: '', link_text: 'Queue a task',  },
    'Queue-a-task': { func: queue_helper, fragment: '', link_text: 'Queue a task',  },
    'queue-a-task': { func: queue_helper, fragment: '', link_text: 'queue a task',  },

    'constructing-events': { func: dom_helper, fragment: 'constructing-events', link_text: 'Constructing events', },
    'document-concept': { func: dom_helper, fragment: 'concept-document', link_text: 'Document', },
    'origin': { func: browsers_helper, fragment: 'concept-cross-origin', link_text: 'origin', },
    'cors-same-origin': { func: browsers_helper, fragment: 'same-origin', link_text: 'CORS-same-origin', },

    'contributors': { func: contributors_helper, fragment: '', link_text: '', },
  };

  // These definitions referring to locations in the main EME spec are only referenced from the registry.
  // The URL fragment will get adjusted to the proper links in encryptedMediaPreProcessor.
  var emeRegistryReferencesDefinitions = {
    'eme-spec': { func: link_helper, fragment: '#', link_text: 'Encrypted Media Extensions', },
    'initdata-registry-cenc': { func: link_helper, fragment: 'EME-INITDATA-CENC', link_text: '"cenc" Initialization Data Format', },
    'cenc-common-system': { func: link_helper, fragment: 'EME-INITDATA-CENC#common-system', link_text: 'Common SystemID and PSSH Box Format', },
    'initdata-registry-keyids': { func: link_helper, fragment: 'EME-INITDATA-KEYIDS', link_text: '"keyids" Initialization Data Format', },
    'initdata-registry-webm': { func: link_helper, fragment: 'EME-INITDATA-WEBM', link_text: '"webm" Initialization Data Format', },
    'stream-registry': { func: link_helper, fragment: 'EME-STREAM-REGISTRY', link_text: 'Encrypted Media Extensions Stream Format Registry', },
    'stream-registry-webm': { func: link_helper, fragment: 'EME-STREAM-WEBM', link_text: 'WebM Stream Format', },
    'stream-registry-mp4': { func: link_helper, fragment: 'EME-STREAM-MP4', link_text: 'ISO Common Encryption (\'cenc\') Protection Scheme for ISO Base Media File Format Stream Format', },
    'clear-key': { func: term_helper, fragment: 'clear-key', link_text: 'Clear Key'  },
    'createSession': { func: idlref_helper, fragment: 'widl-MediaKeys-createSession-MediaKeySession-MediaKeySessionType-sessionType', link_text: 'createSession()',  },
    'using-base64url': { func: term_helper, fragment: 'using-base64url', link_text: 'Using base64url'  },
  };

  var definitionInfo = {};
  var groupBaseURLs = {};
  var helperTypes = {
      'link' : link_helper,
      'var' : var_helper,
  };

  function encryptedMediaAddDefinitionInfo(groupName, groupBaseURL, definitions) {
      groupBaseURLs[groupName] = groupBaseURL;
      for (var def_id in definitions) {
          if (definitionInfo[def_id]) {
              console.log("Overriding previous definition of def-id '" + def_id + "'.");
          }
          var info = definitions[def_id];
          info.groupName = groupName;
          if (!info.func) {
              var helper_type = info.helper_type || "link";
              info.func = helperTypes[helper_type];
          }
          definitionInfo[def_id] = info;
      }
  }

  function encryptedMediaPreProcessor() {
    var original_EME_spec_url = EME_spec_url; // The loop may change multiple groupBaseURLs.
    var is_registry_file = window.respecConfig.edDraftURI.includes("/encrypted-media/format-registry/");
    var specStatus = window.respecConfig.specStatus;
    var specStatusIndex = location.search.indexOf("specStatus");
    if (specStatusIndex !== -1) {
      var status = location.search.substring(specStatusIndex);
      specStatusIndex = status.indexOf('=');
      status = status.substring(specStatusIndex+1);
      var semicolon = status.indexOf(';');
      if (semicolon !== -1) {
        status = status.substring(0, semicolon);
      }
      specStatus = status;
    }
    for (var x in groupBaseURLs) {
      // TODO: It is weird that EME_spec_url gets changed (once) in this loop.
      // TODO: This may not work for published registry pages unless we _don't_
      // use "ED" for them, and it may break for unpublished registry pages if
      // we stop using "ED" for them.
      if (groupBaseURLs[x] == original_EME_spec_url && specStatus == "ED") {
          // Refer to the local file rather than the published path.
          var file = "index.html";
          // Registry files need a relative path.
          var prefix = is_registry_file ? "../../" : "";
          EME_spec_url = prefix + file;
          groupBaseURLs[x] = EME_spec_url;
          // Refer to the Web IDL Editor’s Draft from Editor’s Drafts of this spec.
          IDL_spec_url = "https://heycam.github.io/webidl/";
      }
    }

    // Add the registry biblio entries to localBiblio.
    // If it is not empty, we need to add the entries to the existing object.
    var registry_base_path = is_registry_file ? "../" : "format-registry/";
    var registry_biblio_entries =
     getEncryptedMediaRegistryBibioEntries(registry_base_path,
                                           specStatus);
    if (window.respecConfig.localBiblio) {
      for (var property_name in registry_biblio_entries)
        window.respecConfig.localBiblio[property_name] = registry_biblio_entries[property_name];
    } else {
      window.respecConfig.localBiblio = registry_biblio_entries;
    }

    // adjust emeRegistryReferencesDefinitions to use proper links
    // def-id are then replaced in encryptedMediaPostProcessor
    function adjustFragments(key) {
      var entry = emeRegistryReferencesDefinitions[key];
      var fragment = entry.fragment;
      var anchor = "";
      var anchorStart = fragment.indexOf('#');
      if (anchorStart !== -1) {
        anchor = fragment.substring(anchorStart);
        fragment = fragment.substring(0, anchorStart);
      }
      var specref = registry_biblio_entries[fragment];
      // not all fragments are associated with a specref
      if (specref === undefined) return;
      if (entry !== undefined) {
        entry.fragment = specref.href + anchor;
      }
    }
    for (var key in emeRegistryReferencesDefinitions) {
      adjustFragments(key);
    }

   $("a[def-id]").each(function () {
       $(this).addClass('externalDFN');
     });
     preElementMediaProcessor();
  }

  // The JS highlighter in respec removes all element before doing the highlight,
  // so we need to replace the a element before the highlighter get there
  function preElementMediaProcessor() {
    var doc = document;
    $("pre.example a[def-id]").each(function () {
      var $ant = $(this);
      var def_id = $ant.attr('def-id');
      var info = definitionInfo[def_id];
      if (info) {
        var text = info.link_text;

        var element_text = this.innerHTML;
        if (element_text) {
          text = element_text;
        }
        var span = doc.createElement("span");
        span.innerHTML = text;
        this.parentNode.replaceChild(span, this);

      } else {
        console.log("Found def-id '" + def_id + "' but it does not correspond to anything");
      }
    });
  }

  function encryptedMediaPostProcessor() {
    var doc = document;
    doc.normalize();

    var usedMap = {};

    $("a[def-id]").each(function () {
      var $ant = $(this);
      var def_id = $ant.attr('def-id');
      var info = definitionInfo[def_id];
      if (info) {
        if (!usedMap[def_id]) {
          usedMap[def_id] = 1;
        } else {
          usedMap[def_id]++;
        }

        var id = info.fragment;
        var text = info.link_text;

        if ($ant.attr('name')) {
          id = $ant.attr('name');
        }

        var element_text = this.innerHTML;
        if (element_text) {
          text = element_text;
        }

        var df = doc.createDocumentFragment();
        doc.emeDefGroupName = info.groupName;
        info.func(doc, df, id, text);
        doc.emeDefGroupName = "";
        this.parentNode.replaceChild(df, this);

      } else {
        console.log("Found def-id '" + def_id + "' but it does not correspond to anything");
      }
    });

    // Update links to external type definitions.
    var externalClassInfo = {
      'AudioTrackList': {spec: 'html5', fragment: 'audiotracklist' },
      'TextTrackList': {spec: 'html5', fragment: 'texttracklist' },
      'TimeRanges': { spec: 'html5', fragment: 'timeranges' },
      'VideoTrackList': {spec: 'html5', fragment: 'videotracklist' },
      'EventTarget': { spec: 'dom', fragment: 'eventtarget' },
      'DOMString': { spec: 'webidl', fragment: 'idl-DOMString' },
      'boolean': { spec: 'webidl', fragment: 'idl-boolean' },
      'double': { spec: 'webidl', fragment: 'idl-double' },
      'unrestricted double': { spec: 'webidl', fragment: 'idl-unrestricted-double' },
      'unsigned long': { spec: 'webidl', fragment: 'idl-unsigned-long' },
      'unsigned long long': { spec: 'webidl', fragment: 'idl-unsigned-long-long' },
      'void': { spec: 'webidl', fragment: 'idl-void' },
      'ArrayBuffer': { spec: 'typed-array', fragment: 'ArrayBuffer' },
      'ArrayBufferView': { spec: 'typed-array', fragment: 'ArrayBufferView' },
      'EventHandler': { spec: 'webappapis', fragment: 'eventhandler' },
    };
    $("a:not([href])").each(function () {
      var $ant = $(this);
      var className = this.innerHTML;
      var info = externalClassInfo[className];
      if (info) {
        var id = info.fragment;
        var df = doc.createDocumentFragment();
        var baseURL = null;
        if (info.spec == 'html5') {
          baseURL = HTML_spec_url;
        } else if (info.spec == 'dom') {
          baseURL = DOM_spec_url;
        } else if (info.spec == 'webidl') {
          baseURL = IDL_spec_url;
        } else if (info.spec == 'typed-array') {
          baseURL = "https://www.khronos.org/registry/typedarray/specs/latest/";
        } else if (info.spec == 'eme') {
          baseURL = EME_spec_url;
        }

        if (baseURL) {
          df.appendChild($("<code/>").wrapInner($("<a/>").attr({href: baseURL + "#" + id, 'class': 'idlType'}).text(className))[0]);
          this.parentNode.replaceChild(df, this);
        }
      }
    });

    // Move algorithm text after method parameter & return value information.
    $("ol.method-algorithm").each(function() {
      var parent = this.parentNode;
      parent.removeChild(this);
      parent.appendChild($("<p/>").text("When this method is invoked, the user agent must run the following steps:")[0]);
      parent.appendChild(this);
    });

    // Add a simple id names for each method.
    // This is more useful than the long "widl-..." names when referencing
    // methods from outside this spec.
    // Because the <dt> already has a generated id, the id is added to the <code>.
    $("dl.methods > dt > dfn > code").each(function() {
        if (this.id) {
          console.error("Method " + this.textContent + "'s <code> element already has an 'id'.");
        }
        this.id = this.textContent;
    });

    // Validate that all defined def-ids are actually used.
    var excludeList = window.respecConfig.emeUnusedGroupNameExcludeList || [];
    for (var k in definitionInfo) {
      var defGroupName = definitionInfo[k].groupName;
      if (!usedMap[k] && !(excludeList.indexOf(defGroupName) != -1)) {
        console.log("def-id '" + k + "' from groupName '" + defGroupName + "' never used.");
      }
    }

    $("a[href]").each(function () {
      var link = $(this);
      var href = link.attr('href');
      var matched = /^#(.+)$/.exec(href);
      if (matched) {
        var id = matched[1];
        if (!document.getElementById(id)) {
          console.log("Internal link to an id '" + id + "' which does not exist");
        }
      }
    });

    // THIS MUST BE LAST.
    // Check for duplicate ids.
    $("[id]").each(function () {
      var elements = $('[id="' + this.id.replace(/"/g,'\\"') + '"]');
      if (elements.length != 1) {
        console.error("id '" + this.id + "' is used for " + elements.length + " elements. This instance: ", this);
      }
    });

    return;
  }

  function getEncryptedMediaRegistryBibioEntries(registry_base_path, status) {
    var initdata_path = registry_base_path + "initdata/";
    var stream_path = registry_base_path + "stream/";
    var postfix = ".html";
    var separator = "";
    if (status !== "ED") {
      initdata_path = "https://www.w3.org/TR/eme-initdata";
      stream_path = "https://www.w3.org/TR/eme-stream";
      postfix = "/";
      separator = "-";
    }
    return {
      "EME-INITDATA-REGISTRY": {
        title: "Encrypted Media Extensions Initialization Data Format Registry",
        href: initdata_path + ((postfix !== "/")? "index.html" : "-registry/"),
        authors: ["David Dorwin", "Adrian Bateman", "Mark Watson"],
        publisher: "W3C"
    },
      "EME-INITDATA-CENC": {
        title: "\"cenc\" Initialization Data Format",
        href: initdata_path + separator + "cenc" + postfix,
        authors: ["David Dorwin", "Adrian Bateman", "Mark Watson", "Jerry Smith"],
        publisher: "W3C"
    },
      "EME-INITDATA-WEBM": {
        title: "\"webm\" Initialization Data Format",
        href: initdata_path + separator + "webm" + postfix,
        authors: ["David Dorwin", "Adrian Bateman", "Mark Watson", "Jerry Smith"],
        publisher: "W3C"
    },
      "EME-INITDATA-KEYIDS": {
        title: "\"keyids\" Initialization Data Format",
        href: initdata_path + separator + "keyids" + postfix,
        authors: ["David Dorwin", "Adrian Bateman", "Mark Watson", "Jerry Smith"],
        publisher: "W3C"
    },
    "EME-STREAM-REGISTRY": {
        title: "Encrypted Media Extensions Stream Format Registry",
        href: stream_path + ((postfix !== "/")? "index.html" : "-registry/"),
        authors: ["David Dorwin", "Adrian Bateman", "Mark Watson"],
        publisher: "W3C"
    },
    "EME-STREAM-MP4": {
        title: "ISO Common Encryption ('cenc') Protection Scheme for ISO Base Media File Format Stream Format",
        href: stream_path + separator + "mp4" + postfix,
        authors: ["David Dorwin", "Adrian Bateman", "Mark Watson", "Jerry Smith"],
        publisher: "W3C"
    },
    "EME-STREAM-WEBM": {
        title: "WebM Stream Format",
        href: stream_path + separator + "webm" + postfix,
        authors: ["David Dorwin", "Adrian Bateman", "Mark Watson"],
        publisher: "W3C"
    }
  }
  };

  encryptedMediaAddDefinitionInfo("encrypted-media", EME_spec_url, emeDefinitions);
  encryptedMediaAddDefinitionInfo("eme-references-from-registry", EME_spec_url, emeRegistryReferencesDefinitions);

  window.encryptedMediaAddDefinitionInfo = encryptedMediaAddDefinitionInfo;
  window.encryptedMediaPreProcessor = encryptedMediaPreProcessor;
  window.encryptedMediaPostProcessor = encryptedMediaPostProcessor;
})();
