(function() {
  var EME_spec_url = "http://www.w3.org/TR/encrypted-media/";
  var HTML_spec_url = "http://www.w3.org/TR/html5/embedded-content-0.html";
  var DOM_spec_url = "https://dom.spec.whatwg.org/";
  var IDL_spec_url = "https://heycam.github.io/webidl/";

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
    link_helper(doc, df, 'http://www.w3.org/TR/encoding/#' + id, text);
  }

  function webappapis_helper(doc, df, id, text) {
    link_helper(doc, df, 'http://www.w3.org/TR/html5/webappapis.html#' + id, text);
  }

  function infrastructure_helper(doc, df, id, text) {
    link_helper(doc, df, 'http://www.w3.org/TR/html5/infrastructure.html#' + id, text);
  }

  function browsers_helper(doc, df, id, text) {
    link_helper(doc, df, 'http://www.w3.org/TR/html5/browsers.html#' + id, text);
  }

  function mixedcontent_helper(doc, df, id, text) {
    link_helper(doc, df, 'http://www.w3.org/TR/mixed-content/#' + id, text);
  }

  function term_helper(doc, df, id, text) {
    link_helper(doc, df, url_helper(doc, '#' + id), text);
  }

  function var_helper(doc, df, id, text) {
    df.appendChild($("<var/>").wrapInner($("<a/>").attr({href: url_helper(doc, id)}).text(text))[0]);
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
    link_helper(doc, df, 'http://www.webmproject.org/code/specs/container/#' + id, text);
  }

  function queue_and_fire_helper(doc, df, id, text) {
    webappapis_helper(doc, df, 'queue-a-task', text);
    df.appendChild(doc.createTextNode(' to '));
    webappapis_helper(doc, df, 'fire-a-simple-event', 'fire a simple event');
    df.appendChild(doc.createTextNode(' named'));
  }

  function queue_and_fire_track_event_helper(doc, df, id, text) {
    webappapis_helper(doc, df, 'queue-a-task', 'Queue a task');
    df.appendChild(doc.createTextNode(' to fire a '));
    infrastructure_helper(doc, df, 'concept-events-trusted', 'trusted event');
    df.appendChild(doc.createTextNode(' named '));
    code_videoref_helper(doc, df, 'handler-tracklist-on' + text, text);
    df.appendChild(doc.createTextNode(', that does not bubble and is not cancelable, and that uses the '));
    code_videoref_helper(doc, df, 'trackevent', 'TrackEvent');
    df.appendChild(doc.createTextNode(' interface,'));
  }

  function queue_and_run_helper(doc, df, id, text) {
    webappapis_helper(doc, df, 'queue-a-task', text);
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
    'initialization-data': { func: term_helper, fragment: 'initialization-data', link_text: 'Initialization Data'  },
    'initialization-data-type': { func: term_helper, fragment: 'initialization-data-type', link_text: 'Initialization Data Type'  },
    'session-id': { func: term_helper, fragment: 'session-id', link_text: 'Session ID'  },
    'distinctive-identifier': { func: term_helper, fragment: 'distinctive-identifier', link_text: 'Distinctive Identifier'  },
    'distinctive-identifiers': { func: term_helper, fragment: 'distinctive-identifier', link_text: 'Distinctive Identifiers'  },

    'requestMediaKeySystemAccess': { func: idlref_helper, fragment: 'widl-Navigator-requestMediaKeySystemAccess-Promise-MediaKeySystemAccess--DOMString-keySystem-sequence-MediaKeySystemConfiguration--supportedConfigurations', link_text: 'requestMediaKeySystemAccess()',  },
    'requestMediaKeySystemAccess-call': { func: idlref_helper, fragment: 'widl-Navigator-requestMediaKeySystemAccess-Promise-MediaKeySystemAccess--DOMString-keySystem-sequence-MediaKeySystemConfiguration--supportedConfigurations', link_text: 'requestMediaKeySystemAccess',  },
    'get-supported-configuration-algorithm': { func: term_helper, fragment: 'get-supported-configuration', link_text: 'Get Supported Configuration',  },
    'get-supported-capabilities-for-media-type-algorithm': { func: term_helper, fragment: 'get-supported-capabilities-for-media-type', link_text: 'Get Supported Capabilities for Media Type',  },
    'requirement-required': { func: idlref_helper, fragment: 'idl-def-MediaKeysRequirement.required', link_text: '"required"',  },
    'requirement-optional': { func: idlref_helper, fragment: 'idl-def-MediaKeysRequirement.optional', link_text: '"optional"',  },
    'requirement-not-allowed': { func: idlref_helper, fragment: 'idl-def-MediaKeysRequirement.not-allowed', link_text: '"not-allowed"',  },

    'option-label': { func: idlref_helper, fragment: 'widl-MediaKeySystemConfiguration-label', link_text: 'label',  },
    'option-initDataTypes': { func: idlref_helper, fragment: 'widl-MediaKeySystemConfiguration-initDataTypes', link_text: 'initDataTypes',  },
    'option-audioCapabilities': { func: idlref_helper, fragment: 'widl-MediaKeySystemConfiguration-audioCapabilities', link_text: 'audioCapabilities',  },
    'option-videoCapabilities': { func: idlref_helper, fragment: 'widl-MediaKeySystemConfiguration-videoCapabilities', link_text: 'videoCapabilities',  },
    'option-persistentState': { func: idlref_helper, fragment: 'widl-MediaKeySystemConfiguration-persistentState', link_text: 'persistentState',  },
    'option-distinctiveIdentifier': { func: idlref_helper, fragment: 'widl-MediaKeySystemConfiguration-distinctiveIdentifier', link_text: 'distinctiveIdentifier',  },
    'option-sessionTypes': { func: idlref_helper, fragment: 'widl-MediaKeySystemConfiguration-sessionTypes', link_text: 'sessionTypes',  },

    'capability-contentType' : { func: idlref_helper, fragment: 'widl-MediaKeySystemMediaCapability-contentType', link_text: 'contentType',  },
    'capability-robustness' : { func: idlref_helper, fragment: 'widl-MediaKeySystemMediaCapability-robustness', link_text: 'robustness',  },

    'keySystem-attribute': { func: idlref_helper, fragment: 'widl-MediaKeySystemAccess-keySystem', link_text: 'keySystem',  },
    'getConfiguration': { func: idlref_helper, fragment: 'widl-MediaKeySystemAccess-getConfiguration-MediaKeySystemConfiguration', link_text: 'getConfiguration()',  },
//  'createMediaKeys': { func: idlref_helper, fragment: 'widl-MediaKeySystemAccess-createMediaKeys-Promise-MediaKeys', link_text: 'createMediaKeys()',  },
    'createMediaKeys-call': { func: idlref_helper, fragment: 'widl-MediaKeySystemAccess-createMediaKeys-Promise-MediaKeys', link_text: 'createMediaKeys',  },

    'temporary-session': { func: idlref_helper, fragment: 'idl-def-MediaKeySessionType.temporary', link_text: '"temporary"',  },
    'persistent-license-session': { func: idlref_helper, fragment: 'idl-def-MediaKeySessionType.persistent-license', link_text: '"persistent-license"',  },
    'persistent-release-message-session': { func: idlref_helper, fragment: 'idl-def-MediaKeySessionType.xTBD', link_text: '"TBD"',  },

    'is-persistent-session-type-algorithm': { func: term_helper, fragment: 'is-persistent-session-type', link_text: 'Is persistent session type?',  },

    'createSession-call': { func: idlref_helper, fragment: 'widl-MediaKeys-createSession-MediaKeySession-MediaKeySessionType-sessionType', link_text: 'createSession',  },
    'setServerCertificate': { func: idlref_helper, fragment: 'widl-MediaKeys-setServerCertificate-Promise-void--BufferSource-serverCertificate', link_text: 'setServerCertificate()',  },
    'setServerCertificate-call': { func: idlref_helper, fragment: 'widl-MediaKeys-setServerCertificate-Promise-void--BufferSource-serverCertificate', link_text: 'setServerCertificate',  },

    'sessionId': { func: idlref_helper, fragment: 'widl-MediaKeySession-sessionId', link_text: 'sessionId',  },
    'expiration': { func: idlref_helper, fragment: 'widl-MediaKeySession-expiration', link_text: 'expiration',  },
    'closed': { func: idlref_helper, fragment: 'widl-MediaKeySession-closed', link_text: 'closed',  },
    'keyStatuses': { func: idlref_helper, fragment: 'widl-MediaKeySession-keyStatuses', link_text: 'keyStatuses',  },
    'generateRequest': { func: idlref_helper, fragment: 'widl-MediaKeySession-generateRequest-Promise-void--DOMString-initDataType-BufferSource-initData', link_text: 'generateRequest()',  },
    'generateRequest-call': { func: idlref_helper, fragment: 'widl-MediaKeySession-generateRequest-Promise-void--DOMString-initDataType-BufferSource-initData', link_text: 'generateRequest',  },
    'load': { func: idlref_helper, fragment: 'widl-MediaKeySession-load-Promise-boolean--DOMString-sessionId', link_text: 'load()',  },
    'load-call': { func: idlref_helper, fragment: 'widl-MediaKeySession-load-Promise-boolean--DOMString-sessionId', link_text: 'load',  },
    'update': { func: idlref_helper, fragment: 'widl-MediaKeySession-update-Promise-void--BufferSource-response', link_text: 'update()',  },
    'update-call': { func: idlref_helper, fragment: 'widl-MediaKeySession-update-Promise-void--BufferSource-response', link_text: 'update',  },
    'close': { func: idlref_helper, fragment: 'widl-MediaKeySession-close-Promise-void', link_text: 'close()',  },
    'close-call': { func: idlref_helper, fragment: 'widl-MediaKeySession-close-Promise-void', link_text: 'close',  },
    'remove': { func: idlref_helper, fragment: 'widl-MediaKeySession-remove-Promise-void', link_text: 'remove()',  },
    'remove-call': { func: idlref_helper, fragment: 'widl-MediaKeySession-remove-Promise-void', link_text: 'remove',  },

    'status-usable': { func: idlref_helper, fragment: 'idl-def-MediaKeyStatus.usable', link_text: '"usable"',  },
    'status-expired': { func: idlref_helper, fragment: 'idl-def-MediaKeyStatus.expired', link_text: '"expired"',  },
    'status-output-downscaled': { func: idlref_helper, fragment: 'idl-def-MediaKeyStatus.output-downscaled', link_text: '"output-downscaled"',  },
    'status-output-not-allowed': { func: idlref_helper, fragment: 'idl-def-MediaKeyStatus.output-not-allowed', link_text: '"output-not-allowed"',  },
    'status-status-pending': { func: idlref_helper, fragment: 'idl-def-MediaKeyStatus.status-pending', link_text: '"status-pending"',  },

    'queue-message-algorithm': { func: term_helper, fragment: 'queue-message', link_text: 'queue a "message" event',  },
    'session-close-algorithm': { func: term_helper, fragment: 'session-close', link_text: 'session close',  },
    'encrypted-block-encountered-algorithm': { func: term_helper, fragment: 'encrypted-block-encountered', link_text: 'encrypted block encountered',  },
    'initdata-encountered-algorithm': { func: term_helper, fragment: 'initdata-encountered', link_text: 'Initialization Data encountered',  },
    'update-key-statuses-algorithm': { func: term_helper, fragment: 'update-key-statuses', link_text: 'update key statuses',  },
    'update-expiration-algorithm': { func: term_helper, fragment: 'update-expiration', link_text: 'update expiration',  },
    'resume-playback-algorithm': { func: term_helper, fragment: 'resume-playback', link_text: 'attempt to resume playback if necessary',  },
    'queue-waitingforkey-algorithm': { func: term_helper, fragment: 'queue-waitingforkey', link_text: 'queue a "waitingforkey" event',  },

    'session-storage': { func: term_helper, fragment: 'session-storage', link_text: 'Session Storage and Persistence',  },

    'mediaKeys-attribute': { func: idlref_helper, fragment: 'widl-HTMLMediaElement-mediaKeys', link_text: 'mediaKeys',  },
    'onencrypted': { func: idlref_helper, fragment: 'widl-HTMLMediaElement-onencrypted', link_text: 'onencrypted',  },
    'setMediaKeys': { func: idlref_helper, fragment: 'widl-HTMLMediaElement-setMediaKeys-Promise-void--MediaKeys-mediaKeys', link_text: 'setMediaKeys()',  },
    'setMediaKeys-call': { func: idlref_helper, fragment: 'widl-HTMLMediaElement-setMediaKeys-Promise-void--MediaKeys-mediaKeys', link_text: 'setMediaKeys',  },

    'keystatuseschange': { func: eventref_helper, fragment: 'keystatuseschange', link_text: 'keystatuseschange',  },
    'message': { func: eventref_helper, fragment: 'message', link_text: 'message',  },
    'encrypted': { func: eventref_helper, fragment: 'encrypted', link_text: 'encrypted',  },
    'waitingforkey': { func: eventref_helper, fragment: 'waitingforkey', link_text: 'waitingforkey',  },

    'message-type-license-request': { func: idlref_helper, fragment: 'idl-def-MediaKeyMessageType.license-request', link_text: '"license-request"',  },
    'message-type-license-renewal': { func: idlref_helper, fragment: 'idl-def-MediaKeyMessageType.license-renewal', link_text: '"license-renewal"',  },
    'message-type-license-release': { func: idlref_helper, fragment: 'idl-def-MediaKeyMessageType.license-release', link_text: '"license-release"',  },
    'message-type-individualization-request': { func: idlref_helper, fragment: 'idl-def-MediaKeyMessageType.individualization-request', link_text: '"individualization-request"',  },

    'message-event-messagetype-attribute': { func: idlref_helper, fragment: 'widl-MediaKeyMessageEvent-messageType', link_text: 'messageType',  },
    'message-event-message-attribute': { func: idlref_helper, fragment: 'widl-MediaKeyMessageEvent-message', link_text: 'message',  },

    'encrypted-event-initdatatype-attribute': { func: idlref_helper, fragment: 'widl-MediaEncryptedEventInit-initDataType', link_text: 'initDataType',  },
    'encrypted-event-initdata-attribute': { func: idlref_helper, fragment: 'widl-MediaEncryptedEventInit-initData', link_text: 'initData',  },

    'NotSupportedError': { func: local_exception_helper, fragment: '', link_text: 'NotSupportedError'  },
    'InvalidStateError': { func: local_exception_helper, fragment: '', link_text: 'InvalidStateError'  },
    'InvalidAccessError': { func: local_exception_helper, fragment: '', link_text: 'InvalidAccessError'  },
    'QuotaExceededError': { func: local_exception_helper, fragment: '', link_text: 'QuotaExceededError'  },
    'appropriate-error-name': { func: appropriate_error_name_helper, fragment: '', },

    'interface-textdecoder': { func: encodingapi_helper, fragment: 'interface-textdecoder', link_text: 'TextDecoder interface',  },
    'interface-textencoder': { func: encodingapi_helper, fragment: 'interface-textencoder', link_text: 'TextEncoder interface',  },
    'eventdfn': { func: eventdfn_helper, fragment: '', link_text: '', },
    'event': { func: code_dom_helper, fragment: 'event', link_text: 'Event', },

//    'media-element-load-algorithm': { func: videoref_helper, fragment: 'media-element-load-algorithm', link_text: 'media element load',  },
    'resource-fetch-algorithm': { func: videoref_helper, fragment: 'concept-media-load-resource', link_text: 'resource fetch',  },
    'current-playback-position': { func: videoref_helper, fragment: 'current-playback-position', link_text: 'current playback position',  },
    'media-data': { func: videoref_helper, fragment: 'media-data', link_text: 'media data',  },
    'media-resource': { func: videoref_helper, fragment: 'media-resource', link_text: 'media resource',  },
    'mime-types': { func: videoref_helper, fragment: 'mime-types', link_text: 'MIME types',  },
    'current-playback-position': { func: videoref_helper, fragment: 'current-playback-position', link_text: 'current playback position',  },
    'direction-of-playback': { func: videoref_helper, fragment: 'direction-of-playback', link_text: 'direction of playback',  },
    'media-element-decode-error': { func: code_videoref_helper, fragment: 'dom-mediaerror-media_err_decode', link_text: 'MEDIA_ERR_DECODE',  },
    'potentially-playing': { func: videoref_helper, fragment: 'potentially-playing', link_text: 'potentially playing',  },
    'media-crossorigin': { func: code_videoref_helper, fragment: 'attr-media-crossorigin', link_text: 'crossorigin',  },
    'media-src': { func: code_videoref_helper, fragment: 'attr-media-src', link_text: 'src',  },
    'readystate': { func: code_videoref_helper, fragment: 'dom-media-readystate', link_text: 'readyState',  },
//    'have-nothing': { func: code_videoref_helper, fragment: 'dom-media-have_nothing', link_text: 'HAVE_NOTHING',  },
    'have-metadata': { func: code_videoref_helper, fragment: 'dom-media-have_metadata', link_text: 'HAVE_METADATA',  },
//    'have-current-data': { func: code_videoref_helper, fragment: 'dom-media-have_current_data', link_text: 'HAVE_CURRENT_DATA',  },
    'have-future-data': { func: code_videoref_helper, fragment: 'dom-media-have_future_data', link_text: 'HAVE_FUTURE_DATA',  },
//    'have-enough-data': { func: code_videoref_helper, fragment: 'dom-media-have_enough_data', link_text: 'HAVE_ENOUGH_DATA',  },
//    'loadedmetadata': { func: code_videoref_helper, fragment: 'event-media-loadedmetadata', link_text: 'loadedmetadata',  },
//    'loadeddata': { func: code_videoref_helper, fragment: 'event-media-loadeddata', link_text: 'loadeddata',  },
    'htmlmediaelement': { func: code_videoref_helper, fragment: 'htmlmediaelement', link_text: 'HTMLMediaElement',  },
    'timed-text-tracks': { func: code_videoref_helper, fragment: 'timed-text-tracks', link_text: 'timed text tracks',  },

//    'invalid-access-err': { func: exception_helper, fragment: 'invalid_access_err', link_text: 'INVALID_ACCESS_ERR',  },
//    'invalid-state-err': { func: exception_helper, fragment: 'invalid_state_err', link_text: 'INVALID_STATE_ERR',  },
//    'not-found-err': { func: exception_helper, fragment: 'not_found_err', link_text: 'NOT_FOUND_ERR',  },
//    'not-supported-err': { func: exception_helper, fragment: 'not_supported_err', link_text: 'NOT_SUPPORTED_ERR',  },
//    'quota-exceeded-err': { func: exception_helper, fragment: 'quota_exceeded_err', link_text: 'QUOTA_EXCEEDED_ERR',  },
    'new-domexception-named': { func: new_domexception_helper, fragment: '', },
    'domexception': { func: domexception_helper, fragment: '', },
    'domexception-names': { func: webidl_helper, fragment: 'idl-DOMException-error-names', link_text: '', },
    'present-dictionary-member': { func: webidl_helper, fragment: 'dfn-present', link_text: 'present', },
    'not-present-dictionary-member': { func: webidl_helper, fragment: 'dfn-present', link_text: 'not present', },

    'queue-a-task-to-fire-an-event-named': { func: queue_and_fire_helper, fragment: '', link_text: 'queue a task',  },
    'Queue-a-task-to-fire-an-event-named': { func: queue_and_fire_helper, fragment: '', link_text: 'Queue a task',  },
    'Queue-a-task-to-run-algorithm': { func: queue_and_run_helper, fragment: '', link_text: 'Queue a task',  },

    'constructing-events': { func: dom_helper, fragment: 'constructing-events', link_text: 'Constructing events', },
    'document-concept': { func: dom_helper, fragment: 'concept-document', link_text: 'Document', },
    'origin': { func: browsers_helper, fragment: 'origin-0', link_text: 'origin', },
//    'effective-script-origin': { func: browsers_helper, fragment: 'effective-script-origin', link_text: 'effective script origin', },
    'cors-same-origin': { func: infrastructure_helper, fragment: 'cors-same-origin', link_text: 'CORS-same-origin', },

    'may-document-use-powerful-features-algorithm': { func: mixedcontent_helper, fragment: 'may-document-use-powerful-features', link_text: 'May Document use powerful features?', },
    'are-non-privileged-contexts-allowed-algorithm': { func: term_helper, fragment: 'are-non-privileged-contexts-allowed---deprecated', link_text: 'Are non-privileged contexts allowed?',  },

//    'contributors': { func: contributors_helper, fragment: '', link_text: '', },
  };

  // These definitions referring to locations in the main EME spec are only referenced from the registry.
  var emeRegistryReferencesDefinitions = {
    'eme-spec': { func: link_helper, fragment: '#', link_text: 'Encrypted Media Extensions', },
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
    for (var x in groupBaseURLs) {
      if (groupBaseURLs[x] == original_EME_spec_url && window.respecConfig.specStatus == "ED") {
          EME_spec_url = "index.html";
          groupBaseURLs[x] = EME_spec_url;
      }
    }

   $("a[def-id]").each(function () {
       $(this).addClass('externalDFN');
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
      'MediaKeys': { spec: 'eme', fragment: 'idl-def-MediaKeys' },
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
          baseURL = "http://dev.w3.org/2006/webapi/WebIDL/";
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
    $("dl.methods > dt > code").each(function() {
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
      var elements = $("[id='" + this.id + "']"); 
      if (elements.length != 1) {
        console.error("id '" + this.id + "' is used for " + elements.length + " elements. This instance: ", this);
      }
    });

    return;
  }

  encryptedMediaAddDefinitionInfo("encrypted-media", EME_spec_url, emeDefinitions);
  encryptedMediaAddDefinitionInfo("eme-references-from-registry", EME_spec_url, emeRegistryReferencesDefinitions);

  window.encryptedMediaAddDefinitionInfo = encryptedMediaAddDefinitionInfo;
  window.encryptedMediaPreProcessor = encryptedMediaPreProcessor;
  window.encryptedMediaPostProcessor = encryptedMediaPostProcessor;
})();
