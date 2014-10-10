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

</xsl:stylesheet>
