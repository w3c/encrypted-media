<?xml version="1.0" encoding="ISO-8859-1"?>

<!-- Adapted from http://code.google.com/p/html5-mediasource-api/source/browse/trunk/draft-spec/spec-html.xsl -->

<xsl:stylesheet version="1.0" 
		xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" doctype-system="about:legacy-compat" encoding="utf-8" omit-xml-declaration="yes" />

  <xsl:variable name="lower">abcdefghijklmnopqrstuvwxyz___</xsl:variable> 
  <xsl:variable name="upper">ABCDEFGHIJKLMNOPQRSTUVWXYZ ()</xsl:variable>

  <xsl:template match="//*">
    <xsl:copy select=".">
      <xsl:for-each select="attribute::*">
	<xsl:attribute name="{name(.)}">
	  <xsl:value-of select="." />
	</xsl:attribute>
      </xsl:for-each>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>

  <!-- Optionally use the prefix attribute to differentiate between different definitions with the same name. -->

  <xsl:template match="//precoderef">
    <a><xsl:attribute name="href">#dom-<xsl:value-of select="translate(@prefix,$upper,$lower)"/><xsl:value-of select="translate(.,$upper,$lower)"/></xsl:attribute><xsl:value-of select="."/></a>
  </xsl:template>

  <xsl:template match="//premethodref">
    <a><xsl:attribute name="href">#dom-<xsl:value-of select="translate(@prefix,$upper,$lower)"/><xsl:value-of select="translate(.,$upper,$lower)"/></xsl:attribute><xsl:value-of select="."/></a>
  </xsl:template>

  <xsl:template match="//precodedfn">
    <dfn><xsl:attribute name="id">dom-<xsl:value-of select="translate(@prefix,$upper,$lower)"/><xsl:value-of select="translate(.,$upper,$lower)"/></xsl:attribute><xsl:value-of select="."/></dfn>
  </xsl:template>

  <xsl:template match="//coderef">
    <code><a><xsl:attribute name="href">#dom-<xsl:value-of select="translate(@prefix,$upper,$lower)"/><xsl:value-of select="translate(.,$upper,$lower)"/></xsl:attribute><xsl:value-of select="."/></a></code>
  </xsl:template>

  <xsl:template match="//codedfn">
    <dfn><xsl:attribute name="id">dom-<xsl:value-of select="translate(@prefix,$upper,$lower)"/><xsl:value-of select="translate(.,$upper,$lower)"/></xsl:attribute><code><xsl:value-of select="."/></code></dfn>
  </xsl:template>

  <xsl:template match="//methoddfn">
    <dfn><xsl:attribute name="id">dom-<xsl:value-of select="translate(@prefix,$upper,$lower)"/><xsl:value-of select="translate(@name,$upper,$lower)"/></xsl:attribute><code><xsl:value-of select="."/></code></dfn>
  </xsl:template>

  <xsl:template match="//methodref">
    <code><a><xsl:attribute name="href">#dom-<xsl:value-of select="translate(@prefix,$upper,$lower)"/><xsl:value-of select="translate(.,$upper,$lower)"/></xsl:attribute><xsl:value-of select="."/>()</a></code>
  </xsl:template>

  <xsl:template match="//videoref">
    <code><a><xsl:attribute name="href">http://www.w3.org/TR/html5/embedded-content-0.html#<xsl:value-of select="@name"/></xsl:attribute><xsl:value-of select="."/></a></code>
  </xsl:template>

  <!-- videoref without <code> -->
  <xsl:template match="//videoanchor">
    <a><xsl:attribute name="href">http://www.w3.org/TR/html5/embedded-content-0.html#<xsl:value-of select="@name"/></xsl:attribute><xsl:value-of select="."/></a>
  </xsl:template>

  <xsl:template match="//dom4ref">
    <a><xsl:attribute name="href">http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#<xsl:value-of select="@name"/></xsl:attribute><xsl:value-of select="."/></a>
  </xsl:template>

  <xsl:template match="//media-element-load-algorithm">
    <a><xsl:attribute name="href">http://www.w3.org/TR/html5/embedded-content-0.html#media-element-load-algorithm</xsl:attribute>media element load algorithm</a>
  </xsl:template>

  <xsl:template match="//resource-selection-algorithm">
    <a><xsl:attribute name="href">http://www.w3.org/TR/html5/embedded-content-0.html#concept-media-load-algorithm</xsl:attribute>resource selection algorithm</a>
  </xsl:template>

  <xsl:template match="//resource-fetch-algorithm">
    <a><xsl:attribute name="href">http://www.w3.org/TR/html5/embedded-content-0.html#concept-media-load-resource</xsl:attribute>resource fetch algorithm</a>
  </xsl:template>

  <xsl:template match="//not-supported-err">
    <code><a><xsl:attribute name="href">http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-domexception-not_supported_err</xsl:attribute>NOT_SUPPORTED_ERR</a></code>
  </xsl:template>

  <xsl:template match="//invalid-state-err">
    <code><a><xsl:attribute name="href">http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-domexception-invalid_state_err</xsl:attribute>INVALID_STATE_ERR</a></code>
  </xsl:template>

  <xsl:template match="//syntax-err">
    <code><a><xsl:attribute name="href">http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-domexception-syntax_err</xsl:attribute>SYNTAX_ERR</a></code>
  </xsl:template>

  <xsl:template match="//invalid-access-err">
    <code><a><xsl:attribute name="href">http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-domexception-invalid_access_err</xsl:attribute>INVALID_ACCESS_ERR</a></code>
  </xsl:template>

  <xsl:template match="//type-mismatch-err">
    <code><a><xsl:attribute name="href">http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-domexception-type_mismatch_err</xsl:attribute>TYPE_MISMATCH_ERR</a></code>
  </xsl:template>

  <xsl:template match="//readystate">
    <code title="dom-media-readyState"><a><xsl:attribute name="href">http://www.w3.org/TR/html5/embedded-content-0.html#dom-media-readystate</xsl:attribute>readyState</a></code>
  </xsl:template>

  <xsl:template match="//have-metadata">
    <code title="dom-media-HAVE_METADATA"><a><xsl:attribute name="href">http://www.w3.org/TR/html5/embedded-content-0.html#dom-media-have_metadata</xsl:attribute>HAVE_METADATA</a></code>
  </xsl:template>

  <xsl:template match="//have-future-data">
    <code title="dom-media-HAVE_FUTURE_DATA"><a><xsl:attribute name="href">http://www.w3.org/TR/html5/embedded-content-0.html#dom-media-have_future_data</xsl:attribute>HAVE_FUTURE_DATA</a></code>
  </xsl:template>

  <xsl:template match="//have-enough-data">
    <code title="dom-media-HAVE_ENOUGH_DATA"><a><xsl:attribute name="href">http://www.w3.org/TR/html5/embedded-content-0.html#dom-media-have_enough_data</xsl:attribute>HAVE_ENOUGH_DATA</a></code>
  </xsl:template>

  <xsl:template match="//queue-a-task">
    <a><xsl:attribute name="href">http://www.w3.org/TR/html5/webappapis.html#queue-a-task</xsl:attribute>queue a task</a>
  </xsl:template>

  <xsl:template match="//fire-a-simple-event">
    <a><xsl:attribute name="href">http://www.w3.org/TR/html5/webappapis.html#fire-a-simple-event</xsl:attribute>fire a simple event</a>
  </xsl:template>

  <xsl:template match="//synchronous-section">
    <a><xsl:attribute name="href">http://www.w3.org/TR/html5/webappapis.html#synchronous-section</xsl:attribute>synchronous section</a>
  </xsl:template>

  <xsl:template match="//EventHandler">
    <a><xsl:attribute name="href">http://www.w3.org/TR/html5/webappapis.html#eventhandler</xsl:attribute>EventHandler</a>
  </xsl:template>

  <xsl:template match="//media-element">
    <a><xsl:attribute name="href">http://www.w3.org/TR/html5/embedded-content-0.html#media-element</xsl:attribute>media element</a>
  </xsl:template>

  <xsl:template match="//ascii-encoding">
    <a><xsl:attribute name="href">http://www.w3.org/TR/html5/infrastructure.html#ascii-compatible-character-encoding</xsl:attribute>ASCII-compatible character encoding</a>
  </xsl:template>

  <xsl:template match="//non-normative-section">
    <p><i>This section is non-normative.</i></p>
  </xsl:template>

  <xsl:template match="//non-normative-sections">
    <p><i>This section and its subsections are non-normative.</i></p>
  </xsl:template>

</xsl:stylesheet>
