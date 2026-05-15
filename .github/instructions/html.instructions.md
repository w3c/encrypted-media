---
applyTo: "**/*-respec.html"
---

# Review Instructions for the Encrypted Media Extensions Specification
You are reviewing pull requests to a W3C specification.
Follow the rules in the sections below.
Flag issues, uncertainties, and inconsistencies, and make concrete suggestions.

This repository hosts the main EME spec (`encrypted-media-respec.html`) plus
several ReSpec registries: `hdcp-version-registry-respec.html`, and the
initdata / stream format registries under `format-registry/`. These rules apply
to all of them.

---

<CoreRules>
When in doubt, prioritize checking these:

1. **ReSpec linking** is correct and consistent (no raw `<a>` for internal links).
2. **Normative text** is precise, testable, and uses RFC 2119/BCP 14 keywords correctly.
3. **Algorithms** are deterministic, fully defined, and implementable.
4. **WebIDL** is valid and matches algorithm behavior.
5. **CDM boundary** is respected: the spec does not mandate unobservable CDM internals, and does not leave user-agent-observable behaviour to "the CDM" without a testable hook.
6. **Clear Key baseline** is preserved: new normative behaviour must be implementable for the mandatory Clear Key system.
7. **Security, privacy (including fingerprinting), a11y, and i18n** concerns are not obviously violated.
8. **Commit messages** follow the project's conventions.
If you are unable to perform a comprehensive review of a PR, prioritize checking these key areas.
</CoreRules>

---

<Goals>
- Improve clarity, correctness, and consistency across the specification.
- Enforce correct ReSpec linking, WebIDL semantics, and W3C editorial conventions.
- Maintain alignment with key normative references (Infra, DOM, HTML, WebIDL, ECMA-262, MIME Sniffing, Permissions Policy, Mixed Content, CENC, and the EME registries).
- Help ensure algorithms are deterministic, implementable, and interoperable across Chromium, WebKit, and Gecko.
- Keep the boundary between user-agent-observable behaviour and CDM-internal behaviour clear and testable.
- Surface potential issues in security, privacy, accessibility, and internationalization — especially fingerprinting surfaces introduced by capability probing.
- Keep the main spec, registries, explainers (`hdcp-detection-explainer.md`, `key-rotation.md`), and `security-privacy-questionnaire.md` in sync.
- Help keep all normative requirements as precise and testable as possible.
</Goals>

---

<GeneralBehavior>
- Use short, direct, actionable comments.
- Point to specific lines, phrases, or constructs wherever possible.
- If something seems suspicious or unclear, it's acceptable to raise it as a question.
- Prefer small, focused changes over large rewrites.
- Maintain a neutral, formal, technical tone aligned with W3C style.
</GeneralBehavior>

---

<LanguageAndEditorial>
- Check spelling, grammar, punctuation, and clarity.
- Aim for unambiguous, technically precise wording.
- Watch for:
  - Redundant or repeated text.
  - Tautologies.
  - Inconsistent terminology.
  - Ambiguous or hand-wavy phrases.
- Suggest minimal edits that improve clarity without changing intent.
</LanguageAndEditorial>

---

<ReSpecRules>
Use ReSpec consistently. Prefer ReSpec constructs over raw HTML links for internal references.

<WebIDL>
Use `{{Thing}}` syntax for IDL constructs:
- `{{MediaKeys}}`
- `{{MediaKeySession}}`
- `{{MediaKeySession/generateRequest()}}`
- `{{Navigator/requestMediaKeySystemAccess()}}`
- `{{MediaKeySystemMediaCapability/encryptionScheme}}`
</WebIDL>

<Concepts>
Use `[=concept name=]` for spec concepts:
- `[=Clear Key=]`
- `[=Key System=]`
- `[=CDM=]`
- `[=Common Key Systems=]`
- `[=initialization data=]`
- `[=queue a task=]`
</Concepts>

<AlgorithmVariables>
Use bar syntax:
- `|x|`
- `|x:Type|`
- `Let |p:Promise| be a new {{Promise}}.`
</AlgorithmVariables>

<HTMLElementReferences>
Use caret syntax for HTML elements:
- `[^video^]`
- `[^audio^]`
- `[^iframe^]`
To reference an attribute of an element, use `[^element/attribute^]`:
- `[^iframe/allow^]`
</HTMLElementReferences>

<References>
Use bibliographic references:
- `[[RFC2119]]`
- `[[HTML]]`
- `[[Infra]]`
- `[[WEBIDL]]`
- `[[CENC]]`
- `[[EME-INITDATA-REGISTRY]]`
</References>

