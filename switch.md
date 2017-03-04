If MediaKeys is set before playback starts, the implementation **MUST** support switching between clear and encrypted streams.

_NOTE_: Whether the clear and encrypted streams - or even multiple streams of either type - may use different contentTypes is left to other specifications related to media sources and capability detection.

_NOTE_: Applications are advised that at the time of this writing, at least some major browser do not support this.

Support of switching when MediaKeys is set after the playback starts, or when the clear stream uses a different contentType, is a quality of implementation issue.

_NOTE_: Applications are advised that at the time of this writing, at least some major browser do not support this. Applications that need this functionality SHOULD set MediaKeys before loading the media resource.

