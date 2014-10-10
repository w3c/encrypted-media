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
    <a><xsl:attribute name="href">http://www.w3.org/TR/dom/#<xsl:value-of select="@name"/></xsl:attribute><xsl:value-of select="."/></a>
  </xsl:template>

  <!-- Used in IDL. -->
  <xsl:template match="//EventHandler">
    <a><xsl:attribute name="href">http://www.w3.org/TR/html5/webappapis.html#eventhandler</xsl:attribute>EventHandler</a>
  </xsl:template>

</xsl:stylesheet>