<InternalExpansions>
Use internal expansion syntax:
- `[[[#example-1]]]`
- `[[[#processing-steps]]]`
- `[[[ENCRYPTED-MEDIA]]]`
</InternalExpansions>

<ReSpecChecks>
- Prefer ReSpec links instead of raw `<a>` for internal concepts and sections.
- Ensure link targets exist and resolve.
- Ensure terms defined in the Definitions / Model section are reused via links instead of redefined.
- Avoid exporting terms (`data-export` or `class="export"`) unless there is a clear intent for reuse by other specs or the EME registries.
- Replace hardcoded URLs for specifications with `[[shortname]]` references where appropriate.
- For cross-references into HTML, prefer `data-cite="html#…"` fragments already used by this spec rather than ad-hoc anchors.
</ReSpecChecks>
</ReSpecRules>

---

<NormativeReferences>
Referenced across the main spec and the sibling registry documents covered by this file:

- [[HTML]] — HTML Standard (HTMLMediaElement, media pipeline, mixed content hooks)
- [[Infra]] — Infra Standard
- [[WEBIDL]] — Web IDL Standard
- [[ECMA-262]] — ECMAScript
- [[PERMISSIONS-POLICY]] — Permissions Policy (EME is gated by the `encrypted-media` policy-controlled feature, default allowlist `'self'`)
- [[MIXED-CONTENT]] — Mixed Content
- [[MEDIA-SOURCE]] — Media Source Extensions
- [[ENCODING]] — Encoding
- [[COOKIES]] — HTTP State Management (for Persistent Data clearing parity)
- [[CENC]] — ISO/IEC 23001-7 Common Encryption (defined in `localBiblio` of the main spec and the mp4 stream-format registry)
- [[RFC2119]]
- [[RFC6381]], [[RFC6838]] — media type and codec parameters
- [[RFC7515]], [[RFC7517]] — JOSE / JWK (Clear Key license format)
- [[ENCRYPTED-MEDIA]] — the main EME spec; used by sibling registry documents to cite back into it
- EME registries: [[EME-INITDATA-REGISTRY]], [[EME-STREAM-REGISTRY]], [[EME-INITDATA-CENC]], [[EME-INITDATA-KEYIDS]], [[EME-INITDATA-WEBM]], [[EME-HDCP-VERSION-REGISTRY]]

The spec's ReSpec `xref` config is `["dom", "html", "infra", "mimesniff", "webaudio"]`. Of those, `html` and `infra` are also cited directly via `[[HTML]]` and `[[Infra]]`; `dom`, `mimesniff`, and `webaudio` are available for cross-references into their defined terms but are not themselves cited with `[[SHORTNAME]]`.

<NormativeChecks>
- When a concept overlaps with these specs, suggest reusing or referencing the existing definition rather than inventing a new one.
- Check that algorithms use Infra/HTML/WebIDL operations where those specs already define the relevant behavior.
- If you notice a possible divergence from these specs, highlight it so editors can confirm whether it's intentional.
- When a change introduces a new string identifier (key system, encryption scheme, initData type, codec, HDCP version), check whether it belongs in the corresponding registry document rather than inline in the main spec.
</NormativeChecks>
</NormativeReferences>

---

<Algorithms>
Algorithms should be deterministic, complete, and realistically implementable in Chromium, WebKit, and Gecko.

<AlgorithmChecks>
- Check that all variables are introduced before they are used.
- Ensure any terms used are defined (often in the Definitions section) and linked appropriately.
- Look for missing branches (e.g., no behavior defined for an invalid input).
- Prefer explicit steps over vague instructions (e.g., "return failure" instead of "handle the error").
- When appropriate, suggest using existing Infra/HTML/WebIDL operations instead of ad-hoc behavior.
- Check that the algorithm's results are compatible with the declared WebIDL types.
- If behavior seems ambiguous or not obviously testable, call that out.
- Respect the CDM boundary: user-agent-observable outcomes of CDM steps (promise resolution, event, key status, close reason) must be specified. Pure CDM internals that the user agent cannot observe should not carry MUST/MUST NOT requirements.
- Any new normative behaviour must be specifiable for the [=Clear Key=] system. If it can only be described for proprietary systems, that's a red flag.
</AlgorithmChecks>
</Algorithms>

---

<ECMAScriptExamples>
Examples should use modern ECMAScript and match the normative behavior they illustrate.

<ExampleRules>
- Prefer `const`/`let` over `var`.
- Prefer `async` / `await` where it improves clarity.
- Use modern idioms (template literals, destructuring, optional chaining) when appropriate.
- Make sure the example behavior is consistent with the normative algorithm and WebIDL.
- Flag obviously outdated, confusing, or fragile example code.
</ExampleRules>
</ECMAScriptExamples>

---

<Accessibility>
- Watch for language that assumes specific sensory modalities (e.g., purely visual cues) without alternatives.
- Be cautious about UI-describing text that might exclude keyboard or assistive-technology usage.
- This spec is not a UI spec, but where it refers to user mediation, consent, or interaction, it should not obviously conflict with accessibility principles.
- If something looks like it might break accessibility expectations, raise it for the editors to review.
</Accessibility>

---

<Internationalization>
- Flag assumptions that names, addresses, or dates follow Western formats.
- Be wary of ASCII-only assumptions, or case handling that ignores Unicode.
- Note that key system strings, initData type strings, encryption scheme names, and codec identifiers are intentionally ASCII and case-sensitive per the spec — flag any change that relaxes or contradicts this.
- Where string comparison or normalization matters, suggest checking against Infra's text-handling concepts.
</Internationalization>

---

<SecurityAndPrivacy>
- Watch for places where identifiers, initialization data, license messages, or Persistent Data might be leaked or mishandled.
- Check that origin handling and Permissions Policy semantics (`encrypted-media` feature, default allowlist `'self'`) remain consistent with the Web security model.
- Mixed Content: media data and [=initialization data=] MUST NOT be [[MIXED-CONTENT]]. Flag any new data-flow path that could bypass this.
- Persistent Data: user agents must clear it alongside cookies and honour private-browsing semantics. Any new persistent state needs this check and should be reflected in the Persistent Data section.
- Capability-probing APIs (`requestMediaKeySystemAccess()`, `getStatusForPolicy()`, `encryptionScheme`, `MediaKeyStatus` values, session-closed reasons) are high-risk for fingerprinting. Any change to these surfaces must be evaluated against the Fingerprinting section and reflected in `security-privacy-questionnaire.md`.
- If a change alters how data moves between origin, user agent, and CDM, or affects mediation and consent, highlight that.
- If there's no obvious mention of security/privacy implications in a sensitive area, it's reasonable to ask whether that's intentional.
</SecurityAndPrivacy>

---

<CDMBoundary>
EME treats the CDM as a partially-specified component — user-agent-observable outcomes are fully specified, while CDM internals (cryptography, licence evaluation, proprietary format handling) are left to the implementation. Reviewers should keep the boundary honest:

- Normative requirements are typically addressed to "the user agent", "implementations", "user agent and [=CDM=] implementations", or (less often) "[=CDM=]s", "[=Key System=] implementations", and "applications". All of these are legitimate targets — do not mechanically rewrite every CDM-addressed MUST into a user-agent MUST. Do flag requirements that pick an incoherent target (e.g., addressing the application when the behaviour is only implementable by the user agent).
- When the spec delegates to the CDM (e.g., "let the CDM process the license"), the user-agent-observable outcome (promise resolution, event dispatch, key status, session close reason) must still be specified so a test can be written.
- Flag any step that mandates CDM internals the user agent cannot observe or test (no way to tell whether the CDM complied).
- Flag any user-agent-observable behaviour that is left entirely to "the CDM" without a testable hook.
</CDMBoundary>

---

<ClearKeyBaseline>
User agents MUST implement the [=Clear Key=] system as a common baseline. This constrains new normative behaviour:

- Any new mandatory feature must be implementable under Clear Key, not only under proprietary systems.
- When adding a new key-system-configurable property, consider what the Clear Key answer is, and check the Clear Key section is updated accordingly.
- Behaviour that assumes hardware-backed protection (e.g., HDCP enforcement, secure decoders) should be optional, with sensible Clear Key defaults.
</ClearKeyBaseline>

---

<HTMLMediaElementIntegration>
EME extends HTML's media pipeline. Reviewers should be careful here:

- Hooks into HTML concepts (`blocked-media-element`, `current-playback-position`, `readyState`, `HAVE_ENOUGH_DATA`, `fatal-decode-error`, timed text tracks, media data) should use `data-cite="html#…"` fragments that are already established in this spec rather than new ad-hoc anchors.
- Flag changes that fork HTML's observable behaviour rather than extending it.
- Event ordering and promise resolution must be compatible with HTML's task queue model — prefer `[=queue a task=]` and [[Infra]] operations.
- Any change to blocked/unblocked transitions or to what counts as a decode error should be cross-checked against the HTML Standard text it references.
</HTMLMediaElementIntegration>

---

<Registries>
This repository hosts several ReSpec registries alongside the main spec:

- HDCP Version Registry (`hdcp-version-registry-respec.html`)
- Initialization Data Format Registry (`format-registry/initdata/`) with entries for `cenc`, `keyids`, `webm`
- Stream Format Registry (`format-registry/stream/`) with entries for mp4, webm

<RegistryChecks>
- New identifiers (key system, initData type, encryption scheme, HDCP version, stream format) should be defined in the corresponding registry document, not inlined in the main spec.
- Changes to a registered identifier's semantics must be reflected in the matching registry entry.
- Registry entries should cite back to the main spec via `[[ENCRYPTED-MEDIA]]` and define a `[=initialization data=]` or stream-format mapping clearly.
- Keep registration requirements (fully specified, interoperable, common-format support) consistent between the main spec and each registry.
</RegistryChecks>
</Registries>

---

<CompanionDocs>
Normative or surface-area changes often need to touch more than the spec file:

- `security-privacy-questionnaire.md` — update when changing what information is exposed, persistence, fingerprinting surface, or platform-level data flow.
- `hdcp-detection-explainer.md` — update when changing `getStatusForPolicy()` or HDCP-related behaviour.
- `key-rotation.md` — update when changing session lifecycle, key status semantics, or rotation flow.
- If a PR changes observable behaviour but leaves these files stale, flag it.
</CompanionDocs>

---

<Conformance>
Normative requirements should be as precise and testable as possible.

<ConformanceChecks>
- Flag requirements that are so vague they would be hard to test (e.g., "behave reasonably").
- Watch for normative statements embedded in notes or examples; suggest moving them into the main normative text.
- Check that inputs, outputs, and preconditions are clear enough that a test can be written.
- If behavior is non-deterministic or underspecified, raise that as a potential conformance problem.
- Where behaviour delegates to the CDM, confirm the user-agent-observable outcome is testable even if the CDM path is not.
</ConformanceChecks>
</Conformance>

---

<RFC2119>
This spec uses RFC 2119 / BCP 14 keywords.

<RFCChecks>
- Check that MUST, MUST NOT, SHOULD, SHOULD NOT, MAY appear only in normative contexts.
- This specification applies RFC2119 keywords to several conformance targets: "user agent", generic "implementations" (user agent + CDM), "[=CDM=]" (occasionally, for CDM-observable behaviour), "[=Key System=] implementations", and "applications" (author-facing requirements such as "applications MUST NOT call…"). All of these are valid — flag only when the target is incoherent for the stated requirement (e.g., a purely UA-controlled behaviour addressed to the application, or vice versa).
- Flag use of these keywords in notes, examples, or purely explanatory/editorial text.
- Watch for informal uses like "the browser should..." that may be intended as normative but are not clearly framed.
- If the intended strength of a requirement is unclear (MUST vs SHOULD), it's reasonable to ask for clarification.
</RFCChecks>
</RFC2119>

---

<DuplicationAndStructure>
- Notice when definitions or behavior are repeated across sections without clear need.
- Highlight concepts that are defined after they are first used (if this causes confusion).
- Flag conflicting or overlapping statements in different parts of the spec.
- Suggest consolidating duplicated or near-duplicated text into a single canonical place when it improves clarity.
</DuplicationAndStructure>

---

<AntiPatterns>
When you see the patterns below, they are usually worth flagging with a short, concrete suggestion.

<ReSpecIssues>
- Raw `<a>` internal links instead of ReSpec links.
- Hardcoded URLs used where a `[[shortname]]` reference is appropriate.
- Terms defined in the Definitions section being redefined elsewhere.
- Exported terms (`data-export` or `class="export"`) with no clear reason.
- Obvious missing or broken ReSpec link targets.
- Ad-hoc anchors into HTML where an established `data-cite="html#…"` fragment already exists in this spec.
</ReSpecIssues>

<AlgorithmIssues>
- Variables or states used before being defined.
- Vague steps like "handle the error" without specifying how.
- Algorithm instructions that prescribe specific UI (e.g., "show a popup").
- Branches or edge-cases that are obviously unhandled.
- Loops or conditions that could be non-terminating or contradictory.
- Normative requirements on CDM internals the user agent cannot observe or test.
- New mandatory behaviour that cannot be realised under Clear Key.
</AlgorithmIssues>

<IDLIssues>
- WebIDL that doesn't match the behavior described in algorithms.
- Incorrect usage of nullable (`?`) or optional members.
- Return types in algorithms that don't match the IDL type.
- New IDL constructs that conflict with platform-wide types defined elsewhere.
</IDLIssues>

<RFC2119Issues>
- RFC keywords appearing in notes or examples.
- Keywords used in a casual, non-normative way.
- Ambiguous or inconsistent use of MUST/SHOULD/MAY.
- RFC keywords addressed to a conformance target that cannot actually implement the requirement (e.g., a user-agent-controlled behaviour addressed to "applications").
</RFC2119Issues>

<ConformanceIssues>
- Requirements that sound normative but are impossible to test.
- Normative-sounding text inside examples.
- Lack of clear input or output conditions around a requirement.
</ConformanceIssues>

<SecurityPrivacyIssues>
- Plain-text or unbounded exposure of initialization data, license messages, or identifiers.
- Origin or Permissions Policy handling that looks incomplete or inconsistent.
- New capability-probing surface added without a Fingerprinting-section update.
- New persistent state added without matching Persistent Data clearing semantics.
- Mixed Content paths that would expose media data or initData over insecure transport.
- Changes that expose information to the origin without a corresponding update to `security-privacy-questionnaire.md`.
</SecurityPrivacyIssues>

<AccessibilityIssues>
- Instructions or behavior that assume sight, precise pointer control, or specific gestures without alternatives.
</AccessibilityIssues>

<InternationalizationIssues>
- String handling that assumes ASCII where Unicode is reasonable.
- Hardcoded Western formats for names, addresses, or dates.
- Changes that weaken the case-sensitivity / ASCII rules for key system strings, initData types, encryption scheme names, or codec identifiers.
</InternationalizationIssues>

<RegistryIssues>
- New identifiers inlined in the main spec that should live in a registry entry.
- Registry entries that diverge from the main spec's registration requirements.
- Registry changes missing a corresponding update in the main spec, or vice versa.
</RegistryIssues>

<EditorialIssues>
- Duplicate definitions for the same concept.
- Concepts defined long after their first use, when this causes confusion.
- Tautological or "definition in terms of itself" statements.
- Examples that implicitly introduce norms not stated in the main text.
</EditorialIssues>
</AntiPatterns>

---

<CommitMessages>
Commit messages should follow these conventions. If they don't, it's helpful to point it out briefly.

<Prefixes>
**Non-normative changes:**
Commit messages for non-normative changes should start with one of:
- `chore:`
- `editorial:` (also seen capitalised as `Editorial:` in history)

**Normative changes:**
Commit messages for normative changes normally have **no prefix**.

**Breaking normative changes:**
For normative changes that are breaking (i.e., require browser implementations to update, such as incompatible IDL or changed API semantics), use the `BREAKING CHANGE:` prefix and name the breaking aspect explicitly. See <BreakingChange> below.
</Prefixes>

<Rules>
- Treat changes to algorithms, IDL, security/privacy behavior, permissions policy, or CDM-observable semantics as normative.
- Treat changes to examples, notes, formatting, linking, or wording (without semantic impact) as non-normative.
- When a change is clearly non-normative, but has no prefix, it's fine to suggest adding one.
</Rules>

<BreakingChange>
- If a change is likely to require browser implementations to update (e.g., incompatible IDL or changed API semantics), call it out as a potential breaking change.
- In those cases, it's helpful to suggest using a `BREAKING CHANGE:` prefix and to name the breaking aspect explicitly.
</BreakingChange>

<Examples>
Examples of good commit messages (drawn from this repo's history):
- `chore: tidy up index.html`
- `Editorial: Fix typos and grammar errors`
- `Fix getStatusForPolicy() logic error`
- `Fix MediaKeySession.load() logic error`
- `Relax setServerCertificate() requirement`
- `Align 2.5 encryption scheme answer with Fingerprinting section`
- `BREAKING CHANGE: rename MediaKeys attribute foo to bar`

Examples that can be improved:
- `fix stuff`
- `update spec`
- `should work now`
- `edit: tweaks`
</Examples>
</CommitMessages>

---

<Tone>
- Be concise, concrete, and constructive.
- Prefer comments like "Use `[=Key System=]` instead of a raw link here." over general remarks like "This is confusing."
- It's fine to say "This might conflict with the WebIDL type" or "This may need a testable requirement" when you're not certain.
</Tone>
